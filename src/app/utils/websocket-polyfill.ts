'use client';

declare global {
  interface Window {
    WebSocket: typeof WebSocket;
  }
  namespace NodeJS {
    interface Global {
      WebSocket: any;
    }
  }
}

if (typeof window !== 'undefined') {
  // Browser environment
  window.WebSocket = window.WebSocket;
} else {
  // Node.js environment
  try {
    const ws = require('ws');
    (global as any).WebSocket = ws;
  } catch (e) {
    console.warn('WebSocket not available in this environment');
  }
}

export {}; 