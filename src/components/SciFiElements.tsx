
import React from 'react';

export const NeuralNetwork = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg width="100%" height="100%" className="opacity-10">
        <defs>
          <pattern id="neural-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="0" cy="0" r="1" fill="currentColor" opacity="0.2" />
            <circle cx="60" cy="0" r="1" fill="currentColor" opacity="0.2" />
            <circle cx="0" cy="60" r="1" fill="currentColor" opacity="0.2" />
            <circle cx="60" cy="60" r="1" fill="currentColor" opacity="0.2" />
          </pattern>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-grid)" />
        <rect width="100%" height="100%" fill="url(#neural-gradient)" />
        
        {/* Animated neural connections */}
        <g className="animate-neural">
          <line x1="10%" y1="20%" x2="30%" y2="40%" className="neural-connection" />
          <line x1="30%" y1="40%" x2="60%" y2="30%" className="neural-connection" />
          <line x1="60%" y1="30%" x2="85%" y2="60%" className="neural-connection" />
          <line x1="20%" y1="70%" x2="45%" y2="50%" className="neural-connection" />
          <line x1="45%" y1="50%" x2="75%" y2="80%" className="neural-connection" />
        </g>
        
        {/* Pulsing nodes */}
        <g>
          <circle cx="10%" cy="20%" r="3" fill="#3b82f6" opacity="0.6" className="animate-pulse" />
          <circle cx="30%" cy="40%" r="4" fill="#8b5cf6" opacity="0.7" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="60%" cy="30%" r="3" fill="#06b6d4" opacity="0.6" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="85%" cy="60%" r="2" fill="#3b82f6" opacity="0.5" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
          <circle cx="20%" cy="70%" r="3" fill="#8b5cf6" opacity="0.6" className="animate-pulse" style={{ animationDelay: '2s' }} />
        </g>
      </svg>
    </div>
  );
};

export const AdvancedNeuralNetwork = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg width="100%" height="100%" className="opacity-20">
        <defs>
          <radialGradient id="neuron-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Layer 1 - Input neurons */}
        <g className="animate-neural">
          {[15, 35, 55, 75].map((y, i) => (
            <circle
              key={`input-${i}`}
              cx="8%"
              cy={`${y}%`}
              r="6"
              fill="url(#neuron-gradient)"
              filter="url(#glow)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </g>
        
        {/* Layer 2 - Hidden neurons */}
        <g className="animate-neural">
          {[20, 40, 60, 80].map((y, i) => (
            <circle
              key={`hidden1-${i}`}
              cx="35%"
              cy={`${y}%`}
              r="8"
              fill="url(#neuron-gradient)"
              filter="url(#glow)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3 + 0.5}s` }}
            />
          ))}
        </g>
        
        {/* Layer 3 - Hidden neurons */}
        <g className="animate-neural">
          {[25, 50, 75].map((y, i) => (
            <circle
              key={`hidden2-${i}`}
              cx="65%"
              cy={`${y}%`}
              r="7"
              fill="url(#neuron-gradient)"
              filter="url(#glow)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.4 + 1}s` }}
            />
          ))}
        </g>
        
        {/* Layer 4 - Output neurons */}
        <g className="animate-neural">
          {[35, 65].map((y, i) => (
            <circle
              key={`output-${i}`}
              cx="92%"
              cy={`${y}%`}
              r="9"
              fill="url(#neuron-gradient)"
              filter="url(#glow)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.5 + 1.5}s` }}
            />
          ))}
        </g>
        
        {/* Neural connections */}
        <g>
          {/* Input to Hidden1 connections */}
          {[15, 35, 55, 75].map((inputY, i) =>
            [20, 40, 60, 80].map((hiddenY, j) => (
              <line
                key={`conn-input-hidden1-${i}-${j}`}
                x1="8%"
                y1={`${inputY}%`}
                x2="35%"
                y2={`${hiddenY}%`}
                className="neural-connection"
                style={{ animationDelay: `${(i + j) * 0.1}s` }}
              />
            ))
          )}
          
          {/* Hidden1 to Hidden2 connections */}
          {[20, 40, 60, 80].map((hidden1Y, i) =>
            [25, 50, 75].map((hidden2Y, j) => (
              <line
                key={`conn-hidden1-hidden2-${i}-${j}`}
                x1="35%"
                y1={`${hidden1Y}%`}
                x2="65%"
                y2={`${hidden2Y}%`}
                className="neural-connection"
                style={{ animationDelay: `${(i + j) * 0.15 + 0.5}s` }}
              />
            ))
          )}
          
          {/* Hidden2 to Output connections */}
          {[25, 50, 75].map((hidden2Y, i) =>
            [35, 65].map((outputY, j) => (
              <line
                key={`conn-hidden2-output-${i}-${j}`}
                x1="65%"
                y1={`${hidden2Y}%`}
                x2="92%"
                y2={`${outputY}%`}
                className="neural-connection"
                style={{ animationDelay: `${(i + j) * 0.2 + 1}s` }}
              />
            ))
          )}
        </g>
      </svg>
    </div>
  );
};

export const CircuitBoard = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg width="100%" height="100%" className="opacity-5">
        <defs>
          <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10,10 L90,10 L90,30 L70,30 L70,70 L30,70 L30,90 L10,90 Z" 
                  fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.5" />
            <circle cx="90" cy="30" r="2" fill="currentColor" opacity="0.4" />
            <circle cx="30" cy="70" r="2" fill="currentColor" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

export const HUDElement = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative border border-blue-400/30 bg-gradient-to-br from-blue-50/50 to-purple-50/30 backdrop-blur-sm rounded-lg p-4 ${className}`}>
      <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute top-0 left-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
      <div className="absolute bottom-0 right-4 w-8 h-0.5 bg-gradient-to-l from-purple-400 to-transparent"></div>
      {children}
    </div>
  );
};

export const AnimatedChart = ({ value = 75, label = "AI Performance" }: { value?: number, label?: string }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            opacity="0.1"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="url(#gradient-chart)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${(value / 100) * 175.929} 175.929`}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient-chart" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-blue-600">{value}%</span>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-700">{label}</p>
      </div>
    </div>
  );
};

