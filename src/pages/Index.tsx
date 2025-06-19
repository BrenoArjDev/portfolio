import { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const stacks = [
    'React', 'JavaScript', 'TypeScript', 'Next.js', 'Node.js', 'C#',
    'ASP.NET', 'MongoDB', 'AWS', 'Git', 'SQL'
  ];

  const projects = [
    {
      title: 'Sistema de E-commerce',
      description: 'Plataforma completa de e-commerce com React, Node.js e PostgreSQL.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para análise de dados com gráficos em tempo real.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      tech: ['React', 'TypeScript', 'D3.js'],
      github: '#',
      demo: '#'
    },
    {
      title: 'API REST Completa',
      description: 'API robusta com autenticação, validação e documentação completa.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      tech: ['Node.js', 'MongoDB', 'Express'],
      github: '#',
      demo: '#'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Portfólio</div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
              Sobre Mim
            </button>
            <button onClick={() => scrollToSection('stacks')} className="hover:text-primary transition-colors">
              Stacks
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">
              Portfólio
            </button>
            <button onClick={() => scrollToSection('contato')} className="hover:text-primary transition-colors">
              Contato
            </button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-accent"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Desenvolvedor
            <span className="block text-primary">Full Stack</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transformo ideias em soluções digitais elegantes e funcionais
          </p>
          <Button
            onClick={() => scrollToSection('about')}
            size="lg"
            className="text-lg px-8 py-6"
          >
            Conheça meu trabalho
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sou um desenvolvedor full stack apaixonado por criar soluções inovadoras e funcionais. 
                Com mais de 3 anos de experiência, trabalho com tecnologias modernas para entregar 
                produtos de alta qualidade.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Especializo-me em desenvolvimento web, desde a concepção da interface até a 
                implementação de APIs robustas e escaláveis. Sempre busco aprender novas 
                tecnologias e aplicar as melhores práticas de desenvolvimento.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="lg">
                  Download CV
                </Button>
                <Button onClick={() => scrollToSection('contato')} size="lg">
                  Entre em Contato
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
                  alt="Foto de perfil"
                  className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stacks Section */}
      <section id="stacks" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Tecnologias e Ferramentas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {stacks.map((stack, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-lg py-3 px-6 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {stack}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Projetos</h2>
          
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold mb-4">{projects[currentProject].title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {projects[currentProject].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[currentProject].tech.map((tech, index) => (
                        <Badge key={index} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                      <Button size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={prevProject}
            >
              ←
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={nextProject}
            >
              →
            </Button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProject ? 'bg-primary' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentProject(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Vamos Conversar?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato comigo!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">contato@exemplo.com</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="text-center">
                <Linkedin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <p className="text-muted-foreground">linkedin.com/in/exemplo</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="text-center">
                <Github className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <p className="text-muted-foreground">github.com/exemplo</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="text-lg px-8 py-6">
            <Mail className="w-5 h-5 mr-2" />
            Enviar Mensagem
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-accent/30">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Desenvolvedor Full Stack. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
