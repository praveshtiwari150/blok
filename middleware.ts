import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

const publicRoutes = ["/"];

const apiAuthPrefix = "/api/auth";

const DEFAULT_LOGIN_REDIRECT = "/home";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const { nextUrl } = req;

    const session = await auth();
    const isLoggedIn = !!session?.user;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    
    if (isApiAuthRoute) {
        return NextResponse.next();
    }

    if (isPublicRoute && isLoggedIn) {
        return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }

    if (!isLoggedIn && !isPublicRoute) {
        return NextResponse.redirect(new URL('/', nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // Skip Next.js internals and static files
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};
