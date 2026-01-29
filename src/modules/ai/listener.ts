import { getEventBus } from '@/infrastructure/event-bus';
import { AIService } from './service';
import db from '@/lib/db';
import { AppEvent } from '@/modules/core/events';
import { withRetry } from '@/infrastructure/retry';
import { getDeadLetterQueue } from '@/infrastructure/dead-letter-queue';

export const startAIListeners = async () => {
  const bus = getEventBus();
  const dlq = getDeadLetterQueue();

  await bus.subscribe('PROJECT_CREATED', async (event: AppEvent) => {
    console.log('🤖 AI Service received PROJECT_CREATED:', event.payload.title);

    const { projectId, title, description, githubUrl } = event.payload;

    // Process with retry logic and exponential backoff
    const retryResult = await withRetry(
      async () => {
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

        return analysis;
      },
      {
        maxRetries: 3,
        initialDelayMs: 1000,
        maxDelayMs: 30000,
        backoffMultiplier: 2,
      }
    );

    // If all retries failed, send to dead-letter queue
    if (!retryResult.success && retryResult.error) {
      console.error(
        `❌ AI Enrichment Failed after ${retryResult.attempts} attempts. Moving to DLQ.`,
        { projectId, error: retryResult.error.message }
      );
      
      await dlq.addFailedEvent(
        event,
        retryResult.error,
        retryResult.attempts,
        'PROJECT_CREATED'
      );
    }
  });
};
