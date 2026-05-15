
import { Button } from '@/components/ui/button';
import { downloadFile } from '@/lib/utils';
import { Download, Github, Linkedin, Code, Zap, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const downloadResume = () => {
    downloadFile('/files/Christopher-Pettyjohn-Resume.pdf', 'Christopher-Pettyjohn-Resume.pdf');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-mint-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-500/10 rounded-full blur-[150px] animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-mint-500 animate-pulse"></span>
            <span className="text-sm font-medium text-mint-400 tracking-wide uppercase">Available for Consulting</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-[0.9]">
              Expert Engineering
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 via-sky-400 to-indigo-400">Consultant</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-2xl text-slate-300 mb-8 md:text-12 leading-relaxed font-light px-4 md:px-0">
              I partner with high-growth businesses to ship <span className="text-white font-normal">robust, scalable software in weeks</span>, not months. 
              Leveraging <span className="text-white font-normal underline decoration-mint-500/50 underline-offset-4">over 15 years of expertise and hundreds of projects</span>, 
              I deliver high-quality engineering that scales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="w-full sm:w-auto bg-white text-slate-950 hover:bg-mint-400 hover:text-slate-950 px-8 md:px-10 py-6 md:py-7 text-lg md:text-xl rounded-full transition-all duration-300 font-bold group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(100,255,218,0.3)]"
              >
                Let's Build
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex gap-4">
                <a href="https://github.com/chrismpettyjohn" target="_blank" className="p-4 rounded-full glass border-white/10 hover:border-mint-500/50 hover:bg-white/5 transition-all duration-300 group">
                  <Github className="w-7 h-7 text-white group-hover:text-mint-400" />
                </a>
                <a href="https://linkedin.com/in/chrismpettyjohn" target="_blank" className="p-4 rounded-full glass border-white/10 hover:border-mint-500/50 hover:bg-white/5 transition-all duration-300 group">
                  <Linkedin className="w-7 h-7 text-white group-hover:text-mint-400" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
