import { getEventBus } from '@/infrastructure/event-bus';
import { AIService } from './service';
import db from '@/lib/db';
import { AppEvent } from '@/modules/core/events';

export const startAIListeners = async () => {
  const bus = getEventBus();

  await bus.subscribe('PROJECT_CREATED', async (event: AppEvent) => {
    console.log('🤖 AI Service received PROJECT_CREATED:', event.payload.title);

    const { projectId, title, description, githubUrl } = event.payload;

    try {
      // 1. Generate Content
      const analysis = await AIService.generateSummary(title, description, githubUrl);

      // 2. Update Database
      await db.project.update({
        where: { id: projectId },
        data: {
          aiSummary: analysis.summary,
          aiTechStack: analysis.techStack,
          aiSentiment: analysis.sentiment,
        },
      });

      console.log(`✅ Project ${projectId} enriched by AI.`);

      // 3. Emit Enriched Event
      await bus.publish('PROJECT_AI_ENRICHED', {
        projectId,
        analysis,
      });

    } catch (error) {
      console.error('❌ AI Enrichment Failed:', error);
    }
  });
};
