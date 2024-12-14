import {NextResponse, NextRequest} from "next/server";


export default async function middleware(req: NextRequest) {
    try {
        // Ensure database and storage are initialized
        const headers = new Headers(req.headers);
        headers.set("x-current-path", req.nextUrl.pathname);
        return NextResponse.next({headers});

    } catch (error) {
        console.error("Middleware Error:", error);
        return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/images|favicon.ico).*)"],
};
