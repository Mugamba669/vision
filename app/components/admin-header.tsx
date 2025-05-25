"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useNotifications } from '../context/NoticationContext';
// import { useNotifications } from '@/context/NotificationContext';

const AdminHeader = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const { notifications, markAsRead, clearNotifications, unreadCount } = useNotifications();

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
      router.push('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleNotificationClick = (id: number) => {
    markAsRead(id);
    // You could also navigate to a specific page based on notification type
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/admin/dashboard" className="flex-shrink-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <span className="font-bold text-xl">SecureVision</span>
            </Link>
            <nav className="hidden md:ml-6 md:flex md:space-x-4">
              <Link href="/admin/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Dashboard</Link>
              <Link href="/admin/cameras" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Cameras</Link>
              <Link href="/admin/incidents" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Incidents</Link>
              <Link href="/admin/analytics" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Analytics</Link>
              <Link href="/admin/hotspots" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Hotspots</Link>
              <Link href="/admin/criminals" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Criminals</Link>
              <Link href="/admin/settings" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Settings</Link>
            </nav>
          </div>
          <div className="flex items-center">
            {/* Notifications */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-1 rounded-full text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                
                {/* Notification badge */}
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-xs text-white text-center">
                    {unreadCount}
                  </span>
                )}
              </button>
              
              {/* Notification dropdown */}
              {isNotificationsOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
                      {notifications.length > 0 && (
                        <button 
                          onClick={clearNotifications}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          Clear all
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="max-h-60 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="px-4 py-3 text-sm text-gray-500">
                        No new notifications
                      </div>
                    ) : (
                      notifications.map(notification => (
                        <div 
                          key={notification.id}
                          onClick={() => handleNotificationClick(notification.id)}
                          className={`px-4 py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                        >
                          <div className="flex items-start">
                            <div className={`flex-shrink-0 h-3 w-3 rounded-full mt-1 ${
                              notification.type === 'critical' ? 'bg-red-500' : 
                              notification.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                            }`}></div>
                            <div className="ml-2 w-full">
                              <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                              <p className="text-sm text-gray-500">{notification.message}</p>
                              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Profile dropdown */}
            <div className="ml-4 relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open user menu</span>
                <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-white">
                  A
                </div>
              </button>
              
              {isMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <Link href="/admin/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </Link>
                  <Link href="/admin/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/admin/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
            Dashboard
          </Link>
          <Link href="/admin/cameras" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
            Cameras
          </Link>
          <Link href="/admin/incidents" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
            Incidents
          </Link>
          <Link href="/admin/analytics" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
            Analytics
          </Link>
          <Link href="/admin/hotspots" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
            Hotspots
          </Link>
          <Link href="/admin/criminals" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
            Criminals
          </Link>
          <Link href="/admin/settings" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
            Settings
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
