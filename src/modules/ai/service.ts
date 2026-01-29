import { google } from '@ai-sdk/google';
import { generateObject } from 'ai';
import { z } from 'zod';

export class AIService {
  static async generateSummary(
    title: string,
    description: string,
    githubUrl?: string
  ): Promise<{ summary: string; techStack: string[]; sentiment: number }> {
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.log('⚠️ No Google AI API Key found. Returning mock data.');
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
        GitHub: ${githubUrl || 'N/A'}
      `;

      const { object } = await generateObject({
        model: google('gemini-1.5-flash'),
        schema: z.object({
          summary: z.string().describe('A professional summary of the project (max 50 words).'),
          techStack: z.array(z.string()).describe('Detected or recommended tech stack.'),
          sentiment: z.number().describe('Sentiment score between 0 and 1.'),
        }),
        prompt: prompt,
      });

      return object;
    } catch (error) {
      console.error('AI Generation Error:', error);
      // Fallback for demo purposes if AI fails or quota exceeded
      return {
        summary: `(Fallback) Project: ${title}`,
        techStack: ['Unknown'],
        sentiment: 0.5,
      };
    }
  }
}
