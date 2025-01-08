'use client';
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { containsBannedWords, sanitizeMessage } from '../utils/wordFilter';
import { Notification } from '../components/Notification';

export default function Chat() {
  const [messages, setMessages] = useState<Array<{text: string, user: string, timestamp: string}>>([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState<string>('Anonymous');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const sendMessage = () => {
    if (newMessage.trim()) {
      if (containsBannedWords(newMessage)) {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
        return;
      }

      setMessages([
        ...messages,
        {
          text: sanitizeMessage(newMessage),
          user: username,
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono">
      <div className="content-warp">
        <div className="border border-gray-700 p-8 w-[1024px] h-[800px] flex flex-col">
          <Header />

          {/* Chat Container */}
          <div className="flex-1 overflow-y-auto mb-4 border border-gray-700 p-4">
            {messages.map((msg, index) => (
              <div key={index} className="mb-2">
                <span className="text-gray-500">[{msg.timestamp}] </span>
                <span className="text-cyan-400">{msg.user}: </span>
                <span>{msg.text}</span>
              </div>
            ))}
            {messages.length === 0 && (
              <div className="text-gray-500 text-center mt-4">
                No messages yet. Start the conversation!
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && newMessage.trim()) {
                  if (containsBannedWords(newMessage)) {
                    setShowNotification(true);
                    setTimeout(() => setShowNotification(false), 3000);
                    return;
                  }
                  setMessages([
                    ...messages,
                    {
                      text: sanitizeMessage(newMessage),
                      user: username,
                      timestamp: new Date().toLocaleTimeString()
                    }
                  ]);
                  setNewMessage('');
                }
              }}
              placeholder="Type a message..."
              className="flex-1 bg-transparent border border-gray-700 p-2 text-white focus:outline-none focus:border-white transition"
            />
            <button
              onClick={sendMessage}
              className="glitch-button px-4 py-2 border border-gray-700 hover:bg-white hover:text-black transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <Notification
        message="Message contains inappropriate content"
        isVisible={showNotification}
      />
    </div>
  );
} 