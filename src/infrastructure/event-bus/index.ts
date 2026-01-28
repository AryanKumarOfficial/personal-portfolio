import RabbitMQBus from './rabbitmq';
import InMemoryBus from './in-memory';
import { EventBus } from '@/modules/core/events';

let eventBus: EventBus;

const rabbitUrl = process.env.RABBITMQ_URL;

if (rabbitUrl) {
    // In a real app, you might want to await connection or handle it lazily.
    // Here we instantiate it, but connection happens on first publish/subscribe or we can explicitly call connect.
    eventBus = new RabbitMQBus(rabbitUrl);
} else {
    console.warn('⚠️ RABBITMQ_URL not found. Using In-Memory Event Bus (Not suitable for multi-service production).');
    eventBus = new InMemoryBus();
}

export const getEventBus = () => eventBus;
