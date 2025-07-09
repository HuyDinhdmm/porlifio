// Đổi tên file từ .js sang .jsx, giữ nguyên nội dung gốc.
import React from "react";

const NeuralNetworkAnimated = (props) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 500 220"
      className="drop-shadow-lg"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, ...props.style }}
    >
      <defs>
        {/* Gradients for neurons */}
        <radialGradient id="inputGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6ee7b7" stopOpacity="1" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="hidden1Gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="hidden2Gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f472b6" stopOpacity="1" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="hidden3Gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="1" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="outputGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
        </radialGradient>
        {/* Glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        {/* Pulse animation for connections */}
        <filter id="pulse">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="1" />
        </linearGradient>
      </defs>
      {/* Animated connections with data flow */}
      <g className="opacity-60">
        {/* Input to Hidden 1 connections */}
        {[30, 80, 130, 180].map((y2, i2) => 
          [40, 110, 180].map((y1, i1) => (
            <g key={`i1-${i1}-i2-${i2}`}>
              <line 
                x1="62" y1={y1} x2="138" y2={y2} 
                stroke="url(#connectionGradient)" 
                strokeWidth="3"
                className="animate-pulse"
                style={{ animationDelay: `${(i1 + i2) * 0.2}s` }}
              />
              {/* Data flow particles */}
              <circle r="2" fill="#3b82f6" className="opacity-80">
                <animateMotion dur="2s" repeatCount="indefinite" begin={`${(i1 + i2) * 0.3}s`}>
                  <mpath href={`#path-i1-${i1}-i2-${i2}`} />
                </animateMotion>
              </circle>
              <path id={`path-i1-${i1}-i2-${i2}`} d={`M 62 ${y1} L 138 ${y2}`} fill="none" className="invisible" />
            </g>
          ))
        )}
        {/* Hidden 1 to Hidden 2 connections */}
        {[50, 110, 170].map((y2, i2) => 
          [30, 80, 130, 180].map((y1, i1) => (
            <g key={`h1-${i1}-h2-${i2}`}>
              <line 
                x1="162" y1={y1} x2="258" y2={y2} 
                stroke="url(#connectionGradient)" 
                strokeWidth="3"
                className="animate-pulse"
                style={{ animationDelay: `${0.5 + (i1 + i2) * 0.15}s` }}
              />
              <circle r="2" fill="#8b5cf6" className="opacity-80">
                <animateMotion dur="2s" repeatCount="indefinite" begin={`${0.5 + (i1 + i2) * 0.2}s`}>
                  <mpath href={`#path-h1-${i1}-h2-${i2}`} />
                </animateMotion>
              </circle>
              <path id={`path-h1-${i1}-h2-${i2}`} d={`M 162 ${y1} L 258 ${y2}`} fill="none" className="invisible" />
            </g>
          ))
        )}
        {/* Hidden 2 to Hidden 3 connections */}
        {[40, 110, 180].map((y2, i2) => 
          [50, 110, 170].map((y1, i1) => (
            <g key={`h2-${i1}-h3-${i2}`}>
              <line 
                x1="282" y1={y1} x2="358" y2={y2} 
                stroke="url(#connectionGradient)" 
                strokeWidth="3"
                className="animate-pulse"
                style={{ animationDelay: `${1 + (i1 + i2) * 0.1}s` }}
              />
              <circle r="2" fill="#f59e0b" className="opacity-80">
                <animateMotion dur="2s" repeatCount="indefinite" begin={`${1 + (i1 + i2) * 0.15}s`}>
                  <mpath href={`#path-h2-${i1}-h3-${i2}`} />
                </animateMotion>
              </circle>
              <path id={`path-h2-${i1}-h3-${i2}`} d={`M 282 ${y1} L 358 ${y2}`} fill="none" className="invisible" />
            </g>
          ))
        )}
        {/* Hidden 3 to Output connections */}
        {[40, 110, 180].map((y1, i1) => (
          <g key={`h3-${i1}-out`}>
            <line 
              x1="382" y1={y1} x2="458" y2={110} 
              stroke="url(#connectionGradient)" 
              strokeWidth="3"
              className="animate-pulse"
              style={{ animationDelay: `${1.5 + i1 * 0.1}s` }}
            />
            <circle r="2" fill="#ec4899" className="opacity-80">
              <animateMotion dur="2s" repeatCount="indefinite" begin={`${1.5 + i1 * 0.2}s`}>
                <mpath href={`#path-h3-${i1}-out`} />
              </animateMotion>
            </circle>
            <path id={`path-h3-${i1}-out`} d={`M 382 ${y1} L 458 110`} fill="none" className="invisible" />
          </g>
        ))}
      </g>
      {/* Animated neurons */}
      {/* Input layer */}
      <circle cx="50" cy="40" r="12" fill="url(#inputGradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '0s' }} />
      <circle cx="50" cy="110" r="12" fill="url(#inputGradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="50" cy="180" r="12" fill="url(#inputGradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      {/* Hidden layer 1 */}
      <circle cx="150" cy="30" r="12" fill="url(#hidden1Gradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      <circle cx="150" cy="80" r="12" fill="url(#hidden1Gradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <circle cx="150" cy="130" r="12" fill="url(#hidden1Gradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
      <circle cx="150" cy="180" r="12" fill="url(#hidden1Gradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '1.1s' }} />
      {/* Hidden layer 2 */}
      <circle cx="270" cy="50" r="12" fill="url(#hidden2Gradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
      <circle cx="270" cy="110" r="12" fill="url(#hidden2Gradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
      <circle cx="270" cy="170" r="12" fill="url(#hidden2Gradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '1.0s' }} />
      {/* Hidden layer 3 */}
      <circle cx="370" cy="40" r="12" fill="url(#hidden3Gradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      <circle cx="370" cy="110" r="12" fill="url(#hidden3Gradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
      <circle cx="370" cy="180" r="12" fill="url(#hidden3Gradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
      {/* Output layer */}
      <circle cx="470" cy="110" r="12" fill="url(#outputGradient)" filter="url(#glow)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
    </svg>
  );
};

export default NeuralNetworkAnimated; 