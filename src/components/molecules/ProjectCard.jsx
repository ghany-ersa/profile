import { Layout } from 'lucide-react';
import { TechTag } from '../atoms';

/**
 * Inline project preview shown under a timeline experience entry -
 * image on one side, title + description + tech stack on the other.
 *
 * @param {{title: string, description: string, image: string, tech: string[]}} project
 */
export default function ProjectCard({ project }) {
  return (
    <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col sm:flex-row group/project hover:border-cyan-900 transition-colors duration-300">
      <div className="sm:w-2/5 h-48 sm:h-auto sm:max-h-56 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover/project:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-slate-900/30 group-hover/project:bg-transparent transition-colors duration-300" />
      </div>
      <div className="sm:w-3/5 p-6 flex flex-col justify-center">
        <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <Layout className="w-4 h-4 text-cyan-400" />
          {project.title}
        </h4>
        <p className="text-slate-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>
      </div>
    </div>
  );
}
