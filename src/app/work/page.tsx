"use client";

import React from 'react';
import Link from 'next/link';

export default function Work() {
  const projects = [
    {
      id: '1',
      title: 'Ante',
      description: 'AI meeting assistant',
      category: 'AI / SYSTEMS',
      status: 'IN DEVELOPMENT',
      slug: 'ante'
    },
    {
      id: '2',
      title: 'HobbyConnect',
      description: 'Intergenerational social platform',
      category: 'WEB / MESSAGING',
      status: 'PREVIOUS PROJECT',
      slug: 'hobbyconnect'
    },
    {
      id: '3',
      title: 'Security & CTF',
      description: 'Cybersecurity projects and CTF participation',
      category: 'OFFENSIVE SECURITY',
      status: 'ONGOING',
      slug: 'security'
    },
    {
      id: '4',
      title: 'Negotiator',
      description: 'Archived project',
      category: 'ARCHIVED',
      status: 'ARCHIVED',
      slug: 'negotiator'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8">
        {/* Background Typography */}
        <div className="bg-display-text top-20 left-0">PROJECTS</div>

        <div className="flex items-start gap-8 mb-12">
          <span className="catalogue-number animate-fade-in">01</span>
          <div className="flex-1">
            <h1 className="text-display-xl text-foreground mb-4 animate-slide-up">WORK</h1>
            <div className="registration-line mb-8 animate-fade-in delay-100"></div>
          </div>
        </div>
        
        <div className="space-y-0">
        {projects.map((project, index) => (
          <div key={project.id}>
            <Link href={`/work/${project.slug}`} className="group block hover-shift">
              <div className={`flex items-start gap-8 py-8 border-b border-border transition-all duration-300 hover:pl-10`} style={{ transitionDuration: '600ms' }}>
                <span className="catalogue-number min-w-[4rem]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-heading-xl text-foreground group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span className="text-meta-mono text-muted-foreground whitespace-nowrap">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-meta-mono text-muted-foreground mb-4 uppercase tracking-wide">
                    {project.category}
                  </p>
                  
                  <p className="text-body-md text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <span className="text-muted-foreground group-hover:text-accent transition-colors duration-200">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
        </div>
      </div>

      <aside className="hidden lg:block lg:col-span-4 pl-8">
        <div className="sticky top-28">
          <div className="text-meta-mono text-muted-foreground">Selected projects • editorial view</div>
        </div>
      </aside>
      </div>
    </div>
  );
}
