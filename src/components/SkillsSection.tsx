
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';
import CircuitBoardBackground from "./CircuitBoardBackground";

const SkillsSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with delay
          technicalSkills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedBars(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: 'Python', level: 95, color: 'blue', category: 'Programming' },
    { name: 'JavaScript/TypeScript', level: 90, color: 'purple', category: 'Programming' },
    { name: 'TensorFlow/PyTorch', level: 85, color: 'green', category: 'AI/ML' },
    { name: 'OpenAI API', level: 88, color: 'pink', category: 'GenAI' },
    { name: 'Arduino/Raspberry Pi', level: 80, color: 'orange', category: 'IoT' },
    { name: 'React/Next.js', level: 85, color: 'indigo', category: 'Frontend' },
  ];

  const aiTools = [
    'ChatGPT', 'Claude', 'Midjourney', 'Stable Diffusion', 
    'LangChain', 'Hugging Face', 'Google Colab', 'Jupyter'
  ];

  const languages = [
    { name: t('skills.japanese'), level: t('skills.native') },
    { name: t('skills.english'), level: t('skills.fluent') },
    { name: t('skills.vietnamese'), level: t('skills.native') },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      green: 'bg-green-500',
      pink: 'bg-pink-500',
      orange: 'bg-orange-500',
      indigo: 'bg-indigo-500',
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-blue-500';
  };

  const getColorGlow = (color: string) => {
    const colorMap = {
      blue: 'shadow-blue-200',
      purple: 'shadow-purple-200',
      green: 'shadow-green-200',
      pink: 'shadow-pink-200',
      orange: 'shadow-orange-200',
      indigo: 'shadow-indigo-200',
    };
    return colorMap[color as keyof typeof colorMap] || 'shadow-blue-200';
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-green-50 to-purple-50 relative overflow-hidden">
      {/* Hiệu ứng Circuit Board nền */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ opacity: 0.7 }}>
        <CircuitBoardBackground />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('skills.title')}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">{t('skills.programming')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{skill.name}</h4>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{skill.category}</span>
                  </div>
                  <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getColorClasses(skill.color)} transition-all duration-1000 ease-out ${getColorGlow(skill.color)} shadow-md`}
                    style={{ 
                      width: animatedBars.includes(index) ? `${skill.level}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">{t('skills.aitools')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {aiTools.map((tool, index) => (
              <span
                key={tool}
                className={`px-6 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 text-blue-600 font-medium hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">{t('skills.languages')}</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {languages.map((lang, index) => (
              <div
                key={lang.name}
                className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 text-center hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="text-lg font-semibold text-gray-800 mb-2">{lang.name}</div>
                <div className="text-blue-600 font-medium">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
