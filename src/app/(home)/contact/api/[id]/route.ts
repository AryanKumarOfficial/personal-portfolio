import {NextResponse, NextRequest} from "next/server";
import Message from "@/backend/Database/Models/Message";
import {connect} from "@/backend/Database/monggose";
import {ObjectId} from "mongodb";

export async function DELETE(req: NextRequest, {params}: { params: { id: string } }) {
    try {
        await connect();
        const message = await Message.findByIdAndDelete(new ObjectId(params.id));
        if (!message) {
            return NextResponse.json({message: "Message not found"}, {status: 404});
        }
        return NextResponse.json({message: "Message deleted successfully"}, {status: 200});
    } catch (e: any) {
        return NextResponse.json({message: e?.message}, {status: 500});
    }
}