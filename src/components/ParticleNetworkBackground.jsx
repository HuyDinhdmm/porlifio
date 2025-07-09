import React from "react";

const nodes = [
  { x: 10, y: 30 }, { x: 80, y: 60 }, { x: 160, y: 40 }, { x: 250, y: 80 },
  { x: 320, y: 30 }, { x: 400, y: 70 }, { x: 480, y: 40 }, { x: 550, y: 90 },
  { x: 100, y: 150 }, { x: 200, y: 120 }, { x: 300, y: 160 }, { x: 420, y: 130 },
  { x: 520, y: 180 }, { x: 600, y: 120 }, { x: 700, y: 170 }
];

const connections = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],
  [1,8],[2,9],[3,10],[4,11],[5,12],[6,13],[7,14],
  [8,9],[9,10],[10,11],[11,12],[12,13],[13,14]
];

const ParticleNetworkBackground = () => (
  <svg width="100%" height="100%" viewBox="0 0 720 220" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
    {/* Đường kết nối */}
    {connections.map(([a, b], i) => (
      <line
        key={i}
        x1={nodes[a].x}
        y1={nodes[a].y}
        x2={nodes[b].x}
        y2={nodes[b].y}
        stroke="url(#lineGradient)"
        strokeWidth="2"
        opacity="0.5"
      />
    ))}
    {/* Hạt */}
    {nodes.map((node, i) => (
      <circle
        key={i}
        cx={node.x}
        cy={node.y}
        r="7"
        fill="url(#dotGradient)"
        opacity="0.8"
      />
    ))}
    <defs>
      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#a78bfa" />
      </linearGradient>
      <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#a5b4fc" stopOpacity="1" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.7" />
      </radialGradient>
    </defs>
  </svg>
);

export default ParticleNetworkBackground; 