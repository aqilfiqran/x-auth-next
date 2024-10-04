import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname || '';
  const cookie = cookies();

  if (path === '/' && cookie.has('auth.token')) {
    return NextResponse.redirect(new URL('/contacts', request.nextUrl).toString());
  }

  if (path === '/contacts' && !cookie.has('auth.token')) {
    return NextResponse.redirect(new URL('/', request.nextUrl).toString());
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:`
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image or images (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api/|_next/static|_next/image|favicon.ico|images|svgs|json|sitemap|.well-known).*)',
  ],
};
