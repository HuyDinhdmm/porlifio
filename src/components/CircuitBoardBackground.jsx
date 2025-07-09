import React from "react";

const nodes = [
  { x: 40, y: 40 }, { x: 120, y: 80 }, { x: 200, y: 40 }, { x: 300, y: 100 },
  { x: 400, y: 60 }, { x: 500, y: 120 }, { x: 600, y: 40 }, { x: 700, y: 100 },
  { x: 100, y: 180 }, { x: 220, y: 160 }, { x: 340, y: 180 }, { x: 480, y: 160 },
  { x: 600, y: 180 }
];

const connections = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],
  [1,8],[2,9],[3,10],[4,11],[5,12],
  [8,9],[9,10],[10,11],[11,12]
];

const CircuitBoardBackground = () => (
  <svg width="100%" height="100%" viewBox="0 0 720 220" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
    {/* Đường mạch điện */}
    {connections.map(([a, b], i) => (
      <polyline
        key={i}
        points={`${nodes[a].x},${nodes[a].y} ${nodes[a].x},${nodes[b].y} ${nodes[b].x},${nodes[b].y}`}
        fill="none"
        stroke="url(#circuitGradient)"
        strokeWidth="3"
        opacity="0.5"
      />
    ))}
    {/* Node */}
    {nodes.map((node, i) => (
      <circle
        key={i}
        cx={node.x}
        cy={node.y}
        r="8"
        fill="url(#nodeGradient)"
        stroke="#a78bfa"
        strokeWidth="2"
        opacity="0.8"
      />
    ))}
    <defs>
      <linearGradient id="circuitGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="100%" stopColor="#a78bfa" />
      </linearGradient>
      <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#a5b4fc" stopOpacity="1" />
        <stop offset="100%" stopColor="#4ade80" stopOpacity="0.7" />
      </radialGradient>
    </defs>
  </svg>
);

export default CircuitBoardBackground; 