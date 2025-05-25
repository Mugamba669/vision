"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  type: 'info' | 'warning' | 'critical';
  read?: boolean;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'time'>) => void;
  markAsRead: (id: number) => void;
  clearNotifications: () => void;
  unreadCount: number;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // Load notifications from localStorage on mount
  useEffect(() => {
    const savedNotifications = localStorage.getItem('secureVisionNotifications');
    if (savedNotifications) {
      try {
        const parsed = JSON.parse(savedNotifications);
        setNotifications(parsed);
        setUnreadCount(parsed.filter((n: Notification) => !n.read).length);
      } catch (error) {
        console.error('Error parsing saved notifications:', error);
      }
    }
  }, []);

  // Save notifications to localStorage when updated
  useEffect(() => {
    localStorage.setItem('secureVisionNotifications', JSON.stringify(notifications));
    setUnreadCount(notifications.filter(n => !n.read).length);
  }, [notifications]);

  // Add a new notification
  const addNotification = (notification: Omit<Notification, 'id' | 'time'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now(),
      time: new Date().toLocaleTimeString(),
      read: false
    };
    
    console.log('Adding notification:', newNotification);
    
    // Play sound for critical notifications
    if (notification.type === 'critical') {
      try {
        const audio = new Audio('/notification-sound.mp3');
        audio.volume = 0.5; // Set volume to 50%
        audio.play().catch(err => console.error('Error playing notification sound:', err));
        console.log('Playing notification sound');
      } catch (err) {
        console.error('Error creating Audio object:', err);
      }
    }
    
    setNotifications(prev => [newNotification, ...prev].slice(0, 50)); // Keep only the latest 50 notifications
  };

  // Mark a notification as read
  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Clear all notifications
  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider value={{ 
      notifications, 
      addNotification, 
      markAsRead, 
      clearNotifications,
      unreadCount
    }}>
      {children}
    </NotificationContext.Provider>
  );
};