import {NextResponse, NextRequest} from "next/server";
import getOrCreateDatabase from "./backend/app/server/setup";
import getOrCreateStorage from "./backend/app/server/storage";


export default async function middleware(req: NextRequest) {
    try {
        // Ensure database and storage are initialized
        await Promise.all([getOrCreateDatabase(), getOrCreateStorage()]);
        return NextResponse.next();

    } catch (error) {
        console.error("Middleware Error:", error);
        return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/images|favicon.ico).*)"],
};
