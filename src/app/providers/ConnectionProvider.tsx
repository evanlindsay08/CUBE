'use client';

import { Connection } from '@solana/web3.js';
import { createContext, useContext, useMemo, type ReactNode } from 'react';

const ConnectionContext = createContext<Connection | null>(null);

export function useConnection(): Connection {
  const context = useContext(ConnectionContext);
  if (!context) {
    throw new Error('Missing connection context');
  }
  return context;
}

export function CustomConnectionProvider({
  endpoint,
  children,
}: {
  endpoint: string;
  children: ReactNode;
}) {
  const connection = useMemo(
    () => new Connection(endpoint, 'confirmed'),
    [endpoint]
  );

  return (
    <ConnectionContext.Provider value={connection}>
      {children}
    </ConnectionContext.Provider>
  );
} 