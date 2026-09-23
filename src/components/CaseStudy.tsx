import React from 'react';
import { CaseStudy as CaseStudyType, CaseStudySection } from '@/types';

interface CaseStudyProps {
  caseStudy: CaseStudyType;
}

export const CaseStudy = ({ caseStudy }: CaseStudyProps) => {
  return (
    <article>
      <header className="mb-16">
        <h1 className="text-display-xl text-foreground mb-6">
          {caseStudy.title}
        </h1>
        <p className="text-display-lg text-muted-foreground mb-12">
          {caseStudy.subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-label text-muted-foreground block mb-2">Role</span>
            <span className="text-body-md text-foreground">{caseStudy.role}</span>
          </div>
          <div>
            <span className="text-label text-muted-foreground block mb-2">Timeline</span>
            <span className="text-body-md text-foreground">{caseStudy.timeline}</span>
          </div>
          <div>
            <span className="text-label text-muted-foreground block mb-2">Technologies</span>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {caseStudy.technologies.map((tech) => (
                <span key={tech} className="text-body-md text-foreground">
                  {tech}
                  {tech !== caseStudy.technologies[caseStudy.technologies.length - 1] && ', '}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>
      
      <section className="mb-16">
        <h2 className="text-heading-xl text-foreground mb-6">Overview</h2>
        <p className="text-body-lg text-muted-foreground leading-relaxed">
          {caseStudy.overview}
        </p>
      </section>
      
      {caseStudy.sections.map((section, index) => (
        <section key={index} className="mb-16">
          <h2 className="text-heading-xl text-foreground mb-6">
            {section.title}
          </h2>
          {section.type === 'quote' ? (
            <blockquote className="border-l-2 border-accent pl-6 text-body-lg text-foreground italic">
              {section.content}
            </blockquote>
          ) : (
            <div className="text-body-lg text-muted-foreground leading-relaxed">
              {section.content}
            </div>
          )}
        </section>
      ))}
    </article>
  );
};
