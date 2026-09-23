import React from 'react';

interface ProjectMetadataProps {
  role: string;
  timeline: string;
  technologies: string[];
}

export const ProjectMetadata = ({ role, timeline, technologies }: ProjectMetadataProps) => {
  return (
    <div className="ml-16 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="system-annotation block mb-2">ROLE</span>
          <span className="text-body-md text-foreground" style={{ fontFamily: 'var(--font-mono), monospace' }}>{role}</span>
        </div>
        <div>
          <span className="system-annotation block mb-2">TIMELINE</span>
          <span className="text-body-md text-foreground" style={{ fontFamily: 'var(--font-mono), monospace' }}>{timeline}</span>
        </div>
        <div>
          <span className="system-annotation block mb-2">TECHNOLOGIES</span>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {technologies.map((tech) => (
              <span key={tech} className="text-body-md text-foreground" style={{ fontFamily: 'var(--font-mono), monospace' }}>
                {tech}
                {tech !== technologies[technologies.length - 1] && ' · '}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
