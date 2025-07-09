
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { NeuralNetwork, HUDElement, AnimatedChart } from './SciFiElements';
import NeuralNetworkAnimated from "./NeuralNetworkAnimated.jsx";

const AboutSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    { name: 'Information Technology', progress: 100, color: 'from-blue-500 to-blue-600' },
    { name: 'IoT Development', progress: 100, color: 'from-green-500 to-green-600' },
    { name: 'AI & Machine Learning', progress: 90, color: 'from-purple-500 to-purple-600' },
    { name: 'Generative AI', progress: 75, color: 'from-pink-500 to-pink-600' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentPhase((prev) => (prev + 1) % phases.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* SVG mạng neuron động làm background phủ toàn bộ section */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-20">
        <NeuralNetworkAnimated style={{ opacity: 1 }} />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.intro')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.passion')}
              </p>
            </div>

            {/* Evolution Timeline */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t('about.journey')}
                </span>
              </h3>
              
              {phases.map((phase, index) => (
                <div
                  key={phase.name}
                  className={`p-4 rounded-lg transition-all duration-500 ${
                    currentPhase === index 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg transform scale-105' 
                      : 'bg-white/50 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-semibold ${currentPhase === index ? 'text-blue-700' : 'text-gray-700'}`}>
                      {phase.name}
                    </span>
                    <span className="text-sm font-medium text-gray-500">{phase.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${phase.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: isVisible ? `${phase.progress}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {['React', 'Python', 'AI/ML', 'IoT', 'GenAI', '日本語'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} animation-delay-2000`}>
            <div className="grid grid-cols-2 gap-6">
              <HUDElement>
                <AnimatedChart value={95} label="Technical Skills" />
              </HUDElement>
              
              <HUDElement>
                <AnimatedChart value={88} label="AI/ML Expertise" />
              </HUDElement>
              
              <HUDElement>
                <AnimatedChart value={90} label="IoT Systems" />
              </HUDElement>
              
              <HUDElement>
                <AnimatedChart value={75} label="GenAI Innovation" />
              </HUDElement>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-gray-800 mb-3 text-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Current Focus
                </span>
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>🤖 Generative AI Integration</p>
                <p>🔥 IoT Fire Detection Systems</p>
                <p>🛒 E-commerce AI Chatbots</p>
                <p>🎓 LLM-powered Education Apps</p>
                <p>🌐 Cross-cultural Tech Solutions</p>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm font-medium text-purple-600">
                  「未来を共に創る」
                </p>
                <p className="text-xs text-gray-500">
                  Creating the future together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