export const NeuralBrain = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
        <defs>
          <radialGradient id="brain-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </radialGradient>
          <filter id="brain-glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Brain outline */}
        <path
          d="M60,20 C45,20 35,30 35,45 C25,45 20,55 20,65 C20,80 30,90 45,90 L75,90 C90,90 100,80 100,65 C100,55 95,45 85,45 C85,30 75,20 60,20 Z"
          fill="url(#brain-gradient)"
          filter="url(#brain-glow)"
          className="animate-pulse"
        />
        
        {/* Neural pathways */}
        <g className="animate-neural" opacity="0.7">
          <path d="M40,40 Q50,35 60,40 Q70,45 80,40" fill="none" stroke="#3b82f6" strokeWidth="2" className="neural-connection" />
          <path d="M35,55 Q45,50 55,55 Q65,60 75,55" fill="none" stroke="#8b5cf6" strokeWidth="2" className="neural-connection" />
          <path d="M40,70 Q50,65 60,70 Q70,75 80,70" fill="none" stroke="#06b6d4" strokeWidth="2" className="neural-connection" />
        </g>
        
        {/* Neural nodes */}
        <g>
          {[
            { x: 40, y: 40, delay: '0s' },
            { x: 60, y: 40, delay: '0.3s' },
            { x: 80, y: 40, delay: '0.6s' },
            { x: 35, y: 55, delay: '0.9s' },
            { x: 55, y: 55, delay: '1.2s' },
            { x: 75, y: 55, delay: '1.5s' },
            { x: 40, y: 70, delay: '1.8s' },
            { x: 60, y: 70, delay: '2.1s' },
            { x: 80, y: 70, delay: '2.4s' },
          ].map((node, i) => (
            <circle
              key={`brain-node-${i}`}
              cx={node.x}
              cy={node.y}
              r="3"
              fill="#ffffff"
              className="animate-pulse"
              style={{ animationDelay: node.delay }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
