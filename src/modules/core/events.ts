export interface AppEvent<T = any> {
  id: string;
  type: string;
  payload: T;
  timestamp: Date;
  metadata?: Record<string, any>;
}

export type EventHandler<T = any> = (event: AppEvent<T>) => Promise<void>;

export interface EventBus {
  publish<T>(type: string, payload: T, metadata?: Record<string, any>): Promise<void>;
  subscribe<T>(type: string, handler: EventHandler<T>): Promise<void>;
}
