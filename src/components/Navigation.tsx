
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Menu, X, Home, Briefcase, Code, Cpu, Mail } from 'lucide-react';
import { downloadFile } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero', icon: Home },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Projects', id: 'projects', icon: Code },
    { name: 'Skills', id: 'skills', icon: Cpu },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-4 md:top-8 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto flex items-center justify-between md:justify-center gap-4 md:gap-8 px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-500 w-full md:w-auto ${
          isScrolled 
            ? 'glass-nav shadow-2xl scale-95' 
            : 'bg-white/5 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Desktop Branding */}
        <button 
          onClick={() => scrollToSection('hero')}
          className="hidden md:block font-playfair font-bold text-white text-lg mr-4 border-r border-white/10 pr-8 hover:text-mint-400 hover:glow-mint transition-all duration-300"
        >
          Christopher Pettyjohn
        </button>

        {/* Mobile Branding (Always visible now) */}
        <button 
          onClick={() => scrollToSection('hero')}
          className="md:hidden font-playfair font-bold text-white text-sm whitespace-nowrap hover:text-mint-400 hover:glow-mint transition-all duration-300"
        >
          Christopher Pettyjohn
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-bold text-slate-300 hover:text-mint-400 hover:glow-mint transition-all duration-300 uppercase tracking-widest"
            >
              {item.name}
            </button>
          ))}
          
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-mint-500 hover:bg-mint-400 text-slate-950 rounded-full font-bold px-6 shadow-lg shadow-mint-500/20 transition-all duration-300"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Icons Header */}
        <div className="md:hidden flex items-center gap-4">
          <div className="w-px h-4 bg-white/10"></div>
          <div className="flex items-center gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-400 hover:text-mint-400 p-1"
                  aria-label={item.name}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
