import path from 'node:path';
import { access } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import { NextResponse, type NextRequest } from 'next/server';
import { getPdfDoc } from '@/lib/pdf-docs';
import { OFFICIAL_RFC2350_PATH } from '@/lib/official-documents';

type RouteContext = {
  params: Promise<{ slug: string }>;
};

/** Only allow safe characters: letters, digits, hyphens, underscores. */
function sanitizeSlug(slug: string): string | null {
  if (!slug || slug.length > 128) return null;
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return null;
  return slug;
}

export async function GET(request: NextRequest, { params }: RouteContext) {
  const { slug: rawSlug } = await params;

  // ── Step 1: Strict slug sanitization ──
  const slug = sanitizeSlug(rawSlug);
  if (!slug) {
    return new NextResponse(
      JSON.stringify({ error: 'Parameter tidak valid.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // ── Step 2: Allowlist-only lookup ──
  const doc = getPdfDoc(slug);
  if (!doc) {
    return new NextResponse(
      JSON.stringify({ error: 'Dokumen tidak ditemukan.' }),
      { status: 404, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // ── Step 3: Resolve and validate file path (prevent directory traversal) ──
  const publicDir = path.resolve(process.cwd(), 'public');
  const localPath = path.resolve(publicDir, doc.publicPath.replace(/^\//, ''));

  // Ensure resolved path is still inside public directory
  if (!localPath.startsWith(publicDir)) {
    return new NextResponse(
      JSON.stringify({ error: 'Akses ditolak.' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } },
    );
  }

  try {
    await access(localPath, fsConstants.R_OK);
  } catch {
    // Don't expose internal file paths in error messages
    return new NextResponse(
      JSON.stringify({ error: 'File belum tersedia.' }),
      { status: 404, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // ── Step 4: Redirect to the document ──
  if (slug === 'rfc-2350-unuja') {
    return NextResponse.redirect(new URL(OFFICIAL_RFC2350_PATH, request.url));
  }

  return NextResponse.redirect(new URL(doc.publicPath, request.url));
}
