import React from 'react';

interface ProjectHeaderProps {
  title: string;
  category: string;
  status: string;
}

export const ProjectHeader = ({ title, category, status }: ProjectHeaderProps) => {
  return (
    <header className="mb-16">
      <div className="flex items-start gap-8 mb-6">
        <span className="catalogue-number">01</span>
        <div className="flex-1">
          <h1 className="text-display-xl text-foreground mb-4">
            {title}
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <p className="text-meta-mono text-muted-foreground uppercase tracking-wide">
              {category}
            </p>
            <span className="text-muted-foreground">·</span>
            <p className="text-meta-mono text-muted-foreground uppercase tracking-wide">
              {status}
            </p>
          </div>
          <div className="registration-line"></div>
        </div>
      </div>
    </header>
  );
};
