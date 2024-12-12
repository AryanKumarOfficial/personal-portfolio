import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/backend/Database/monggose";
import Admin from "@/backend/Database/Models/Admin";


export async function POST(req: NextRequest) {
    try {
        await connect();
        const {email}: { email: string } = await req.json();
        if (!email) {
            return NextResponse.json({
                message: "Email is required",
                role: null,
                success: false,
            }, {status: 400});
        }

        const admin = await Admin.findOne({email});
        if (!admin) {
            return NextResponse.json({
                message: "Admin not found",
                role: null,
                success: false,
            }, {status: 404});
        }

        const role = admin.isVerified ? "admin" : "user";
        return NextResponse.json({
            role,
            message: "Role fetched successfully",
            success: true,
        }, {status: 200});

    } catch (e: any) {
        console.log("Error fetching Role: ", e);
        return NextResponse.json({
            message: "Internal Server Error",
            role: null,
            success: false,
        }, {status: 500});

    }
}