import {NextResponse} from "next/server";
import fs from "fs";
import path from "path";

// Define the path to the settings file
const settingsFilePath = path.join(process.cwd(), "src", "app", "data", "settings", "home.json");
console.log(settingsFilePath, "settingsFilePath");

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {title, bio} = body.personal;
        if (!title || !bio) {
            return NextResponse.json({error: "Missing required fields"}, {status: 400});
        }

        // Ensure the directory exists
        const dir = path.dirname(settingsFilePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {recursive: true});
        }

        // Save data to a JSON file (or replace this with database logic)
        const settingsData = {
            title,
            bio,
        };

        fs.writeFileSync(settingsFilePath, JSON.stringify(settingsData, null, 2));

        return NextResponse.json({message: "Settings saved successfully"});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: "Failed to save settings"}, {status: 500});
    }
}

export async function GET() {
    try {
        if (!fs.existsSync(settingsFilePath)) {
            return NextResponse.json({error: "Settings file does not exist"}, {status: 404});
        }

        const fileData = fs.readFileSync(settingsFilePath, "utf-8");
        const settingsData = JSON.parse(fileData);

        return NextResponse.json(settingsData);
    } catch (error) {
        return NextResponse.json({error: "Failed to load settings"}, {status: 500});
    }
}
