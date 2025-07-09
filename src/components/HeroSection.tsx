
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/50 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-200/50 rounded-full filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-200/50 rounded-full filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto rounded-full border-2 border-blue-300 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group hover:scale-105 transition-transform duration-300">
              <div className="text-blue-600 text-4xl font-bold">AI</div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('hero.greeting')}
            </span>
            <br />
            <span className="text-gray-800">
              {t('hero.name')}
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-blue-600 mb-4 font-light">
            {t('hero.title')}
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description').split('\n').map((line, index) => (
              <span key={index}>
                {index === 0 && (
                  <>
                    Từ IoT đến AI, rồi đến <span className="text-blue-600 font-semibold">Generative AI</span>.
                    <br />
                  </>
                )}
                {index === 1 && line}
              </span>
            ))}
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="p-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
              <Github className="w-6 h-6 text-blue-600" />
            </a>
            <a href="#" className="p-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a href="#" className="p-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
              <Mail className="w-6 h-6 text-blue-600" />
            </a>
          </div>
          
          <button 
            onClick={scrollToAbout}
            className="animate-bounce hover:animate-pulse transition-all duration-300"
          >
            <ArrowDown className="w-8 h-8 text-gray-500 hover:text-blue-600 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
