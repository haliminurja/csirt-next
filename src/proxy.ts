import { NextResponse, type NextRequest } from 'next/server';

export function proxy(request: NextRequest): NextResponse {
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

  h.set('Content-Security-Policy', 'upgrade-insecure-requests');
  h.set('X-Content-Type-Options', 'nosniff');
  h.set('X-Frame-Options', 'DENY');
  h.set('X-XSS-Protection', '1; mode=block');
  h.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  h.set('Cross-Origin-Opener-Policy', 'same-origin');

  h.set('Permissions-Policy', [
    'camera=()', 'microphone=()', 'geolocation=()',
    'payment=()', 'usb=()', 'interest-cohort=()',
  ].join(', '));

  h.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

  h.delete('X-Powered-By');
  h.delete('Server');

  return res;
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon\\.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
