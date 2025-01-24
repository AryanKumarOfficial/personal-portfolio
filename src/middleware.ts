import {NextRequest, NextResponse} from 'next/server';
import {clerkMiddleware, createRouteMatcher} from '@clerk/nextjs/server';

// Define public routes
// All /admin routes are protected except /admin/login
const isPublicRoute = createRouteMatcher([
    '/',
    '/admin/login',
    '/contact',
    '/about',
    '/blogs',
    '/blog(.*)',
    '/portfolio',
    '/api(.*)',
]);

// Combine middlewares
async function middleware(req: NextRequest) {
    // @ts-ignore
    return clerkMiddleware(async (auth) => {

        // Continue with the middleware flow
        return NextResponse.next();
    })(req);
}

export default middleware;

export const config = {
    matcher: [
        // Protected /admin routes
        '/admin(.*)',
        // Protected forum routes
        '/forum(.*)',
        // Clerk's static file matcher
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // API routes
        '/(api|trpc)(.*)',
    ],
};
