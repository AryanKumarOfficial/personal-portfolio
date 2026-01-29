import { EventEmitter } from 'events';
import { AppEvent, EventBus, EventHandler } from '@/modules/core/events';

class InMemoryBus implements EventBus {
  private emitter = new EventEmitter();

  async publish<T>(type: string, payload: T, metadata?: Record<string, any>): Promise<void> {
    const event: AppEvent<T> = {
      id: crypto.randomUUID(),
      type,
      payload,
      timestamp: new Date(),
      metadata,
    };

    console.log(`[InMemoryBus] Published: ${type}`);
    // Emit next tick to simulate async
    setImmediate(() => {
        this.emitter.emit(type, event);
    });
  }

  async subscribe<T>(type: string, handler: EventHandler<T>): Promise<void> {
    this.emitter.on(type, async (event: AppEvent<T>) => {
      try {
        await handler(event);
      } catch (error) {
        console.error(`[InMemoryBus] Error handling ${type}:`, error);
      }
    });
    console.log(`[InMemoryBus] Subscribed to: ${type}`);
  }
}

export default InMemoryBus;
