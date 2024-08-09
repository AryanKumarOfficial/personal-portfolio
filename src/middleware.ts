import { NextResponse, NextRequest } from "next/server";
import getOrCreateDatabase from "./backend/app/server/setup";
import getOrCreateStorage from "./backend/app/server/storage";

export default async function middleware(req: NextRequest) {
  await Promise.all([getOrCreateDatabase(), getOrCreateStorage()]);
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/images|faviocon.ico).*)"],
};
