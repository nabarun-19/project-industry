import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

 

import { getToken } from 'next-auth/jwt'
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const token =await getToken({req:request})
    const url=request.nextUrl

    if(token && (
        url.pathname.startsWith('/sign-in')||
        url.pathname.startsWith('/signup')||
        url.pathname.startsWith('/verify')
  
    
    )){
        return NextResponse.redirect(new URL('/dashboard',request.url))

    }
 
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher:[ '/sign-in',
    '/signup',
    
    '/dashboard/:path*',
    '/verify/:path*'
  ]
}