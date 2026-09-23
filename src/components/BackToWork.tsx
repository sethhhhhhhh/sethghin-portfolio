import React from 'react';
import Link from 'next/link';

export const BackToWork = () => {
  return (
    <div className="mb-12">
      <Link
        href="/work"
        className="text-meta text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-2"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Work
      </Link>
    </div>
  );
};
