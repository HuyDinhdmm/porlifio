
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SectionTransition from "../components/SectionTransition";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <SectionTransition animationType="fade" sectionId="home">
        <HeroSection />
      </SectionTransition>
      
      <SectionTransition animationType="slide-up" delay={200} sectionId="about">
        <AboutSection />
      </SectionTransition>
      
      <SectionTransition animationType="slide-left" delay={300} sectionId="skills">
        <SkillsSection />
      </SectionTransition>
      
      <SectionTransition animationType="slide-right" delay={200} sectionId="projects">
        <ProjectsSection />
      </SectionTransition>
      
      <SectionTransition animationType="fade" delay={400} sectionId="contact">
        <ContactSection />
      </SectionTransition>
      
      <Footer />
    </div>
  );
};

export default Index;
