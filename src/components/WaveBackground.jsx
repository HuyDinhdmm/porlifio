import React from "react";

const WaveBackground = () => (
  <svg width="100%" height="100%" viewBox="0 0 1440 320" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.7" />
      </linearGradient>
    </defs>
    {/* Sóng động */}
    <path>
      <animate attributeName="d" dur="8s" repeatCount="indefinite"
        values="M0,160 Q360,240 720,160 T1440,160 V320 H0 Z;
                M0,180 Q360,120 720,180 T1440,180 V320 H0 Z;
                M0,160 Q360,240 720,160 T1440,160 V320 H0 Z" />
    </path>
    <path d="M0,160 Q360,240 720,160 T1440,160 V320 H0 Z" fill="url(#waveGradient)" opacity="0.8" />
    <path d="M0,200 Q360,280 720,200 T1440,200 V320 H0 Z" fill="url(#waveGradient)" opacity="0.5" />
    <path d="M0,240 Q360,200 720,240 T1440,240 V320 H0 Z" fill="url(#waveGradient)" opacity="0.3" />
  </svg>
);

export default WaveBackground; 