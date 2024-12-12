import {NextRequest, NextResponse} from "next/server";
import Admin from "@/backend/Database/Models/Admin";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

export async function POST(req: NextRequest) {
    try {
        const {email, password} = await req.json();
        if (!email || !password) {
            return NextResponse.json({
                message: "Email and password are required",
                success: false,
                admin: null, token: null
            }, {status: 400});
        }
        const isAdminExists = await Admin.findOne({email});
        if (!isAdminExists) {
            return NextResponse.json({
                message: "Admin not found",
                success: false,
                admin: null,
                token: null
            }, {status: 404});
        }


        const isPasswordValid = await bcrypt.compare(password, String(isAdminExists.password));
        if (!isPasswordValid) {
            return NextResponse.json({
                message: "Invalid Password",
                success: false,
                admin: null,
                token: null
            }, {status: 401});
        }

        if (!isAdminExists.isAdmin) {
            return NextResponse.json({
                message: "Unauthorized Access!",
                success: false,
                admin: null,
                token: null
            }, {status: 401});
        }

        if (!isAdminExists.isVerified) {
            return NextResponse.json({
                message: "Account is not verified",
                success: false,
                admin: null, token: null
            }, {status: 401});
        }

        const token = JWT.sign({
            email: isAdminExists.email,
            id: isAdminExists._id
        }, process.env.JWT_SECRET as string, {expiresIn: "1h"});

        return NextResponse.json({
            message: "Login Successful",
            success: true,
            admin: isAdminExists,
            token
        }, {status: 200});

    } catch
        (e: any) {
        return NextResponse.json({
            message: "Internal Server Error!",
            success: false,
            admin: null,
            token: null
        }, {status: 500});
    }
}
