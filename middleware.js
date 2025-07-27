import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en/', request.url));
  }

 
  if (pathname === '/mm' || pathname === '/en') {
    return NextResponse.redirect(new URL(`${pathname}/`, request.url));
  }

  
  if (pathname.startsWith('/mm/') || pathname.startsWith('/en/')) {
    return NextResponse.next();
  }

  
  
//   return NextResponse.redirect(new URL('/en/', request.url));
  // Otherwise, Next.js will naturally serve a 404 for non-existent routes.
  return NextResponse.next();
}


export const config = {
  matcher: [
    '/',        // Match the root path (tourism.gov.mm/)
    '/mm',      // Match /mm (without trailing slash)
    '/en',      // Match /en (without trailing slash)
    '/mm/:path*', // Match /mm/ and all its sub-paths
    '/en/:path*', // Match /en/ and all its sub-paths
    // Exclude Next.js internal files (_next/static, _next/image) and API routes
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
};