import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/backend/Database/monggose";
import Message from "@/backend/Database/Models/Message";

export async function POST(req: NextRequest) {
    try {
        await connect()
        const {name, email, message}: {
            name: string,
            email: string,
            message: string
        } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({error: "Missing required fields"}, {status: 400});
        }
        const newMessage = new Message({
            name,
            email,
            message
        });
        await newMessage.save();
        return NextResponse.json({message: "Message sent"}, {status: 201});

    } catch (e) {
        return NextResponse.json({error: "An error occurred"}, {status: 500});
    }
}

export async function GET() {
    try {
        await connect()
        const messages = await Message.find().sort({createdAt: -1});
        return NextResponse.json(messages, {status: 200});
    } catch (e) {
        return NextResponse.json({error: "An error occurred"}, {status: 500});
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await connect()
        const {id}: { id: string } = await req.json();
        if (!id) {
            return NextResponse.json({error: "Missing required fields"}, {status: 400});
        }
        await Message.findByIdAndDelete(id);
        return NextResponse.json({message: "Message deleted"}, {status: 200});
    } catch (e) {
        return NextResponse.json({error: "An error occurred"}, {status: 500});
    }
}

