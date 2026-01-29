/**
 * Retry utility with exponential backoff
 */

export interface RetryConfig {
  maxRetries: number;
  initialDelayMs: number;
  maxDelayMs: number;
  backoffMultiplier: number;
}

export const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxRetries: 3,
  initialDelayMs: 1000,
  maxDelayMs: 30000,
  backoffMultiplier: 2,
};

export interface RetryResult<T> {
  success: boolean;
  result?: T;
  error?: Error;
  attempts: number;
}

/**
 * Execute an operation with exponential backoff retry
 */
export async function withRetry<T>(
  operation: () => Promise<T>,
  config: Partial<RetryConfig> = {}
): Promise<RetryResult<T>> {
  const finalConfig = { ...DEFAULT_RETRY_CONFIG, ...config };
  let lastError: Error | undefined;
  let attempts = 0;

  for (let i = 0; i <= finalConfig.maxRetries; i++) {
    attempts = i + 1;
    try {
      const result = await operation();
      return { success: true, result, attempts };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      
      // Don't delay after the last attempt
      if (i < finalConfig.maxRetries) {
        const delay = Math.min(
          finalConfig.initialDelayMs * Math.pow(finalConfig.backoffMultiplier, i),
          finalConfig.maxDelayMs
        );
        
        console.log(
          `Retry attempt ${i + 1}/${finalConfig.maxRetries} failed. Retrying in ${delay}ms...`,
          { error: lastError.message }
        );
        
        await sleep(delay);
      }
    }
  }

  return { success: false, error: lastError, attempts };
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
