
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Brain, Video, BookOpen, ArrowUpRight, Layers, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const SureStepsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 px-2 md:px-0"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
                Featured <span className="text-mint-400">Case Study</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl">
                SureSteps - Accelerating enterprise onboarding through intelligent AI-driven documentation.
              </p>
            </div>
            
            <a href="https://suresteps.io/" target="_blank" className="group hidden md:block">
              <Button variant="link" className="text-mint-400 text-lg group-hover:text-mint-300 p-0 h-auto">
                Visit Project <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card rounded-2xl md:rounded-[3rem] overflow-hidden border border-white/5">
              <div className="grid lg:grid-cols-2">
                <div className="p-5 md:p-16 border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-mint-500/10 flex items-center justify-center border border-mint-500/20">
                      <Brain className="w-6 h-6 md:w-8 md:h-8 text-mint-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">SureSteps</h3>
                      <p className="text-mint-400 font-medium tracking-wide uppercase text-xs md:text-sm">Strategic Lead & Partner</p>
                    </div>
                  </div>
                  
                  <div className="space-y-8 md:space-y-10">
                    <div>
                      <h4 className="text-white font-bold text-lg md:text-xl mb-3 md:mb-4">The Challenge</h4>
                      <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
                        Enterprise onboarding is often crippled by outdated, manual documentation. 
                        We needed a way to capture institutional knowledge from business data and video calls in real-time.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-bold text-lg md:text-xl mb-3 md:mb-4">The Solution</h4>
                      <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
                        I architected an AI-first platform that automatically generates step-by-step guides by 
                        analyzing video interactions and technical documentation, reducing manual effort by over 80%.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-950/40 p-6 md:p-16 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-bold text-lg md:text-xl mb-6 md:mb-8">Technical Innovation</h4>
                    <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-4 md:space-y-6">
                        <div className="flex items-start gap-3 md:gap-4">
                          <Zap className="w-5 h-5 text-mint-400 mt-1" />
                          <div>
                            <p className="text-white font-medium mb-1 text-sm md:text-base">Real-time Analysis</p>
                            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">Video call integration and context-aware analysis.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 md:gap-4">
                          <Layers className="w-5 h-5 text-mint-400 mt-1" />
                          <div>
                            <p className="text-white font-medium mb-1 text-sm md:text-base">Automated Knowledge</p>
                            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">Continuous sync with business data sources.</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 md:space-y-6">
                        <div className="flex items-start gap-3 md:gap-4">
                          <Cpu className="w-5 h-5 text-mint-400 mt-1" />
                          <div>
                            <p className="text-white font-medium mb-1 text-sm md:text-base">Adaptive Learning</p>
                            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">Personalized paths based on user progress.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 md:gap-4">
                          <Video className="w-5 h-5 text-mint-400 mt-1" />
                          <div>
                            <p className="text-white font-medium mb-1 text-sm md:text-base">Interactive Delivery</p>
                            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">Dynamic guides with real-time feedback loops.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 md:mt-12">
                    <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4 md:mb-6">Execution Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {['NextJS', 'NestJS', 'TypeScript', 'AWS', 'OpenAI', 'Vector DBs'].map((tech) => (
                        <span key={tech} className="px-3 md:px-4 py-1.5 md:py-2 bg-white/5 text-slate-300 rounded-lg md:rounded-xl text-xs md:text-sm border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-8 md:hidden text-center">
            <a href="https://suresteps.io/" target="_blank">
              <Button className="w-full bg-mint-500 text-slate-950 font-bold py-6 rounded-2xl">
                Visit SureSteps.io
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SureStepsSection;
