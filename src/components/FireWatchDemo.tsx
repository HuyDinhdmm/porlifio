
import React, { useState, useEffect } from 'react';
import { Plane, Flame, Waves, Brain, AlertTriangle, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { HUDElement, AnimatedChart } from './SciFiElements';

const FireWatchDemo = () => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [fireDetected, setFireDetected] = useState(false);
  const [droneStatus, setDroneStatus] = useState('patrolling');
  const [aiConfidence, setAiConfidence] = useState(0);

  const simulateFireDetection = () => {
    setIsDetecting(true);
    setDroneStatus('scanning');
    
    setTimeout(() => {
      setFireDetected(true);
      setDroneStatus('alert');
      setAiConfidence(94);
      
      // Text-to-speech simulation
      const utterance = new SpeechSynthesisUtterance("火災を検知しました！Fire detected! KAZE AI reporting anomaly.");
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
      
      setTimeout(() => {
        setIsDetecting(false);
        setFireDetected(false);
        setDroneStatus('patrolling');
        setAiConfidence(0);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
          <Plane className={`w-6 h-6 ${droneStatus === 'alert' ? 'text-red-500 animate-bounce' : 'text-blue-600'}`} />
          <span>KAZE FireWatch System</span>
        </h3>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
          droneStatus === 'alert' ? 'bg-red-100 text-red-700' :
          droneStatus === 'scanning' ? 'bg-yellow-100 text-yellow-700' :
          'bg-green-100 text-green-700'
        }`}>
          {droneStatus.toUpperCase()}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <HUDElement>
          <div className="text-center">
            <Waves className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <p className="text-sm font-medium">Signal Strength</p>
            <p className="text-xl font-bold text-blue-600">98.2%</p>
          </div>
        </HUDElement>

        <HUDElement>
          <div className="text-center">
            <Brain className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <p className="text-sm font-medium">AI Model</p>
            <p className="text-lg font-bold text-purple-600">KAZE v2.1</p>
          </div>
        </HUDElement>

        <HUDElement>
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-sm font-medium">Coverage</p>
            <p className="text-xl font-bold text-green-600">15.3km²</p>
          </div>
        </HUDElement>
      </div>

      {fireDetected && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 animate-pulse">
          <div className="flex items-center">
            <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-red-700 font-medium">
              🔥 Fire detected at coordinates: 35.6762°N, 139.6503°E
            </p>
          </div>
          <p className="text-red-600 text-sm mt-1">
            AI Confidence: {aiConfidence}% | Dispatching emergency services...
          </p>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <AnimatedChart value={aiConfidence} label="Detection Confidence" />
          
          <div className="flex items-center space-x-2">
            <Flame className={`w-6 h-6 ${fireDetected ? 'text-red-500 animate-bounce' : 'text-gray-400'}`} />
            <span className="text-sm text-gray-600">
              {fireDetected ? 'FIRE DETECTED!' : 'No anomalies detected'}
            </span>
          </div>
        </div>

        <Button 
          onClick={simulateFireDetection}
          disabled={isDetecting}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          {isDetecting ? 'Scanning...' : 'Simulate Fire Alert'}
        </Button>
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        <p>🧠 Next step: Integrating GenAI for natural language incident reporting</p>
        <p>「未来の森林監視システム」- Future Forest Monitoring System</p>
      </div>
    </div>
  );
};

export default FireWatchDemo;
