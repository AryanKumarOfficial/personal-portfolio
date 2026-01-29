export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log('🚀 Starting Event Listeners...');

    // Import dynamically to avoid side effects during build
    const { startAIListeners } = await import('@/modules/ai/listener');

    // Start listeners
    await startAIListeners();
  }
}
