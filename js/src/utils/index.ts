// Common utility functions for LangGraph Essentials

/**
 * Simple utility to create a delay/sleep function
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generate a simple UUID-like string for demo purposes
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Format state for logging/debugging
 */
export function formatState(state: any): string {
  return JSON.stringify(state, null, 2);
}

/**
 * Console logging with timestamps for debugging
 */
export function logWithTimestamp(message: string, data?: any): void {
  const timestamp = new Date().toISOString();
  if (data) {
    console.log(`[${timestamp}] ${message}:`, data);
  } else {
    console.log(`[${timestamp}] ${message}`);
  }
}