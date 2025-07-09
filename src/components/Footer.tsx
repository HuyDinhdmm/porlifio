
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Future Intelligence
            </h3>
            <p className="text-gray-400 mb-2">
              {t('footer.tagline')}
            </p>
            <p className="text-xs text-gray-500">
              {t('footer.tagline.en')}
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform p-2 rounded-full hover:bg-gray-800/50"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform p-2 rounded-full hover:bg-gray-800/50"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 transform p-2 rounded-full hover:bg-gray-800/50"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 flex items-center justify-center space-x-1 mb-4 md:mb-0">
              <span>{t('footer.copyright')}</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>{t('footer.copyright.ai')}</span>
            </p>
            
            <div className="text-gray-500 text-sm">
              <span className="text-blue-400">{t('footer.together')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
