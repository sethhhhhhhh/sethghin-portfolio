import React from 'react';

interface ProjectSectionProps {
  number: string;
  title: string;
  content: string;
  type?: 'text' | 'quote';
  images?: string[];
}

export const ProjectSection = ({ number, title, content, type = 'text', images }: ProjectSectionProps) => {
  return (
    <section className="mb-16 ml-16">
      <div className="flex items-center gap-4 mb-6" style={{ minWidth: 0 }}>
        <span className="system-annotation">{number}</span>
        <h2 className="text-heading-xl text-foreground">
          {title}
        </h2>
      </div>
      {type === 'quote' ? (
        <blockquote className="border-l-2 border-accent pl-6 text-body-lg text-foreground italic mb-6">
          {content}
        </blockquote>
      ) : (
        <div className="text-body-lg text-muted-foreground leading-relaxed mb-6">
          {content}
        </div>
      )}
      {images && images.length > 0 && (
        <div className="space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="border border-border overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image}
                alt=""
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
