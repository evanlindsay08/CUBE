'use client';
import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUsernameSet: (username: string) => void;
  onWalletConnect: () => void;
}

export function ConnectModal({ isOpen, onClose, onUsernameSet, onWalletConnect }: ConnectModalProps) {
  const [showUsernameInput, setShowUsernameInput] = useState(false);
  const [username, setUsername] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const { setVisible } = useWalletModal();
  const { connected, disconnect } = useWallet();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (connected) {
      onWalletConnect();
    }
  }, [connected, onWalletConnect]);

  if (!isOpen || !isVisible) return null;

  const handleWalletConnect = () => {
    setVisible(true);
  };

  const handleDisconnect = async () => {
    await disconnect();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 content-warp">
      <div className="absolute inset-0 bg-black opacity-50 modal-backdrop" onClick={onClose}></div>
      <div className="border border-gray-700 bg-black p-8 relative z-10 w-[400px] modal-warp">
        {!showUsernameInput ? (
          <div className="space-y-4">
            <h2 className="text-xl text-center mb-6">Choose Connection Method</h2>
            <button
              onClick={() => setShowUsernameInput(true)}
              className="w-full glitch-button px-4 py-2 border border-gray-700 hover:bg-white hover:text-black transition"
            >
              Set Username
            </button>
            {!connected ? (
              <button
                onClick={handleWalletConnect}
                className="w-full glitch-button px-4 py-2 border border-gray-700 hover:bg-white hover:text-black transition"
              >
                Connect Wallet
              </button>
            ) : (
              <button
                onClick={handleDisconnect}
                className="w-full glitch-button px-4 py-2 border border-gray-700 hover:bg-white hover:text-black transition"
              >
                Disconnect Wallet
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl text-center mb-6">Enter Username</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full bg-transparent border border-gray-700 p-2 text-white focus:outline-none focus:border-white transition"
            />
            <div className="flex space-x-2">
              <button
                onClick={() => setShowUsernameInput(false)}
                className="flex-1 glitch-button px-4 py-2 border border-gray-700 hover:bg-white hover:text-black transition"
              >
                Back
              </button>
              <button
                onClick={() => {
                  if (username.trim()) {
                    onUsernameSet(username);
                    onClose();
                  }
                }}
                className="flex-1 glitch-button px-4 py-2 border border-gray-700 hover:bg-white hover:text-black transition"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 