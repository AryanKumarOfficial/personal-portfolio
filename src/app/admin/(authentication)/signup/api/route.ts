import {NextRequest, NextResponse} from "next/server";
import Admin from "@/backend/Database/Models/Admin";
import bcrypt from "bcryptjs";
import {connect} from "@/backend/Database/monggose";

export async function POST(req: NextRequest) {
    try {
        await connect();
        const {name, email, password}: {
            name: string,
            email: string,
            password: string
        } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({message: "Please fill all fields", success: false}, {status: 400});
        }
        const adminExists = await Admin.findOne({email}).exec();
        if (adminExists) {
            return NextResponse.json({message: "Admin already exists", success: false}, {status: 400});
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newAdmin = new Admin({
            name,
            email,
            password: hash
        });
        await newAdmin.save();

        return NextResponse.json({message: "Admin Registered successfully", success: true}, {status: 201});


    } catch
        (e: any) {
        console.log("Error signup", e);
        return NextResponse.json({message: "An error occurred", success: false}, {status: 500});
    }
}