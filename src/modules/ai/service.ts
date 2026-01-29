import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'mock-key',
});

export class AIService {
  static async generateSummary(title: string, description: string, githubUrl?: string): Promise<{ summary: string; techStack: string[]; sentiment: number }> {
    if (!process.env.OPENAI_API_KEY) {
      console.log('⚠️ No OpenAI API Key found. Returning mock data.');
      return {
        summary: `(AI Generated) A fantastic project about ${title}.`,
        techStack: ['React', 'Next.js', 'TypeScript'],
        sentiment: 0.9,
      };
    }

    try {
      const prompt = `
        Analyze the following project:
        Title: ${title}
        Description: ${description}
        GitHub: ${githubUrl}

        Provide a JSON response with:
        1. A professional summary (max 50 words).
        2. Detected or recommended tech stack (array of strings).
        3. Sentiment score (0-1).
      `;

      const response = await openai.chat.completions.create({
        model: 'gpt-4o', // or gpt-3.5-turbo
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: "json_object" },
      });

      const content = response.choices[0].message.content;
      if (!content) throw new Error('No content from AI');

      return JSON.parse(content);
    } catch (error) {
      console.error('AI Generation Error:', error);
      throw error;
    }
  }
}
