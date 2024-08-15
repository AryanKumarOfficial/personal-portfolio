// app/api/settings/route.ts
import {NextResponse} from "next/server";
import fs from "fs";
import path from "path";

// Define the path to the settings file
const settingsFilePath = path.join(process.cwd(), "src", "app", "data", "settings", "about.json");

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
        const {name, age, email, address, freelance, experience, language, title} = body.personal;
        const {year, projectsCompleted} = body.experiences;
        const skills = body.skills;
        const education = body.education;
        if (!name || !age || !email || !address || !freelance || !experience || !language || !year || !projectsCompleted || !skills || !education || !title) {
            console.log(body.experiences, 'title');
            return NextResponse.json({error: "Missing required fields"}, {status: 400});
        }

        // Save data to the JSON file
        fs.writeFileSync(settingsFilePath, JSON.stringify({
            personal: {name, age, email, address, freelance, experience, language, title},
            experiences: {year, projectsCompleted},
            skills,
            education,
        }, null, 2));

        return NextResponse.json({message: "Settings updated successfully"});
    } catch (error) {
        console.error("Failed to save settings:", error);
        return NextResponse.json({error: "Failed to save settings"}, {status: 500});
    }
}
