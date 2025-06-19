import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { pt: "Home", en: "Home" },
  about: { pt: "Sobre Mim", en: "About Me" },
  stacks: { pt: "Stacks", en: "Stacks" },
  portfolio: { pt: "Portfólio", en: "Portfolio" },
  contact: { pt: "Contato", en: "Contact" },

  // Hero Section
  heroTitle: { pt: "Desenvolvedor", en: "Developer" },
  heroSubtitle: { pt: "Full Stack", en: "Full Stack" },
  heroDescription: {
    pt: "Transformo ideias em soluções digitais elegantes e funcionais",
    en: "I transform ideas into elegant and functional digital solutions",
  },
  heroButton: { pt: "Conheça meu trabalho", en: "Check out my work" },

  // About Section
  aboutTitle: { pt: "Sobre Mim", en: "About Me" },
  aboutParagraph1: {
    pt: "Sou um desenvolvedor full stack apaixonado por criar soluções inovadoras e funcionais. Com mais de 5 anos de experiência, trabalho com tecnologias modernas para entregar produtos de alta qualidade.",
    en: "I'm a full stack developer passionate about creating innovative and functional solutions. With over 5 years of experience, I work with modern technologies to deliver high-quality products.",
  },
  aboutParagraph2: {
    pt: "Especializo-me em desenvolvimento web, desde a concepção da interface até a implementação de APIs robustas e escaláveis. Sempre busco aprender novas tecnologias e aplicar as melhores práticas de desenvolvimento.",
    en: "I specialize in web development, from interface conception to implementing robust and scalable APIs. I always seek to learn new technologies and apply best development practices.",
  },
  downloadCV: { pt: "Download CV", en: "Download CV" },
  getInTouch: { pt: "Entre em Contato", en: "Get In Touch" },

  // Stacks Section
  stacksTitle: {
    pt: "Tecnologias e Ferramentas",
    en: "Technologies and Tools",
  },

  // Portfolio Section
  portfolioTitle: { pt: "Projetos", en: "Projects" },
  project1Title: { pt: "Spaces Flex", en: "Spaces Flex" },
  project1Description: {
    pt: "Um produto de design de espaço on-line desenvolvido para centros de distribuição, varejistas, varejistas eletrônicos e fabricantes de nível empresarial.",
    en: "An online space design product designed for distribution centers, retailers, e-retailers, and enterprise-grade manufacturers.",
  },
  project2Title: { pt: "Taggy", en: "Taggy" },
  project2Description: {
    pt: "Serviço de pagamento de pedágios e estacionamentos white label.",
    en: "White label toll and parking payment service.",
  },
  project3Title: { pt: "Mobby Hub", en: "Mobby Hub" },
  project3Description: {
    pt: "Aplicativo com pagamentos/vouchers integrados com a Taggy, Uber, Inter, Nubank e outros grandes clientes.",
    en: "Application with payments/vouchers integrated with Taggy, Uber, Inter, Nubank and other major clients.",
  },
  codeButton: { pt: "Código", en: "Code" },
  demoButton: { pt: "Visitar", en: "Visit" },

  // Contact Section
  contactTitle: { pt: "Vamos Conversar?", en: "Let's Talk?" },
  contactDescription: {
    pt: "Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo!",
    en: "I'm always open to new opportunities and interesting projects. Get in touch with me!",
  },
  email: { pt: "Email", en: "Email" },
  linkedin: { pt: "LinkedIn", en: "LinkedIn" },
  github: { pt: "GitHub", en: "GitHub" },
  sendMessage: { pt: "Enviar Mensagem", en: "Send Message" },

  // Footer
  footerText: {
    pt: "2024 Desenvolvedor Full Stack. Todos os direitos reservados.",
    en: "2024 Full Stack Developer. All rights reserved.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
