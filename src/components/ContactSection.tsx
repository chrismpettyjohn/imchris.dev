import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight px-2 md:px-0"
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-sky-400">Scale?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 md:mb-16 max-w-2xl mx-auto font-light leading-relaxed px-4"
          >
            Looking for an experienced engineer to deliver fast, scalable results? 
            Let's discuss how we can ship your next project within weeks.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card rounded-2xl md:rounded-[3rem] p-5 md:p-12 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-mint-500/5 rounded-full blur-3xl group-hover:bg-mint-500/10 transition-colors"></div>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              className="flex flex-col gap-5 md:gap-6 relative z-10 text-left max-w-2xl mx-auto"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest ml-4">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    placeholder="John Doe" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-mint-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest ml-4">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    placeholder="john@example.com" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-mint-500/50 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest ml-4">How can I help you scale?</label>
                <textarea 
                  name="message" 
                  id="message"
                  placeholder="Tell me about your project goals..." 
                  required 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-mint-500/50 transition-colors resize-none"
                ></textarea>
              </div>
              
              <div className="flex flex-col items-center mt-4 md:mt-6">
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-white text-slate-950 hover:bg-mint-400 px-8 md:px-12 py-6 md:py-8 text-xl md:text-2xl rounded-xl md:rounded-2xl transition-all duration-300 font-bold group shadow-2xl disabled:opacity-50"
                >
                  <Send className={`w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 ${isSubmitting ? 'animate-pulse' : 'group-hover:rotate-12'} transition-transform`} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                
                <div className="mt-8 md:mt-12 flex gap-6 md:gap-8 justify-center items-center">
                  <a href="https://linkedin.com/in/chrismpettyjohn" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
                  </a>
                  <a href="https://github.com/chrismpettyjohn" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                    <Github className="w-6 h-6 md:w-8 md:h-8" />
                  </a>
                </div>
              </div>
            </form>
          </motion.div>
          
          <div className="mt-16 md:mt-20 text-slate-600 text-[10px] md:text-sm tracking-widest uppercase font-bold">
            © 2026 Christopher Pettyjohn. Engineered for Excellence.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;