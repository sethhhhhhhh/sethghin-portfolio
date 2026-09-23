import React from 'react';
import Link from 'next/link';

interface CaseStudyNavigationProps {
  currentSlug: string;
  projects: Array<{
    slug: string;
    title: string;
  }>;
}

export const CaseStudyNavigation = ({ currentSlug, projects }: CaseStudyNavigationProps) => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <nav className="border-t border-border pt-12 mt-12" aria-label="Case study navigation">
      <div className="flex justify-between items-start gap-8">
        {prevProject ? (
          <Link
            href={`/work/${prevProject.slug}`}
            className="flex-1 text-left group"
          >
            <span className="text-label text-muted-foreground block mb-2">Previous</span>
            <span className="text-heading-md text-foreground group-hover:text-accent transition-colors duration-200">
              {prevProject.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        
        <Link
          href="/work"
          className="text-meta text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Back to Work
        </Link>
        
        {nextProject ? (
          <Link
            href={`/work/${nextProject.slug}`}
            className="flex-1 text-right group"
          >
            <span className="text-label text-muted-foreground block mb-2">Next</span>
            <span className="text-heading-md text-foreground group-hover:text-accent transition-colors duration-200">
              {nextProject.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </nav>
  );
};
