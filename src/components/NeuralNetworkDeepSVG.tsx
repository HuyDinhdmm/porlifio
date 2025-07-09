import React from "react";

export default function NeuralNetworkDeepSVG() {
  return (
    <svg width="500" height="220" viewBox="0 0 500 220">
      {/* Input layer */}
      <circle cx="50" cy="40" r="12" fill="#6ee7b7" />
      <circle cx="50" cy="110" r="12" fill="#6ee7b7" />
      <circle cx="50" cy="180" r="12" fill="#6ee7b7" />
      {/* Hidden layer 1 */}
      <circle cx="150" cy="30" r="12" fill="#fbbf24" />
      <circle cx="150" cy="80" r="12" fill="#fbbf24" />
      <circle cx="150" cy="130" r="12" fill="#fbbf24" />
      <circle cx="150" cy="180" r="12" fill="#fbbf24" />
      {/* Hidden layer 2 */}
      <circle cx="270" cy="50" r="12" fill="#f472b6" />
      <circle cx="270" cy="110" r="12" fill="#f472b6" />
      <circle cx="270" cy="170" r="12" fill="#f472b6" />
      {/* Hidden layer 3 */}
      <circle cx="370" cy="40" r="12" fill="#a78bfa" />
      <circle cx="370" cy="110" r="12" fill="#a78bfa" />
      <circle cx="370" cy="180" r="12" fill="#a78bfa" />
      {/* Output layer */}
      <circle cx="470" cy="110" r="12" fill="#60a5fa" />
      {/* Connections: Input to Hidden 1 */}
      {[30, 80, 130, 180].map((y2, i2) => [40, 110, 180].map((y1, i1) => (
        <line key={`i1-${i1}-i2-${i2}`} x1="62" y1={y1} x2="138" y2={y2} stroke="#bbb" />
      )))}
      {/* Hidden 1 to Hidden 2 */}
      {[50, 110, 170].map((y2, i2) => [30, 80, 130, 180].map((y1, i1) => (
        <line key={`h1-${i1}-h2-${i2}`} x1="162" y1={y1} x2="258" y2={y2} stroke="#bbb" />
      )))}
      {/* Hidden 2 to Hidden 3 */}
      {[40, 110, 180].map((y2, i2) => [50, 110, 170].map((y1, i1) => (
        <line key={`h2-${i1}-h3-${i2}`} x1="282" y1={y1} x2="358" y2={y2} stroke="#bbb" />
      )))}
      {/* Hidden 3 to Output */}
      {[40, 110, 180].map((y1, i1) => (
        <line key={`h3-${i1}-out`} x1="382" y1={y1} x2="458" y2={110} stroke="#bbb" />
      ))}
    </svg>
  );
} 