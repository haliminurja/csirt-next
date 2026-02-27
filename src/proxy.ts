import { NextResponse, type NextRequest } from 'next/server';

const IS_DEV = process.env.NODE_ENV === 'development';

function buildCSP(nonce: string): string {
  const policy: Record<string, string[]> = {
    'default-src':     ["'self'"],
    'script-src':      ["'self'", `'nonce-${nonce}'`, "'strict-dynamic'", ...(IS_DEV ? ["'unsafe-eval'"] : [])],
    'style-src':       ["'self'", "'unsafe-inline'"],
    'img-src':         ["'self'", 'blob:', 'data:'],
    'font-src':        ["'self'", 'data:'],
    'object-src':      ["'none'"],
    'child-src':       ["'none'"],
    'frame-ancestors': ["'none'"],
    'base-uri':        ["'self'"],
    'form-action':     ["'self'"],
    'manifest-src':    ["'self'"],
  };

  const directives = Object.entries(policy)
    .map(([k, v]) => `${k} ${v.join(' ')}`)
    .join('; ');

  return IS_DEV ? directives : `${directives}; upgrade-insecure-requests`;
}

export function proxy(request: NextRequest): NextResponse {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  const reqHeaders = new Headers(request.headers);
  reqHeaders.set('x-nonce', nonce);

  const res = NextResponse.next({ request: { headers: reqHeaders } });
  const h   = res.headers;

  h.set('Content-Security-Policy',  buildCSP(nonce));
  h.set('X-Content-Type-Options',   'nosniff');
  h.set('X-Frame-Options',          'DENY');
  h.set('X-XSS-Protection',         '1; mode=block');
  h.set('Referrer-Policy',          'strict-origin-when-cross-origin');
  h.set('Cross-Origin-Opener-Policy', 'same-origin');

  h.set('Permissions-Policy', [
    'camera=()', 'microphone=()', 'geolocation=()',
    'payment=()', 'usb=()', 'interest-cohort=()',
  ].join(', '));

  if (!IS_DEV) {
    h.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  }

  h.delete('X-Powered-By');
  h.delete('Server');

  return res;
}

export const config = {
  matcher: [
    {
      source: '/((?!_next/static|_next/image|favicon\\.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};