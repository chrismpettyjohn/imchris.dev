import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const initialLogo = (initials: string) => (
  <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg md:text-xl bg-gradient-to-br from-slate-700 to-slate-900">
    {initials}
  </div>
);

const experienceData = [
  {
    title: 'Technical Founder',
    company: 'SureSteps',
    period: 'Jul 2025 - Present',
    logo: <img src="/img/suresteps.jpeg" alt="SureSteps" width={60} height={60} className="rounded-xl" />,
    logoBg: '#ffffff',
    description: 'Spearheading technical strategy and rapid execution. Architected and shipped a scalable AI-driven platform within weeks to accelerate enterprise onboarding.',
    achievements: [
      'Architected the full product end-to-end: responsive web app, cross-platform mobile app, and scalable backend services',
      'Designed an AI-powered data pipeline for intelligent content analysis, classification, and enrichment',
      'Integrated Salesforce CRM for seamless customer data sync and automated workflows'
    ],
    tech: ['TypeScript', 'Python', 'Next.js', 'AWS']
  },
  {
    title: 'Lead Engineer',
    company: 'Nike',
    period: 'Jan 2025 - Dec 2025',
    logo: <img src="/img/nike.png" alt="Nike" width={60} height={60} className="rounded-xl" />,
    logoBg: '#ffffff',
    description: 'Accelerating digital commerce through expert architectural guidance. Delivering scalable APIs and frontends for global logistics.',
    achievements: [
      'Architected real-time inventory services handling millions of requests',
      'Decreased release cycles by 30% through advanced CI/CD automation',
      'Delivered distributed event-driven workflows using NATS and Node.js'
    ],
    tech: ['Node.js', 'React', 'TypeScript', 'DynamoDB']
  },
  {
    title: 'Lead Engineer',
    company: 'Mars (mms.com)',
    period: 'Jul 2023 - Jan 2025',
    logo: <img src="/img/mms.png" alt="Mars" width={60} height={60} className="rounded-xl" />,
    logoBg: '#D52B1E',
    description: 'Led mission-critical e-commerce features for global consumer brand Mars. Built scalable solutions supporting millions of users.',
    achievements: [
      'Built services reducing packaging processing time by 85%',
      'Improved uptime to 99.9% across digital storefronts',
      'Architected delivery ETA engine with sub-40ms response'
    ],
    tech: ['Node.js', 'Java', 'Python', 'React']
  },
  {
    title: 'Senior Engineer',
    company: 'Apple',
    period: 'Jul 2022 - Jul 2023',
    logo: <img src="/img/apple.png" alt="Apple" width={60} height={60} className="rounded-xl" />,
    logoBg: '#4A4A4A',
    description: 'Owned performance-critical frontend systems for internal Apple tools. Delivered component libraries used org-wide across hundreds of teams.',
    achievements: [
      'Reduced render time by 40% via virtualized components',
      'Built shared UI kit used by 200+ apps',
      'Boosted simulation platform UX through async optimization'
    ],
    tech: ['TypeScript', 'React', 'Node.js']
  },
  {
    title: 'Senior Engineer',
    company: 'Nike',
    period: 'Jul 2021 - Jul 2022',
    logo: <img src="/img/nike.png" alt="Nike" width={60} height={60} className="rounded-xl" />,
    logoBg: '#ffffff',
    description: 'Built warehouse management and supply chain services powering Nike\'s global logistics operations.',
    achievements: [
      'Built a warehouse management service that cut stock shortages by 25%',
      'Scaled microservices to handle 20% more warehouse transactions',
      'Tuned MySQL queries and indexes, boosting database performance by 30%'
    ],
    tech: ['Node.js', 'Java', 'DynamoDB', 'MySQL']
  },
  {
    title: 'Software Engineer',
    company: 'Drive Social Media',
    period: 'Dec 2018 - Jul 2021',
    logo: <img src="/img/drive.png" alt="Drive Social Media" width={60} height={60} className="rounded-xl" />,
    logoBg: '#1DA1F2',
    description: 'Led a team of five engineers building the core platform — microservices, client and business dashboards, and an ad builder.',
    achievements: [
      'Improved platform performance by 800% and increased user retention by 240%',
      'Delivered features that helped acquire 1,000 new clients (~$25M ARR)',
      'Built CI/CD pipelines on Jenkins and GitLab to accelerate releases'
    ],
    tech: ['Laravel', 'PHP', 'Node.js', 'Vue', 'React']
  },
  {
    title: 'Founding Engineer',
    company: 'Impending Success LLC',
    period: 'Jul 2015 - Nov 2019',
    logo: <div className="w-full h-full">{initialLogo('IS')}</div>,
    logoBg: '#1e293b',
    description: 'Founded and led a consultancy delivering custom web applications and long-term support for clients across industries.',
    achievements: [
      'Designed and shipped tailored solutions in Angular, React, Node.js, and Laravel',
      'Maintained 99.9% uptime across client production systems',
      'Delivered e-commerce platforms that boosted client sales by 40%'
    ],
    tech: ['Angular', 'React', 'Node.js', 'Laravel', 'Linux']
  },
  {
    title: 'Full Stack Developer',
    company: 'Edgar County Humane Association',
    period: 'Jan 2014 - Jan 2016',
    logo: <div className="w-full h-full">{initialLogo('EC')}</div>,
    logoBg: '#7c2d12',
    description: 'Partnered with leadership to define the long-term digital vision and built the organization\'s adoption and outreach platform.',
    achievements: [
      'Built a custom adoption portal driving a 72% increase in engagement and 55% more adoptions',
      'Mobile-optimized UI grew registrations by 65% and volunteer sign-ups by 58%',
      'Developed secure APIs and payment integration, cutting form errors by 45%'
    ],
    tech: ['Angular', 'Node.js']
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-20 px-2 md:px-0"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
              Track <span className="text-sky-400">Record</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
              15+ years of delivering high-stakes engineering for global leaders and fast-moving startups.
            </p>
          </motion.div>
          
          <div className="space-y-8 md:space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative glass-card rounded-2xl md:rounded-[2.5rem] p-5 md:p-12 border border-white/5 hover:border-white/10 transition-all duration-500">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div
                        className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform overflow-hidden"
                        style={{ backgroundColor: exp.logoBg }}
                      >
                        {exp.logo}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 gap-2 md:gap-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-mint-400 transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sky-400 font-medium text-base md:text-lg">
                            <span>{exp.company}</span>
                            <span className="text-slate-600">•</span>
                            <span className="text-slate-400">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 leading-relaxed max-w-4xl font-light">
                        {exp.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <div>
                          <h4 className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-bold mb-3 md:mb-4">Core Impact</h4>
                          <ul className="space-y-3 md:space-y-4">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-mint-500 rounded-full mt-2 md:mt-2.5 flex-shrink-0"></span>
                                <span className="text-sm md:text-base text-slate-300 leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs md:text-sm uppercase tracking-widest text-slate-500 font-bold mb-3 md:mb-4">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((t, i) => (
                              <span key={i} className="px-3 md:px-4 py-1.5 md:py-2 bg-slate-800/50 text-slate-300 rounded-lg md:rounded-xl text-xs md:text-sm border border-white/5">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;