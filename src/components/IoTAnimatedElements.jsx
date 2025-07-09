import React from 'react';
import { Wifi, Cloud, Cpu, Zap, Radio, Smartphone, Camera, Shield, Bluetooth, Satellite, Router, Server } from 'lucide-react';

export const IoTNetwork = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg width="100%" height="100%" className="opacity-20">
        <defs>
          <radialGradient id="iot-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="iot-filter">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow-filter">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <g className="animate-pulse" style={{ animationDuration: '2s' }}>
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#iot-gradient-1)" strokeWidth="3" opacity="0.8" />
          <line x1="30%" y1="40%" x2="60%" y2="30%" stroke="url(#iot-gradient-2)" strokeWidth="3" opacity="0.8" />
          <line x1="60%" y1="30%" x2="85%" y2="60%" stroke="url(#iot-gradient-3)" strokeWidth="3" opacity="0.8" />
          <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="url(#iot-gradient-4)" strokeWidth="3" opacity="0.8" />
          <line x1="50%" y1="80%" x2="80%" y2="20%" stroke="url(#iot-gradient-5)" strokeWidth="3" opacity="0.8" />
          <line x1="15%" y1="50%" x2="70%" y2="70%" stroke="url(#iot-gradient-6)" strokeWidth="2" opacity="0.6" />
        </g>
        <g>
          <circle cx="10%" cy="20%" r="6" fill="url(#iot-glow)" filter="url(#glow-filter)" className="animate-pulse" style={{ animationDuration: '1.5s' }} />
          <circle cx="30%" cy="40%" r="7" fill="url(#iot-glow)" filter="url(#glow-filter)" className="animate-pulse" style={{ animationDelay: '0.3s', animationDuration: '1.8s' }} />
          <circle cx="60%" cy="30%" r="6" fill="url(#iot-glow)" filter="url(#glow-filter)" className="animate-pulse" style={{ animationDelay: '0.6s', animationDuration: '2s' }} />
          <circle cx="85%" cy="60%" r="5" fill="url(#iot-glow)" filter="url(#glow-filter)" className="animate-pulse" style={{ animationDelay: '0.9s', animationDuration: '1.7s' }} />
          <circle cx="20%" cy="70%" r="6" fill="url(#iot-glow)" filter="url(#glow-filter)" className="animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '1.6s' }} />
          <circle cx="50%" cy="80%" r="7" fill="url(#iot-glow)" filter="url(#glow-filter)" className="animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '1.9s' }} />
          <circle cx="70%" cy="70%" r="5" fill="url(#iot-glow)" filter="url(#glow-filter)" className="animate-pulse" style={{ animationDelay: '1.8s', animationDuration: '1.4s' }} />
        </g>
        <g>
          <circle r="3" fill="#06b6d4" opacity="0.9" filter="url(#iot-filter)">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#iot-path-1" />
            </animateMotion>
          </circle>
          <circle r="2" fill="#3b82f6" opacity="0.8" filter="url(#iot-filter)">
            <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.5s">
              <mpath href="#iot-path-2" />
            </animateMotion>
          </circle>
          <circle r="2.5" fill="#06b6d4" opacity="0.7" filter="url(#iot-filter)">
            <animateMotion dur="4s" repeatCount="indefinite" begin="1s">
              <mpath href="#iot-path-3" />
            </animateMotion>
          </circle>
          <circle r="1.5" fill="#8b5cf6" opacity="0.9" filter="url(#iot-filter)">
            <animateMotion dur="3.5s" repeatCount="indefinite" begin="1.5s">
              <mpath href="#iot-path-4" />
            </animateMotion>
          </circle>
        </g>
        <defs>
          <path id="iot-path-1" d="M 10% 20% Q 50% 10% 85% 60%" fill="none" />
          <path id="iot-path-2" d="M 30% 40% Q 70% 20% 20% 70%" fill="none" />
          <path id="iot-path-3" d="M 60% 30% Q 30% 60% 50% 80%" fill="none" />
          <path id="iot-path-4" d="M 70% 70% Q 40% 40% 15% 50%" fill="none" />
          <linearGradient id="iot-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="iot-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="iot-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="iot-gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="iot-gradient-5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="iot-gradient-6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const IoTDeviceIcon = ({ 
  Icon, 
  className = "", 
  delay = "0s",
  color = "text-blue-500" 
}) => {
  return (
    <div className={`relative ${className}`}>
      <div 
        className={`${color} animate-pulse transform transition-all duration-300 hover:scale-110`}
        style={{ animationDelay: delay, animationDuration: '2s' }}
      >
        <Icon className="w-8 h-8 drop-shadow-lg" />
      </div>
      <div className="absolute inset-0 animate-ping opacity-20" style={{ animationDelay: delay, animationDuration: '3s' }}>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <div className="absolute inset-0 animate-pulse opacity-40" style={{ animationDelay: `calc(${delay} + 1s)`, animationDuration: '4s' }}>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
    </div>
  );
};

