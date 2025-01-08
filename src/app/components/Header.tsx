'use client';
import { useState } from 'react';
import { PageTransition } from './PageTransition';
import { ConnectModal } from './ConnectModal';
import { Notification } from './Notification';
import { useWallet } from '@solana/wallet-adapter-react';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const { connected, publicKey, disconnect } = useWallet();

  const handleUsernameSet = (newUsername: string) => {
    setUsername(newUsername);
    localStorage.setItem('username', newUsername);
  };

  const handleWalletConnect = async () => {
    console.log('Wallet connected:', publicKey?.toBase58());
  };

  const handleAgentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!connected) {
      setNotificationMessage('Please connect your wallet to access this feature');
      setShowNotification(true);
    } else {
      setNotificationMessage('Please wait for the $CUBE token CA validation to be updated');
      setShowNotification(true);
    }
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleConnectClick = () => {
    setIsModalOpen(true);
  };

  const displayName = username || (connected ? `${publicKey?.toBase58().slice(0, 4)}...${publicKey?.toBase58().slice(-4)}` : 'Connect');

  return (
    <>
      <div className="flex justify-between items-center pb-4 border-b border-gray-700">
        <nav className="flex space-x-1.5">
          <PageTransition 
            href="/" 
            className="glitch-button px-3 py-1 border border-gray-700 hover:bg-white hover:text-black transition text-sm"
          >
            Home
          </PageTransition>
          <PageTransition 
            href="/chat" 
            className="glitch-button px-3 py-1 border border-gray-700 hover:bg-white hover:text-black transition text-sm"
          >
            Chat
          </PageTransition>
          <a href="#" onClick={handleAgentClick} className="glitch-button px-3 py-1 border border-gray-700 hover:bg-white hover:text-black transition text-sm">Art Agent</a>
          <a href="#" onClick={handleAgentClick} className="glitch-button px-3 py-1 border border-gray-700 hover:bg-white hover:text-black transition text-sm">Copy Writing Agent</a>
        </nav>
        
        <div className="flex items-center space-x-2">
          <a href="#" className="rainbow-button inline-flex items-center justify-center w-[32px] h-[32px] p-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <button
            onClick={handleConnectClick}
            className="glitch-button px-4 py-1.5 border border-gray-700 hover:bg-white hover:text-black transition"
          >
            {displayName}
          </button>
        </div>
      </div>

      <ConnectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUsernameSet={handleUsernameSet}
        onWalletConnect={handleWalletConnect}
      />

      <Notification 
        message={notificationMessage}
        isVisible={showNotification}
      />
    </>
  );
} 