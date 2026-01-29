import { EnvViewer } from "@/components/EnvViewer";
import fs from "fs";
import path from "path";

function parseEnvFile(content: string) {
  const variables = [];
  const lines = content.split('\n');

  let currentCategory = "Other";

  for (const line of lines) {
    // Skip empty lines or comments without a category
    if (!line.trim() || (line.startsWith('#') && !line.includes(' '))) {
      continue;
    }

    // Check if line is a category comment
    if (line.startsWith('# ')) {
      currentCategory = line.substring(2).trim();
      continue;
    }

    // Parse variable line
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const name = match[1].trim();
      const value = match[2].replace(/^["']|["']$/g, '').trim();

      variables.push({
        name,
        value,
        category: currentCategory,
      });
    }
  }

  return variables;
}

export default function EnvPage() {
  // Read the .env.local file
  let envVariables: { name: string; value: string; category: string; }[] = [];

  try {
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      console.log(content, 'content');
      envVariables = parseEnvFile(content);
    } else {
      // Fallback to .env.example
      const examplePath = path.join(process.cwd(), '.env.example');
      if (fs.existsSync(examplePath)) {
        const content = fs.readFileSync(examplePath, 'utf8');
        envVariables = parseEnvFile(content);
      }
    }
  } catch (error) {
    console.error('Failed to read environment file:', error);
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Environment Variables</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Safely view and copy your environment variables. Click the eye icon to show or hide sensitive values.
      </p>

      <EnvViewer envVariables={envVariables} />

      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-md dark:bg-amber-950 dark:border-amber-800">
        <h2 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Security Notice</h2>
        <p className="text-amber-700 dark:text-amber-400 text-sm">
          These environment variables may contain sensitive information. Only use the &quot;Show Value&quot; feature
          in secure environments, and never share your screen while viewing sensitive values.
        </p>
      </div>
    </div>
  );
}
