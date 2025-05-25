"use client";

import React from 'react';
import Link from 'next/link';
// import AdminHeader from './components/dashboard/AdminHeader';
// import UnknownFaceToggle from '@/components/dashboard/UnknownFaceToggle';
// import FaceRecognitionStats from '@/components/dashboard/FaceRecognitionStats';
import AdminHeader from './components/admin-header';

export default function AdminDashboard() {
  // Mock data for the dashboard
  const stats = {
    cameras: 24,
    activeIncidents: 7,
    detections: 142,
    alerts: 5
  };
  
  const recentIncidents = [
    { id: 1, title: 'Suspicious behavior detected', location: 'Main Entrance', time: '10 minutes ago', severity: 'high', status: 'investigating' },
    { id: 2, title: 'Unidentified person in restricted area', location: 'Server Room', time: '45 minutes ago', severity: 'critical', status: 'open' },
    { id: 3, title: 'Object left unattended', location: 'Parking Lot B', time: '2 hours ago', severity: 'medium', status: 'investigating' },
    { id: 4, title: 'Recognized face match (80%)', location: 'North Gate', time: '3 hours ago', severity: 'medium', status: 'resolved' },
  ];
  
  const hotspots = [
    { id: 1, name: 'Main Entrance', incidents: 12, riskLevel: 'medium' },
    { id: 2, name: 'Parking Lot B', incidents: 8, riskLevel: 'high' },
    { id: 3, name: 'Server Room', incidents: 5, riskLevel: 'critical' },
    { id: 4, name: 'North Gate', incidents: 4, riskLevel: 'low' },
  ];
  
  const detectionsByType = {
    face: 45,
    object: 67,
    behavior: 30
  };
  
  const detectionTrend = [
    { date: 'Mon', count: 18 },
    { date: 'Tue', count: 22 },
    { date: 'Wed', count: 30 },
    { date: 'Thu', count: 25 },
    { date: 'Fri', count: 32 },
    { date: 'Sat', count: 15 },
    { date: 'Sun', count: 20 },
  ];
  
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center">
              {/* <UnknownFaceToggle /> */}
              <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Export Report
              </button>
            </div>
          </div>
          
          {/* Face Recognition Stats */}
          {/* <FaceRecognitionStats /> */}
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Active Cameras
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          {stats.cameras}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <Link href="/admin/cameras" className="font-medium text-blue-600 hover:text-blue-500">
                    View all cameras
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-red-500 rounded-md p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Active Incidents
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          {stats.activeIncidents}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <Link href="/admin/incidents" className="font-medium text-blue-600 hover:text-blue-500">
                    View all incidents
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Today&apos;s Detections
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          {stats.detections}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <Link href="/admin/analytics" className="font-medium text-blue-600 hover:text-blue-500">
                    View analytics
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Pending Alerts
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          {stats.alerts}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <Link href="/admin/alerts" className="font-medium text-blue-600 hover:text-blue-500">
                    Manage alerts
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Recent Incidents */}
            <div className="bg-white shadow rounded-lg lg:col-span-2">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Recent Incidents
                </h3>
              </div>
              <div className="overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {recentIncidents.map((incident) => (
                    <li key={incident.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`h-2.5 w-2.5 rounded-full mr-2 ${
                            incident.severity === 'critical' ? 'bg-red-600' : 
                            incident.severity === 'high' ? 'bg-orange-500' : 
                            incident.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                          }`}></div>
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {incident.title}
                          </p>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            incident.status === 'open' ? 'bg-yellow-100 text-yellow-800' : 
                            incident.status === 'investigating' ? 'bg-blue-100 text-blue-800' : 
                            'bg-green-100 text-green-800'
                          }`}>
                            {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            {incident.location}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {incident.time}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 px-4 py-4 sm:px-6 border-t border-gray-200">
                  <div className="text-sm">
                    <Link href="/admin/incidents" className="font-medium text-blue-600 hover:text-blue-500">
                      View all incidents
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hotspots */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Hotspot Areas
                </h3>
              </div>
              <div className="overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {hotspots.map((hotspot) => (
                    <li key={hotspot.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          {hotspot.name}
                        </p>
                        <div className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          hotspot.riskLevel === 'critical' ? 'bg-red-100 text-red-800' : 
                          hotspot.riskLevel === 'high' ? 'bg-orange-100 text-orange-800' : 
                          hotspot.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {hotspot.riskLevel.charAt(0).toUpperCase() + hotspot.riskLevel.slice(1)}
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {hotspot.incidents} incidents recorded
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 px-4 py-4 sm:px-6 border-t border-gray-200">
                  <div className="text-sm">
                    <Link href="/admin/hotspots" className="font-medium text-blue-600 hover:text-blue-500">
                      View all hotspots
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Detection Analytics */}
          <div className="mt-8 bg-white shadow rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Detection Analytics
              </h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-base font-medium text-gray-900 mb-2">Detection Types</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500">Face Recognition</div>
                        <div className="text-sm font-medium text-gray-900">{detectionsByType.face}</div>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(detectionsByType.face / (detectionsByType.face + detectionsByType.object + detectionsByType.behavior)) * 100}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500">Object Detection</div>
                        <div className="text-sm font-medium text-gray-900">{detectionsByType.object}</div>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: `${(detectionsByType.object / (detectionsByType.face + detectionsByType.object + detectionsByType.behavior)) * 100}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500">Behavioral Analysis</div>
                        <div className="text-sm font-medium text-gray-900">{detectionsByType.behavior}</div>
                      </div>
                      <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${(detectionsByType.behavior / (detectionsByType.face + detectionsByType.object + detectionsByType.behavior)) * 100}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 sm:col-span-2">
                  <h4 className="text-base font-medium text-gray-900 mb-2">Weekly Detection Trend</h4>
                  <div className="h-48 flex items-end space-x-2">
                    {detectionTrend.map((day) => (
                      <div key={day.date} className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-blue-500 rounded-t" style={{ height: `${(day.count / Math.max(...detectionTrend.map(d => d.count))) * 100}%` }}></div>
                        <div className="text-xs text-gray-500 mt-1">{day.date}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Control Panel */}
          <div className="mt-8 bg-white shadow rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Surveillance Control Panel
              </h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-base font-medium text-gray-900 mb-4">Face Recognition</h4>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Status:</span>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Enable Alerts</span>
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Match Against Database</span>
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Confidence Threshold</label>
                      <input type="range" min="0" max="100" defaultValue="75" className="w-full" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Low</span>
                        <span>High</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-base font-medium text-gray-900 mb-4">Object Detection</h4>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Status:</span>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Detect Weapons</span>
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Detect Abandoned Items</span>
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Confidence Threshold</label>
                      <input type="range" min="0" max="100" defaultValue="80" className="w-full" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Low</span>
                        <span>High</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="text-base font-medium text-gray-900 mb-4">Behavioral Analysis</h4>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Status:</span>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Detect Loitering</span>
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Detect Unusual Movement</span>
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Sensitivity</label>
                      <input type="range" min="0" max="100" defaultValue="70" className="w-full" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Low</span>
                        <span>High</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 mr-2">
                  Reset to Defaults
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Apply Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}