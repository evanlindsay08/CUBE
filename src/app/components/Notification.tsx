'use client';

interface NotificationProps {
  message: string;
  isVisible: boolean;
}

export function Notification({ message, isVisible }: NotificationProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="bg-black border border-gray-700 p-4 shadow-lg notification-warp">
        <div className="flex items-center space-x-2">
          <span className="text-gray-500">></span>
          <span className="text-sm">{message}</span>
        </div>
      </div>
    </div>
  );
} 