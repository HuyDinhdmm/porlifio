
import { ExternalLink, Github, ShoppingCart, GraduationCap, Flame, Brain } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { NeuralNetwork, CircuitBoard, HUDElement } from './SciFiElements';
import FireWatchDemo from './FireWatchDemo';
import { IoTNetwork, IoTCloudConnection, IoTSensorGrid, IoTDataFlow, IoTHUDPanel } from "./IoTAnimatedElements.jsx";

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showFireWatchDemo, setShowFireWatchDemo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'KAZE FireWatch System',
      description: 'IoT drone-based forest fire detection system using AI computer vision and real-time monitoring with emergency response integration.',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400',
      technologies: ['Arduino', 'ESP32', 'OpenCV', 'Python', 'Firebase', 'React'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'IoT + AI',
      icon: Flame,
      isDemo: true,
    },
    {
      title: 'FastByte - Smart Food Ordering',
      description: 'E-commerce platform for fast food with AI chatbot assistant, real-time ordering, payment integration, and personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
      technologies: ['React', 'Node.js', 'ChatGPT API', 'Stripe', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'E-commerce + AI',
      icon: ShoppingCart,
    },
    {
      title: 'KotobaSensei - Japanese Learning LLM',
      description: 'Intelligent Japanese learning web app powered by LLM with translation hints, vocabulary generation, and AI-powered progress assessment.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
      technologies: ['React', 'Python', 'Flask', 'OpenAI API', 'SQLite'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'GenAI + Education',
      icon: GraduationCap,
    },
    {
      title: t('projects.genai.chatbot.title'),
      description: t('projects.genai.chatbot.desc'),
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
      technologies: ['Python', 'OpenAI API', 'LangChain', 'Streamlit'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'GenAI',
      icon: Brain,
    },
    {
      title: t('projects.ai.platform.title'),
      description: t('projects.ai.platform.desc'),
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400',
      technologies: ['TensorFlow', 'PyTorch', 'Pandas', 'Plotly'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'AI',
      icon: Brain,
    },
    {
      title: t('projects.genai.llm.title'),
      description: t('projects.genai.llm.desc'),
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
      technologies: ['Hugging Face', 'LoRA', 'PyTorch', 'Transformers'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'GenAI',
      icon: Brain,
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'GenAI': 'from-purple-500 to-pink-500',
      'AI': 'from-green-500 to-blue-500',
      'IoT + AI': 'from-red-500 to-orange-500',
      'E-commerce + AI': 'from-blue-500 to-cyan-500',
      'GenAI + Education': 'from-indigo-500 to-purple-500',
    };
    return colors[category as keyof typeof colors] || 'from-blue-500 to-purple-500';
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* <NeuralNetwork className="text-blue-600" /> */}
      {/* <CircuitBoard className="text-purple-600" /> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('projects.title')}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* FireWatch Demo Section */}
        {showFireWatchDemo && (
          <div className="mb-12">
            <FireWatchDemo />
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Hiệu ứng IoT Network phủ quanh các card */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ opacity: 0.7 }}>
            <IoTNetwork />
          </div>
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className={`relative z-10 group bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-48 object-cover transition-transform duration-500 ${
                      hoveredProject === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(project.category)} text-white shadow-lg`}>
                    {project.category}
                  </div>
                  <div className="absolute top-4 left-4">
                    <IconComponent className="w-8 h-8 text-white opacity-80" />
                  </div>
                  {hoveredProject === index && (
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-blue-600/20"></div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs rounded-full border border-blue-200 hover:bg-blue-100 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 hover:scale-105"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300 hover:scale-105"
                      >
                        <Github size={16} className="mr-1" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    </div>
                    
                    {project.isDemo && (
                      <button
                        onClick={() => setShowFireWatchDemo(!showFireWatchDemo)}
                        className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-300"
                      >
                        {showFireWatchDemo ? 'Hide Demo' : 'Live Demo'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Sci-fi corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Sci-fi HUD Elements */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <HUDElement>
            <div className="text-center">
              <h4 className="font-bold text-blue-600 mb-2">Real-World Applications</h4>
              <p className="text-sm text-gray-600">E-commerce, IoT, Fire Detection Systems</p>
            </div>
          </HUDElement>
          
          <HUDElement>
            <div className="text-center">
              <h4 className="font-bold text-purple-600 mb-2">GenAI Intelligence</h4>
              <p className="text-sm text-gray-600">LLM Integration, Natural Language Processing</p>
            </div>
          </HUDElement>
          
          <HUDElement>
            <div className="text-center">
              <h4 className="font-bold text-green-600 mb-2">Future Innovation</h4>
              <p className="text-sm text-gray-600">「未来を共に創る」Building Tomorrow Together</p>
            </div>
          </HUDElement>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
