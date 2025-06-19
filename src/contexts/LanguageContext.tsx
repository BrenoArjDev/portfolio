
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { pt: 'Home', en: 'Home' },
  about: { pt: 'Sobre Mim', en: 'About Me' },
  stacks: { pt: 'Stacks', en: 'Stacks' },
  portfolio: { pt: 'Portfólio', en: 'Portfolio' },
  contact: { pt: 'Contato', en: 'Contact' },
  
  // Hero Section
  heroTitle: { pt: 'Desenvolvedor', en: 'Developer' },
  heroSubtitle: { pt: 'Full Stack', en: 'Full Stack' },
  heroDescription: { pt: 'Transformo ideias em soluções digitais elegantes e funcionais', en: 'I transform ideas into elegant and functional digital solutions' },
  heroButton: { pt: 'Conheça meu trabalho', en: 'Check out my work' },
  
  // About Section
  aboutTitle: { pt: 'Sobre Mim', en: 'About Me' },
  aboutParagraph1: { pt: 'Sou um desenvolvedor full stack apaixonado por criar soluções inovadoras e funcionais. Com mais de 3 anos de experiência, trabalho com tecnologias modernas para entregar produtos de alta qualidade.', en: "I'm a full stack developer passionate about creating innovative and functional solutions. With over 3 years of experience, I work with modern technologies to deliver high-quality products." },
  aboutParagraph2: { pt: 'Especializo-me em desenvolvimento web, desde a concepção da interface até a implementação de APIs robustas e escaláveis. Sempre busco aprender novas tecnologias e aplicar as melhores práticas de desenvolvimento.', en: 'I specialize in web development, from interface conception to implementing robust and scalable APIs. I always seek to learn new technologies and apply best development practices.' },
  downloadCV: { pt: 'Download CV', en: 'Download CV' },
  getInTouch: { pt: 'Entre em Contato', en: 'Get In Touch' },
  
  // Stacks Section
  stacksTitle: { pt: 'Tecnologias e Ferramentas', en: 'Technologies and Tools' },
  
  // Portfolio Section
  portfolioTitle: { pt: 'Projetos', en: 'Projects' },
  project1Title: { pt: 'Sistema de E-commerce', en: 'E-commerce System' },
  project1Description: { pt: 'Plataforma completa de e-commerce com React, Node.js e PostgreSQL.', en: 'Complete e-commerce platform with React, Node.js and PostgreSQL.' },
  project2Title: { pt: 'Dashboard Analytics', en: 'Analytics Dashboard' },
  project2Description: { pt: 'Dashboard interativo para análise de dados com gráficos em tempo real.', en: 'Interactive dashboard for data analysis with real-time charts.' },
  project3Title: { pt: 'API REST Completa', en: 'Complete REST API' },
  project3Description: { pt: 'API robusta com autenticação, validação e documentação completa.', en: 'Robust API with authentication, validation and complete documentation.' },
  codeButton: { pt: 'Código', en: 'Code' },
  demoButton: { pt: 'Demo', en: 'Demo' },
  
  // Contact Section
  contactTitle: { pt: 'Vamos Conversar?', en: "Let's Talk?" },
  contactDescription: { pt: 'Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo!', en: "I'm always open to new opportunities and interesting projects. Get in touch with me!" },
  email: { pt: 'Email', en: 'Email' },
  linkedin: { pt: 'LinkedIn', en: 'LinkedIn' },
  github: { pt: 'GitHub', en: 'GitHub' },
  sendMessage: { pt: 'Enviar Mensagem', en: 'Send Message' },
  
  // Footer
  footerText: { pt: '2024 Desenvolvedor Full Stack. Todos os direitos reservados.', en: '2024 Full Stack Developer. All rights reserved.' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
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
