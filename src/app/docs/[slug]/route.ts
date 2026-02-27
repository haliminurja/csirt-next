import path from 'node:path';
import { access } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import { NextResponse, type NextRequest } from 'next/server';
import { getPdfDoc } from '@/lib/pdf-docs';

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: NextRequest, { params }: RouteContext) {
  const { slug } = await params;
  const doc = getPdfDoc(slug);

  if (!doc) {
    return new NextResponse('Dokumen tidak ditemukan.', { status: 404 });
  }

  const localPath = path.join(process.cwd(), 'public', doc.publicPath.replace(/^\//, ''));

  try {
    await access(localPath, fsConstants.R_OK);
  } catch {
    return new NextResponse(`File PDF belum tersedia di server: ${doc.publicPath}`, { status: 404 });
  }

  return NextResponse.redirect(new URL(doc.publicPath, request.url));
}
