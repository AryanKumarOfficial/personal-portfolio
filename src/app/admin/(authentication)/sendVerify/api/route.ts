import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";
import {connect} from "@/backend/Database/monggose";
import Verification from "@/backend/Database/Models/Verification";

export async function POST(req: NextRequest) {
    try {
        await connect();
        const {email, secret} = await req.json();
        if (!email || !secret) {
            return NextResponse.json({message: "Email is required!", success: false}, {status: 400});
        }
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.GOOGLE_EMAIL_ID,
                pass: process.env.GOOGLE_APP_PASSWORD
            }
        });
        const existingVerification = await Verification.deleteMany({email});
        console.log(existingVerification);
        const newVerification = new Verification({
            email,
            secret
        })
        await newVerification.save();
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Verify your email",
            html: `<a href="http://localhost:3000/admin/verify?email=${email}&secret=${secret}">Click here to verify your email</a>`
        });
        return NextResponse.json({message: "Email sent", success: true}, {status: 200});
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({message: "Error sending email", success: false}, {status: 500});
    }
}