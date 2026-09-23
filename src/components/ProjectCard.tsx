import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const statusLabels = {
    active: 'Active',
    archived: 'Archived',
    'in-development': 'In Development'
  };
  
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article className="border-b border-border py-8 transition-colors duration-200 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background hover-shift">
        <div className="flex items-start gap-8">
          <span className="catalogue-number min-w-[4rem]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-heading-lg text-foreground group-hover:text-accent transition-colors duration-200">
                {project.title}
              </h3>
              <span className="text-meta-mono text-muted-foreground whitespace-nowrap">
                {statusLabels[project.status]}
              </span>
            </div>
            
            <p className="text-body-md text-muted-foreground mb-4 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-meta-mono text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
