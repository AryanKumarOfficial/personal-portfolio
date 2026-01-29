import amqp from 'amqplib';
import { AppEvent, EventBus, EventHandler } from '@/modules/core/events';

class RabbitMQBus implements EventBus {
  private connection: any | null = null;
  private channel: any | null = null;
  private url: string;
  private exchange: string = 'portfolio_events';

  constructor(url: string) {
    this.url = url;
  }

  async connect() {
    if (this.connection) return;

    try {
      this.connection = await amqp.connect(this.url);
      this.channel = await this.connection.createChannel();
      await this.channel.assertExchange(this.exchange, 'topic', { durable: true });
      console.log('✅ Connected to RabbitMQ');
    } catch (error) {
      console.error('❌ Failed to connect to RabbitMQ:', error);
      throw error;
    }
  }

  async publish<T>(type: string, payload: T, metadata?: Record<string, any>): Promise<void> {
    if (!this.channel) {
      await this.connect();
    }

    const event: AppEvent<T> = {
      id: crypto.randomUUID(),
      type,
      payload,
      timestamp: new Date(),
      metadata,
    };

    const routingKey = type.toLowerCase().replace(/_/g, '.');

    this.channel!.publish(
      this.exchange,
      routingKey,
      Buffer.from(JSON.stringify(event))
    );

    console.log(`[EventBus] Published: ${type}`);
  }

  async subscribe<T>(type: string, handler: EventHandler<T>): Promise<void> {
    if (!this.channel) {
      await this.connect();
    }

    const queueName = `service_${type.toLowerCase()}`;
    const routingKey = type.toLowerCase().replace(/_/g, '.');

    await this.channel!.assertQueue(queueName, { durable: true });
    await this.channel!.bindQueue(queueName, this.exchange, routingKey);

    this.channel!.consume(queueName, async (msg: any) => {
      if (msg) {
        try {
          const event: AppEvent<T> = JSON.parse(msg.content.toString());
          await handler(event);
          this.channel!.ack(msg);
        } catch (error) {
          console.error(`Error processing event ${type}:`, error);
          // this.channel!.nack(msg); // Optional: nack implementation
        }
      }
    });

    console.log(`[EventBus] Subscribed to: ${type}`);
  }
}

export default RabbitMQBus;
