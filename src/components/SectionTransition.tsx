
import { useEffect, useRef, useState } from 'react';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number;
  sectionId?: string;
}

const SectionTransition = ({ 
  children, 
  className = '', 
  animationType = 'fade',
  delay = 0,
  sectionId
}: SectionTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay only on first load
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  // Listen for navigation to re-trigger animation
  useEffect(() => {
    const handleNavigation = () => {
      if (sectionId) {
        const currentSection = window.location.hash.replace('#', '');
        if (currentSection === sectionId) {
          setIsVisible(false);
          // Quick re-animation without delay for navigation
          setTimeout(() => {
            setIsVisible(true);
          }, 50);
        }
      }
    };

    window.addEventListener('hashchange', handleNavigation);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, [sectionId]);

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'slide-up':
          return `${baseClass} opacity-0 translate-y-8`;
        case 'slide-left':
          return `${baseClass} opacity-0 -translate-x-8`;
        case 'slide-right':
          return `${baseClass} opacity-0 translate-x-8`;
        case 'scale':
          return `${baseClass} opacity-0 scale-95`;
        default: // fade
          return `${baseClass} opacity-0`;
      }
    }
    
    return `${baseClass} opacity-100 translate-x-0 translate-y-0 scale-100`;
  };

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionTransition;
