'use client';

import React from 'react';

interface NotificationProps {
  message: string;
  isVisible: boolean;
}

export const Notification: React.FC<NotificationProps> = ({ message, isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
      <div className="flex items-center space-x-2">
        <span className="text-gray-500">&gt;</span>
        <span className="text-sm">{message}</span>
      </div>
    </div>
  );
}; 