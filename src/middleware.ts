import {NextResponse, NextRequest} from "next/server";

export default async function middleware(req: NextRequest) {
    try {
        const {pathname, origin} = req.nextUrl;

        // Log request details
        console.log("[Middleware] Request received", {
            pathname,
            cookies: req.cookies.getAll(),
        });

        // Extract cookies
        const authCookies = req.cookies.getAll();
        console.log("[Middleware] Extracted cookies", authCookies);

        // Extract token and role
        const token = authCookies.find((cookie) => cookie.name.includes("token"))?.value || null;
        const role = authCookies.find((cookie) => cookie.name.includes("role"))?.value || null;
        console.log("[Middleware] Token and role extracted", {token, role});

        // Handle redirects based on token and role
        if (!token || !role) {
            if (pathname.includes("/admin") && !pathname.includes("/admin/login")) {
                console.log("[Middleware] No token, redirecting to /admin/login");
                return NextResponse.redirect(new URL("/admin/login", origin));
            } else if (pathname.includes("/admin/login")) {
                console.log("[Middleware] No token, already on /admin/login");
                return NextResponse.next();
            }
            return NextResponse.next();
        }

        if (token && role !== "admin") {
            console.log("[Middleware] Non-admin role detected, redirecting to /");
            return NextResponse.redirect(new URL("/", origin));
        }

        if (pathname.includes("/admin/login") && token && role === "admin") {
            console.log("[Middleware] Admin already logged in, redirecting to /admin");
            return NextResponse.redirect(new URL("/admin", origin));
        }

        // Add custom headers to the response
        const response = NextResponse.next();
        response.headers.set("x-current-path", pathname);
        console.log("[Middleware] Custom headers added", {"x-current-path": pathname});

        return response;
    } catch (error) {
        console.error("[Middleware] Error occurred", error);
        console.log("[Middleware] Redirecting to / due to error");
        return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    }
}

export const config = {
    // Match only routes under /admin
    matcher: "/admin/:path*",
};
