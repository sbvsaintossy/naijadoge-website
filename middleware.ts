/**
 * Enterprise Middleware for Naijadoge Platform
 * Implements CSP, XSS protection, HSTS, and frame protection
 */

export const securityHeaders = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://fonts.googleapis.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https: blob:",
    "font-src 'self' https://fonts.gstatic.com data:",
    "connect-src 'self' https://* wss://*",
    "frame-src 'self' https://challenges.cloudflare.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; '),
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(self), microphone=(self), geolocation=()',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload'
};

export default function middleware(request: Request) {
  const response = new Response(null, {
    headers: securityHeaders
  });
  return response;
}
