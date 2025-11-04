'use client';
import { useState } from 'react';
import { Bell, Check } from 'lucide-react';

interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'success' | 'warning' | 'error';
  icon: string;
  read?: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: 'Low Stock Alert',
    message: 'Inventory Alert: Your stock for Classic Burger is running low.',
    type: 'warning',
    icon: '📦',
  },
  {
    id: 2,
    title: 'New Order Received',
    message: 'New Order! You’ve received a new order from Customer #452.',
    type: 'success',
    icon: '🛒',
  },
  {
    id: 3,
    title: 'Daily Sales Summary',
    message: 'Sales Update: You’ve reached 80% of today’s target.',
    type: 'error',
    icon: '📈',
  },
  {
    id: 4,
    title: 'Employee Shift Reminder',
    message: 'Shift Reminder: Akbar starts his shift in 30 minutes.',
    type: 'error',
    icon: '👨‍🍳',
  },
  {
    id: 5,
    title: 'Payment Received',
    message: 'Payment Success: A payment of 30,000 has been received.',
    type: 'success',
    icon: '💰',
  },
];

export default function NotificationPanel() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="relative p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
      >
        <Bell className="w-6 h-6 text-zinc-700 dark:text-zinc-200" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-4 w-96 bg-white dark:bg-zinc-900 shadow-xl rounded-2xl border border-zinc-200 dark:border-zinc-700 p-4 z-50">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">Notification</h3>
            <button
              onClick={markAllAsRead}
              className="text-sm text-green-600 hover:underline flex items-center gap-1"
            >
              <Check size={16} /> Mark all as read
            </button>
          </div>

          <div className="flex gap-4 mb-3 text-sm font-medium">
            <span className="text-green-600 cursor-pointer border-b-2 border-green-600 pb-1">
              All ({notifications.length})
            </span>
            <span className="text-zinc-400 cursor-pointer hover:text-green-600 transition">
              Unread ({unreadCount})
            </span>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {notifications.map((item) => (
              <div
                key={item.id}
                className={`flex items-start gap-3 p-3 rounded-xl border transition ${
                  item.read
                    ? 'bg-zinc-50 dark:bg-zinc-800 border-transparent'
                    : 'border-red-100 bg-red-50 dark:bg-zinc-800/40'
                }`}
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-zinc-800 dark:text-zinc-100">
                    {item.title}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
