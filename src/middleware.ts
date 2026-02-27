import { NextResponse, type NextRequest } from 'next/server';

const IS_DEV = process.env.NODE_ENV === 'development';

function buildCSP(nonce: string): string {
  const policy: Record<string, string[]> = {
    'default-src':     ["'self'"],
    // Removed 'strict-dynamic' to restore basic script loading compatibility
    // Added public assets and vercel domains if needed
    'script-src':      ["'self'", `'nonce-${nonce}'`, "'unsafe-inline'", ...(IS_DEV ? ["'unsafe-eval'"] : [])],
    'style-src':       ["'self'", "'unsafe-inline'"],
    'img-src':         ["'self'", 'blob:', 'data:', 'https://*'],
    'font-src':        ["'self'", 'data:', 'https://fonts.gstatic.com'],
    'object-src':      ["'none'"],
    'base-uri':        ["'self'"],
    'form-action':     ["'self'"],
    'frame-ancestors': ["'none'"],
    'connect-src':     ["'self'", 'https://*'],
  };

  const directives = Object.entries(policy)
    .map(([k, v]) => `${k} ${v.join(' ')}`)
    .join('; ');

  return IS_DEV ? directives : `${directives}; upgrade-insecure-requests`;
}

export function middleware(request: NextRequest): NextResponse {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  const nonce = btoa(String.fromCharCode(...array));

  const reqHeaders = new Headers(request.headers);
  reqHeaders.set('x-nonce', nonce);

  const res = NextResponse.next({
    request: {
      headers: reqHeaders,
    },
  });
  
  const h = res.headers;

  h.set('Content-Security-Policy', buildCSP(nonce));
  h.set('X-Content-Type-Options', 'nosniff');
  h.set('X-Frame-Options', 'DENY');
  h.set('X-XSS-Protection', '1; mode=block');
  h.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  h.set('Cross-Origin-Opener-Policy', 'same-origin');

  h.set('Permissions-Policy', [
    'camera=()', 'microphone=()', 'geolocation=()',
    'payment=()', 'usb=()', 'interest-cohort=()',
  ].join(', '));

  if (!IS_DEV) {
    h.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon\\.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