export const IoTCloudConnection = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center space-x-6 p-4 ${className}`}>
      <div className="relative">
        <IoTDeviceIcon Icon={Smartphone} color="text-green-500" delay="0s" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      </div>
      <div className="flex-1 relative min-w-[120px]">
        <svg width="100%" height="30" className="mx-auto">
          <defs>
            <linearGradient id="connection-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <line x1="0" y1="15" x2="100%" y2="15" stroke="url(#connection-gradient-1)" strokeWidth="3" className="animate-pulse" />
          <circle r="3" fill="#10b981" opacity="0.8">
            <animateMotion dur="1.5s" repeatCount="indefinite">
              <mpath href="#cloud-path-1" />
            </animateMotion>
          </circle>
          <circle r="2" fill="#06b6d4" opacity="0.6">
            <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.3s">
              <mpath href="#cloud-path-1" />
            </animateMotion>
          </circle>
          <path id="cloud-path-1" d="M 0 15 L 100% 15" fill="none" />
        </svg>
      </div>
      <div className="relative">
        <IoTDeviceIcon Icon={Cloud} color="text-blue-500" delay="0.5s" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
      </div>
      <div className="flex-1 relative min-w-[120px]">
        <svg width="100%" height="30" className="mx-auto">
          <defs>
            <linearGradient id="connection-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <line x1="0" y1="15" x2="100%" y2="15" stroke="url(#connection-gradient-2)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle r="3" fill="#3b82f6" opacity="0.8">
            <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s">
              <mpath href="#server-path-1" />
            </animateMotion>
          </circle>
          <circle r="2" fill="#8b5cf6" opacity="0.6">
            <animateMotion dur="1.7s" repeatCount="indefinite" begin="0.8s">
              <mpath href="#server-path-1" />
            </animateMotion>
          </circle>
          <path id="server-path-1" d="M 0 15 L 100% 15" fill="none" />
        </svg>
      </div>
      <div className="relative">
        <IoTDeviceIcon Icon={Server} color="text-purple-500" delay="1s" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export const IoTSensorGrid = ({ className = "" }) => {
  const sensors = [
    { Icon: Camera, color: "text-red-500", delay: "0s", name: "Camera" },
    { Icon: Wifi, color: "text-blue-500", delay: "0.2s", name: "WiFi" },
    { Icon: Shield, color: "text-green-500", delay: "0.4s", name: "Security" },
    { Icon: Zap, color: "text-yellow-500", delay: "0.6s", name: "Power" },
    { Icon: Radio, color: "text-purple-500", delay: "0.8s", name: "Radio" },
    { Icon: Bluetooth, color: "text-cyan-500", delay: "1s", name: "Bluetooth" },
    { Icon: Satellite, color: "text-orange-500", delay: "1.2s", name: "GPS" },
    { Icon: Router, color: "text-indigo-500", delay: "1.4s", name: "Router" },
    { Icon: Cpu, color: "text-pink-500", delay: "1.6s", name: "Processor" },
  ];
  return (
    <div className={`grid grid-cols-3 gap-8 p-6 ${className}`}>
      {sensors.map((sensor, index) => (
        <div key={index} className="flex flex-col items-center space-y-2 group">
          <div className="relative">
            <IoTDeviceIcon 
              Icon={sensor.Icon} 
              color={sensor.color} 
              delay={sensor.delay}
              className="group-hover:scale-125 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
          </div>
          <span className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
            {sensor.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export const IoTDataFlow = ({ className = "" }) => {
  return (
    <div className={`relative p-4 ${className}`}>
      <svg width="350" height="180" viewBox="0 0 350 180" className="mx-auto">
        <defs>
          <linearGradient id="enhanced-data-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
          </linearGradient>
          <filter id="enhanced-glow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path d="M 50 90 Q 150 30 250 90" fill="none" stroke="url(#enhanced-data-gradient)" strokeWidth="4" className="animate-pulse" filter="url(#enhanced-glow)" />
        <path d="M 50 90 Q 150 150 250 90" fill="none" stroke="url(#enhanced-data-gradient)" strokeWidth="4" className="animate-pulse" style={{ animationDelay: '0.5s' }} filter="url(#enhanced-glow)" />
        <path d="M 50 90 Q 100 60 150 90 Q 200 120 250 90" fill="none" stroke="url(#enhanced-data-gradient)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '1s' }} opacity="0.7" />
        <circle r="5" fill="#06b6d4" filter="url(#enhanced-glow)">
          <animateMotion dur="2.5s" repeatCount="indefinite">
            <mpath href="#enhanced-data-path-1" />
          </animateMotion>
        </circle>
        <circle r="4" fill="#3b82f6" filter="url(#enhanced-glow)">
          <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s">
            <mpath href="#enhanced-data-path-2" />
          </animateMotion>
        </circle>
        <circle r="3" fill="#8b5cf6" filter="url(#enhanced-glow)">
          <animateMotion dur="3.5s" repeatCount="indefinite" begin="1s">
            <mpath href="#enhanced-data-path-3" />
          </animateMotion>
        </circle>
        <circle r="4" fill="#f59e0b" filter="url(#enhanced-glow)">
          <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.5s">
            <mpath href="#enhanced-data-path-1" />
          </animateMotion>
        </circle>
        <circle r="3" fill="#10b981" filter="url(#enhanced-glow)">
          <animateMotion dur="3.2s" repeatCount="indefinite" begin="2s">
            <mpath href="#enhanced-data-path-2" />
          </animateMotion>
        </circle>
        <defs>
          <path id="enhanced-data-path-1" d="M 50 90 Q 150 30 250 90" fill="none" />
          <path id="enhanced-data-path-2" d="M 50 90 Q 150 150 250 90" fill="none" />
          <path id="enhanced-data-path-3" d="M 50 90 Q 100 60 150 90 Q 200 120 250 90" fill="none" />
        </defs>
        <g>
          <circle cx="50" cy="90" r="12" fill="#10b981" className="animate-pulse" filter="url(#enhanced-glow)" />
          <circle cx="50" cy="90" r="18" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.6" className="animate-ping" />
          <circle cx="50" cy="90" r="24" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.3" className="animate-ping" style={{ animationDelay: '0.5s' }} />
        </g>
        <g>
          <circle cx="250" cy="90" r="12" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '0.5s' }} filter="url(#enhanced-glow)" />
          <circle cx="250" cy="90" r="18" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6" className="animate-ping" style={{ animationDelay: '0.5s' }} />
          <circle cx="250" cy="90" r="24" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" className="animate-ping" style={{ animationDelay: '1s' }} />
        </g>
      </svg>
    </div>
  );
};

export const IoTHUDPanel = ({ 
  title, 
  value, 
  unit = "", 
  className = "",
  status = "active"
}) => {
  const getStatusColor = () => {
    switch (status) {
      case "warning": return "border-yellow-400/40 bg-gradient-to-br from-yellow-50/60 to-orange-50/40";
      case "offline": return "border-red-400/40 bg-gradient-to-br from-red-50/60 to-gray-50/40";
      default: return "border-cyan-400/40 bg-gradient-to-br from-cyan-50/60 to-blue-50/40";
    }
  };
  const getIndicatorColor = () => {
    switch (status) {
      case "warning": return "bg-yellow-400";
      case "offline": return "bg-red-400";
      default: return "bg-cyan-400";
    }
  };
  return (
    <div className={`relative ${getStatusColor()} backdrop-blur-sm rounded-lg p-4 hover:scale-105 transition-all duration-300 hover:shadow-lg group ${className}`}>
      <div className={`absolute top-2 right-2 w-3 h-3 ${getIndicatorColor()} rounded-full animate-pulse`}></div>
      <div className="absolute top-0 left-4 w-10 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 right-4 w-10 h-0.5 bg-gradient-to-l from-blue-400 to-transparent opacity-60"></div>
      <div className="absolute left-0 top-4 w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent opacity-40"></div>
      <div className="absolute right-0 bottom-4 w-0.5 h-8 bg-gradient-to-t from-blue-400 to-transparent opacity-40"></div>
      <div className="text-center">
        <p className="text-xs text-gray-600 mb-2 font-medium uppercase tracking-wide">{title}</p>
        <p className="text-2xl font-bold text-cyan-600 group-hover:text-cyan-700 transition-colors">
          {value} <span className="text-sm text-gray-500 font-normal">{unit}</span>
        </p>
      </div>
      <div className="mt-3 flex justify-center">
        <div className="relative">
          <IoTDeviceIcon Icon={Zap} color="text-cyan-500" className="scale-75 group-hover:scale-90 transition-transform" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
    </div>
  );
}; 