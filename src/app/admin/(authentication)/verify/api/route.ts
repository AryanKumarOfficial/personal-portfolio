import {NextRequest, NextResponse} from "next/server";
import Verification from "@/backend/Database/Models/Verification";
import {connect} from "@/backend/Database/monggose";
import Admin from "@/backend/Database/Models/Admin";

export async function POST(req: NextRequest) {
    try {
        await connect();
        const {email, secret}: {
            email: string,
            secret: string
        } = await req.json();

        if (!email || !secret) {
            return NextResponse.json({message: "Email is required!", success: false}, {status: 400});
        }

        // verify the token from the db
        const existingVerification = await Verification.findOne({email, secret});
        if (!existingVerification) {
            return NextResponse.json({message: "Invalid token", success: false}, {status: 400});
        }

        await Admin.findOneAndUpdate({email}, {verified: true});
        await Verification.deleteMany({email});
        return NextResponse.json({message: "Email verified", success: true}, {status: 200});


    } catch (e) {
        console.log(e);
        return NextResponse.json({message: "Internal Server Error", success: false}, {status: 500});
    }
}