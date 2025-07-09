
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.about': 'Về tôi',
    'nav.skills': 'Kỹ năng',
    'nav.projects': 'Dự án',
    'nav.contact': 'Liên hệ',
    
    // Hero
    'hero.greeting': 'Xin chào, tôi là',
    'hero.name': '[Tên của bạn]',
    'hero.title': 'Kỹ sư Trí tuệ Tương lai',
    'hero.description': 'Từ IoT đến AI, rồi đến Generative AI.\nTạo ra tương lai công nghệ và khám phá tiềm năng trí tuệ nhân tạo.',
    
    // About
    'about.title': 'Về tôi',
    'about.intro': 'Với nền tảng công nghệ thông tin, tôi hoạt động như cầu nối giữa tiếng Nhật và công nghệ. Bắt đầu từ phát triển thiết bị IoT, trải qua hành trình khám phá công nghệ AI, hiện tại tôi đang tiên phong trong lĩnh vực',
    'about.genai': 'Generative AI',
    'about.ending': 'mở ra những khả năng mới.',
    'about.journey': 'Hành trình tiến hóa công nghệ',
    'about.iot': 'Internet of Things',
    'about.iot.desc': 'Thiết bị thông minh • Công nghệ cảm biến',
    'about.ai': 'Artificial Intelligence',
    'about.ai.desc': 'Học máy • Học sâu',
    'about.genai.desc': 'AI sáng tạo • LLM • Tạo hình ảnh',
    'about.mission': 'Sứ mệnh của tôi là kết hợp văn hóa Nhật Bản với công nghệ tiên tiến, cung cấp các giải pháp hướng tới tương lai. Luôn học hỏi không ngừng và tiếp cận các thách thức bằng cách sáng tạo.',
    'about.tag1': 'Tư duy sáng tạo',
    'about.tag2': 'Khám phá công nghệ',
    'about.tag3': 'Đa ngôn ngữ',
    'about.tag4': 'Hướng tương lai',
    'about.visual': '未来',
    
    // Skills
    'skills.title': 'Kỹ năng Công nghệ',
    'skills.subtitle': 'Năng lực công nghệ và ngôn ngữ được tích lũy trong lĩnh vực IoT, AI, GenAI',
    'skills.programming': 'Lập trình • Công nghệ',
    'skills.aitools': 'Công cụ AI • GenAI',
    'skills.languages': 'Khả năng Ngôn ngữ',
    'skills.japanese': 'Tiếng Nhật',
    'skills.english': 'Tiếng Anh',
    'skills.vietnamese': 'Tiếng Việt',
    'skills.native': 'Bản ngữ',
    'skills.fluent': 'Thành thạo',
    
    // Projects
    'projects.title': 'Dự án',
    'projects.subtitle': 'Thí nghiệm công nghệ và phát triển sản phẩm trong lĩnh vực IoT, AI, GenAI',
    'projects.genai.chatbot.title': 'Chatbot GenAI',
    'projects.genai.chatbot.desc': 'Chatbot AI sinh tạo đa ngôn ngữ. Sử dụng OpenAI API và LangChain, thực hiện đối thoại tự nhiên bằng tiếng Nhật và tiếng Việt.',
    'projects.iot.sensor.title': 'Cảm biến IoT Thông minh',
    'projects.iot.sensor.desc': 'Hệ thống giám sát môi trường tích hợp Arduino. Đo nhiệt độ, độ ẩm, chất lượng không khí theo thời gian thực và gửi dữ liệu lên cloud.',
    'projects.genai.image.title': 'Công cụ Tạo ảnh AI',
    'projects.genai.image.desc': 'Ứng dụng tạo ảnh lấy cảm hứng từ văn hóa Nhật Bản sử dụng Stable Diffusion. Có tính năng dịch prompt tự động Nhật-Anh.',
    'projects.ai.platform.title': 'Nền tảng Phân tích Học máy',
    'projects.ai.platform.desc': 'Nền tảng phân tích dữ liệu sử dụng TensorFlow và PyTorch. Quản lý tập trung từ xây dựng mô hình dự đoán đến trực quan hóa.',
    'projects.iot.home.title': 'Hệ thống Điều khiển Nhà thông minh',
    'projects.iot.home.desc': 'Tự động hóa gia đình dựa trên Raspberry Pi. Tối ưu hóa mô hình sinh hoạt với nhận dạng giọng nói và tính năng học AI.',
    'projects.genai.llm.title': 'Thí nghiệm Fine-tuning LLM',
    'projects.genai.llm.desc': 'Thí nghiệm fine-tuning LLM chuyên biệt tiếng Nhật. Phát triển mô hình chuyên biệt về tóm tắt và dịch thuật tài liệu kỹ thuật.',
    
    // Contact
    'contact.title': 'Liên hệ',
    'contact.subtitle': 'Hãy cùng tạo ra tương lai',
    'contact.quote': '「未来を共に創る」',
    'contact.quote.en': 'Cùng nhau tạo ra tương lai',
    'contact.name.placeholder': 'Tên của bạn',
    'contact.email.placeholder': 'Email của bạn',
    'contact.message.placeholder': 'Tin nhắn của bạn',
    'contact.send': 'Gửi tin nhắn',
    
    // Footer
    'footer.tagline': 'Tạo ra tương lai bằng công nghệ',
    'footer.tagline.en': 'Crafting the future with technology',
    'footer.copyright': '© 2024 Portfolio. Được tạo với',
    'footer.copyright.ai': 'và AI',
    'footer.together': '未来を共に創る • Cùng xây dựng tương lai',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.name': '[Your Name]',
    'hero.title': 'Future Intelligence Engineer',
    'hero.description': 'From IoT to AI, and now to Generative AI.\nCrafting the future of technology and exploring the potential of artificial intelligence.',
    
    // About
    'about.title': 'About Me',
    'about.intro': 'With an Information Technology background, I work as a bridge between Japanese language and technology. Starting from IoT device development, through AI technology exploration, I am now pioneering in',
    'about.genai': 'Generative AI',
    'about.ending': 'opening new possibilities.',
    'about.journey': 'Technology Evolution Journey',
    'about.iot': 'Internet of Things',
    'about.iot.desc': 'Smart Devices • Sensor Technology',
    'about.ai': 'Artificial Intelligence',
    'about.ai.desc': 'Machine Learning • Deep Learning',
    'about.genai.desc': 'Creative AI • LLM • Image Generation',
    'about.mission': 'My mission is to combine Japanese culture with cutting-edge technology, providing future-oriented solutions. Always learning continuously and approaching challenges with innovative methods.',
    'about.tag1': 'Innovative Thinking',
    'about.tag2': 'Tech Exploration',
    'about.tag3': 'Multilingual',
    'about.tag4': 'Future-Oriented',
    'about.visual': 'Future',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technical capabilities and language skills cultivated in IoT, AI, GenAI fields',
    'skills.programming': 'Programming • Technology',
    'skills.aitools': 'AI • GenAI Tools',
    'skills.languages': 'Language Abilities',
    'skills.japanese': 'Japanese',
    'skills.english': 'English',
    'skills.vietnamese': 'Vietnamese',
    'skills.native': 'Native',
    'skills.fluent': 'Fluent',
    
    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'Technology experiments and product development across IoT, AI, GenAI',
    'projects.genai.chatbot.title': 'GenAI Chatbot',
    'projects.genai.chatbot.desc': 'Multilingual generative AI chatbot. Using OpenAI API and LangChain, enables natural conversation in Japanese and Vietnamese.',
    'projects.iot.sensor.title': 'Smart IoT Sensor',
    'projects.iot.sensor.desc': 'Arduino-based environmental monitoring system. Real-time measurement of temperature, humidity, air quality with cloud data transmission.',
    'projects.genai.image.title': 'AI Image Generation Tool',
    'projects.genai.image.desc': 'Japanese culture-inspired image generation app using Stable Diffusion. Features automatic Japanese-English prompt translation.',
    'projects.ai.platform.title': 'Machine Learning Analysis Platform',
    'projects.ai.platform.desc': 'Data analysis platform using TensorFlow and PyTorch. Centralized management from predictive model building to visualization.',
    'projects.iot.home.title': 'Smart Home Control System',
    'projects.iot.home.desc': 'Raspberry Pi-based home automation. Optimizes living patterns with voice recognition and AI learning capabilities.',
    'projects.genai.llm.title': 'LLM Fine-tuning Experiment',
    'projects.genai.llm.desc': 'Japanese-specialized LLM fine-tuning experiment. Developed specialized model for technical document summarization and translation.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': "Let's create the future together",
    'contact.quote': '「未来を共に創る」',
    'contact.quote.en': "Let's build the future together",
    'contact.name.placeholder': 'Your Name',
    'contact.email.placeholder': 'Your Email',
    'contact.message.placeholder': 'Your Message',
    'contact.send': 'Send Message',
    
    // Footer
    'footer.tagline': 'Crafting the future with technology',
    'footer.tagline.en': 'Tạo ra tương lai bằng công nghệ',
    'footer.copyright': '© 2024 Portfolio. Made with',
    'footer.copyright.ai': 'and AI',
    'footer.together': '未来を共に創る • Let\'s build the future together',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['vi']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
