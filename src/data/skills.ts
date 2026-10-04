export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    title: 'Frontend architecture',
    description: 'Building immersive, performant user interfaces with modern frameworks.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'AI & automation',
    description: 'Integrating intelligent agents into business workflows.',
    skills: ['Generative AI', 'LLMs', 'RAG', 'AI Agents', 'Vector Databases', 'LangChain'],
  },
  {
    title: 'Backend systems',
    description: 'High-concurrency microservices and robust API design.',
    skills: ['Node.js', 'NestJS', 'Rust', 'Python', 'Go'],
  },
  {
    title: 'Cloud infrastructure',
    description: 'Automated, scalable deployments with 99.9% uptime.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    title: 'Data strategy',
    description: 'Designing high-performance data layers for scale.',
    skills: ['PostgreSQL', 'Redis', 'Elasticsearch', 'DynamoDB'],
  },
  {
    title: 'Leadership & collaboration',
    description: 'Leading teams, mentoring engineers, and turning business goals into shipped work.',
    skills: ['Technical leadership', 'Mentoring', 'Stakeholder communication', 'Cross-team collaboration'],
  },
];
