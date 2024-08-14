// app/api/settings/route.ts
import {NextResponse} from "next/server";
import fs from "fs";
import path from "path";

// Define the path to the settings file
const settingsFilePath = path.join(process.cwd(), "src", "app", "data", "about.json");

// Handle GET request to fetch data
export async function GET() {
    try {
        const fileData = fs.readFileSync(settingsFilePath, "utf-8");
        const settingsData = JSON.parse(fileData);

        return NextResponse.json(settingsData, {status: 200});
    } catch (error) {
        console.error("Failed to load settings:", error);
        return NextResponse.json({error: "Failed to load settings"}, {status: 500});
    }
}

// Handle POST request to update data
export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate and sanitize input if necessary

        // Save data to the JSON file
        fs.writeFileSync(settingsFilePath, JSON.stringify(body, null, 2));

        return NextResponse.json({message: "Settings updated successfully"});
    } catch (error) {
        console.error("Failed to save settings:", error);
        return NextResponse.json({error: "Failed to save settings"}, {status: 500});
    }
}
