import React from "react";

export default function NeuralNetworkSVG() {
  return (
    <svg width="400" height="200" viewBox="0 0 400 200">
      {/* Input layer */}
      <circle cx="50" cy="50" r="15" fill="#6ee7b7" />
      <circle cx="50" cy="100" r="15" fill="#6ee7b7" />
      <circle cx="50" cy="150" r="15" fill="#6ee7b7" />
      {/* Hidden layer */}
      <circle cx="200" cy="50" r="15" fill="#fbbf24" />
      <circle cx="200" cy="100" r="15" fill="#fbbf24" />
      <circle cx="200" cy="150" r="15" fill="#fbbf24" />
      {/* Output layer */}
      <circle cx="350" cy="100" r="15" fill="#60a5fa" />
      {/* Connections: Input to Hidden */}
      <line x1="65" y1="50" x2="185" y2="50" stroke="#888" />
      <line x1="65" y1="50" x2="185" y2="100" stroke="#888" />
      <line x1="65" y1="50" x2="185" y2="150" stroke="#888" />
      <line x1="65" y1="100" x2="185" y2="50" stroke="#888" />
      <line x1="65" y1="100" x2="185" y2="100" stroke="#888" />
      <line x1="65" y1="100" x2="185" y2="150" stroke="#888" />
      <line x1="65" y1="150" x2="185" y2="50" stroke="#888" />
      <line x1="65" y1="150" x2="185" y2="100" stroke="#888" />
      <line x1="65" y1="150" x2="185" y2="150" stroke="#888" />
      {/* Connections: Hidden to Output */}
      <line x1="215" y1="50" x2="335" y2="100" stroke="#888" />
      <line x1="215" y1="100" x2="335" y2="100" stroke="#888" />
      <line x1="215" y1="150" x2="335" y2="100" stroke="#888" />
    </svg>
  );
} 