'use client';

import { type ReactNode } from 'react';
import { ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletProvider as SolanaWalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

// Import styles
import '@solana/wallet-adapter-react-ui/styles.css';

// Create static wallet adapter
const adapter = new PhantomWalletAdapter();

export function WalletProvider({ children }: { children: ReactNode }) {
  return (
    <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
      <SolanaWalletProvider wallets={[adapter]}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </SolanaWalletProvider>
    </ConnectionProvider>
  );
}

export default WalletProvider; 