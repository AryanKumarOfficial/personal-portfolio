/**
 * Dead Letter Queue (DLQ) handler for failed events
 * In production, this would integrate with a service like Sentry, DataDog, or a dedicated DLQ system
 */

import { AppEvent } from '@/modules/core/events';

export interface FailedEvent {
  event: AppEvent;
  error: Error;
  attempts: number;
  timestamp: Date;
  eventType: string;
}

class DeadLetterQueue {
  private failedEvents: FailedEvent[] = [];
  private maxStoredEvents: number = 1000;

  /**
   * Add a failed event to the DLQ
   */
  async addFailedEvent(
    event: AppEvent,
    error: Error,
    attempts: number,
    eventType: string
  ): Promise<void> {
    const failedEvent: FailedEvent = {
      event,
      error,
      attempts,
      timestamp: new Date(),
      eventType,
    };

    // Store in memory (in production, this would persist to database or external service)
    this.failedEvents.push(failedEvent);
    
    // Keep only the most recent events to prevent memory issues
    if (this.failedEvents.length > this.maxStoredEvents) {
      this.failedEvents.shift();
    }

    // Log for monitoring and alerting
    console.error('🚨 Event moved to Dead Letter Queue:', {
      eventId: event.id,
      eventType,
      errorMessage: error.message,
      attempts,
      timestamp: failedEvent.timestamp,
    });

    // In production, integrate with error tracking services:
    // - Send to Sentry for monitoring
    // - Store in database for manual review
    // - Send alerts via PagerDuty/email
    // - Push to a dedicated DLQ service/queue
    
    this.logToErrorTrackingService(failedEvent);
  }

  /**
   * Get all failed events (for manual review/debugging)
   */
  getFailedEvents(): FailedEvent[] {
    return [...this.failedEvents];
  }

  /**
   * Get failed events by type
   */
  getFailedEventsByType(eventType: string): FailedEvent[] {
    return this.failedEvents.filter((e) => e.eventType === eventType);
  }

  /**
   * Clear all failed events (use with caution)
   */
  clear(): void {
    this.failedEvents = [];
  }

  /**
   * Integration point for error tracking services
   * In production, this would send to Sentry, DataDog, etc.
   */
  private logToErrorTrackingService(failedEvent: FailedEvent): void {
    // TODO: Integrate with error tracking service
    // Example with Sentry:
    // Sentry.captureException(failedEvent.error, {
    //   tags: {
    //     eventType: failedEvent.eventType,
    //     eventId: failedEvent.event.id,
    //   },
    //   extra: {
    //     event: failedEvent.event,
    //     attempts: failedEvent.attempts,
    //   },
    // });
    
    console.error('[DLQ] Error tracking service integration placeholder', {
      eventType: failedEvent.eventType,
      eventId: failedEvent.event.id,
      error: failedEvent.error.message,
    });
  }
}

// Singleton instance
const dlqInstance = new DeadLetterQueue();

export const getDeadLetterQueue = () => dlqInstance;
