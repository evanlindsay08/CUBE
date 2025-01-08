import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

export const getWallets = () => {
  if (typeof window === 'undefined') return [];
  return [new PhantomWalletAdapter()];
}; 