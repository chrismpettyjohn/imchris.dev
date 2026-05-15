
import { Code, Database, Cloud, Brain, Users, Zap, Terminal, Layers, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    title: 'Frontend Architecture',
    icon: Code,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    description: 'Building immersive, performant user interfaces with modern frameworks.',
    className: 'md:col-span-2 md:row-span-1'
  },
  {
    title: 'AI & Automation',
    icon: Brain,
    skills: ['LangChain', 'RAG', 'Vector DBs', 'LLMs'],
    description: 'Integrating intelligent agents into business workflows.',
    className: 'md:col-span-1 md:row-span-2'
  },
  {
    title: 'Backend Systems',
    icon: Terminal,
    skills: ['Node.js', 'NestJS', 'Python', 'Go'],
    description: 'High-concurrency microservices and robust API design.',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Cloud Infrastructure',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    description: 'Automated, scalable deployments with 99.9% uptime.',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Data Strategy',
    icon: Database,
    skills: ['PostgreSQL', 'Redis', 'Elasticsearch', 'DynamoDB'],
    description: 'Designing high-performance data layers for scale.',
    className: 'md:col-span-2 md:row-span-1'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-950 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 px-2 md:px-0">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
                Technical <span className="text-mint-400">Stack</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl">
                A specialized toolkit for shipping complex systems at record speed.
              </p>
            </div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            {skillsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`group relative overflow-hidden glass-card rounded-2xl md:rounded-[2rem] p-5 md:p-8 border border-white/5 hover:border-mint-500/30 transition-colors ${item.className}`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-mint-500/5 rounded-full blur-3xl group-hover:bg-mint-500/10 transition-colors"></div>
                  
                  <div className="flex flex-col h-full justify-between relative z-10">
                    <div>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-slate-800/50 flex items-center justify-center mb-4 md:mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-mint-400" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-400 mb-4 md:mb-6 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-2 md:px-3 py-1 bg-white/5 text-slate-300 rounded-lg text-xs md:text-sm font-medium border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          <div className="mt-16 md:mt-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl md:rounded-[3rem] overflow-hidden p-8 md:p-12 text-center border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mint-500/5 blur-[120px] pointer-events-none"></div>
              
              <h3 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 relative z-10">
                Ready to accelerate your delivery?
              </h3>
              <p className="text-base md:text-xl text-slate-400 mb-8 md:text-12 md:mb-10 max-w-2xl mx-auto relative z-10">
                I help businesses navigate complex technical challenges and ship 
                production-ready solutions in weeks.
              </p>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative z-10 w-full sm:w-auto bg-mint-500 hover:bg-mint-400 text-slate-950 px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all duration-300 shadow-xl shadow-mint-500/20"
              >
                Start Your Project
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
