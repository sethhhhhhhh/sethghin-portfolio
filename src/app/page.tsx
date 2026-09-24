"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
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

  const timelineEntries = [
    { year: '2026', title: 'Nanyang Polytechnic', detail: 'Diploma in Digital Security & Forensics' },
    { year: '2026', title: 'ANTE', detail: 'Solo Developer' },
    { year: '2026', title: 'Haidilao', detail: 'Kitchen Assistant' },
    { year: '2025', title: 'Brewerkz', detail: 'Guest Services Associate' },
    { year: '2025', title: 'Singapore Youth Flying Club', detail: 'Cadet Youth Pilot' },
    { year: '2025', title: 'Beijing Exchange Programme', detail: 'Exchange' },
    { year: '2024', title: 'Youth Digital Currency Programme', detail: '120-hour programme' },
    { year: '2023', title: 'Catholic Church of Divine Mercy', detail: 'Vice President, Altar Servers Ministry' }
  ];

  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  useEffect(() => {
    const updateActiveTimeline = () => {
      const items = Array.from(document.querySelectorAll<HTMLElement>('[data-timeline-entry]'));
      if (!items.length) return;

      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveTimelineIndex(closestIndex);
    };

    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        updateActiveTimeline();
        rafId = null;
      });
    };

    updateActiveTimeline();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveTimeline);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActiveTimeline);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-12 lg:col-span-8">

          {/* Background Typography */}
          <div className="bg-display-text top-20 left-0">BUILD</div>
          <div className="bg-display-text top-40 right-0">SECURITY</div>

          {/* Hero Section */}
          <section className="mb-20">
            <div className="flex items-start gap-8 mb-8">
              <div className="flex-1">
                <h1 className="text-display-xl text-foreground mb-4 animate-slide-up">Seth Ghin Kai</h1>
                <p className="text-display-lg text-muted-foreground mb-6 animate-slide-up delay-100">Cybersecurity & Digital Forensics Student</p>
                <div className="flex items-center gap-3 text-meta-mono text-muted-foreground mb-6 animate-slide-up delay-200">
                  <span>SINGAPORE</span>
                  <span>·</span>
                  <span>NANYANG POLYTECHNIC</span>
                </div>
                <div className="registration-line mb-6 animate-fade-in delay-300"></div>
                <div className="flex items-center gap-3 animate-slide-up delay-300">
                  <span className="system-annotation">01 / SELECTED WORK</span>
                  <span className="text-muted-foreground">→</span>
                </div>
              </div>
            </div>
          </section>

          {/* Selected Work */}
          <section className="mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {projects.map((project, index) => (
                <Link key={project.id} href={`/work/${project.slug}`} className="group block hover-shift">
                  <div className={`border border-border p-6 transition-all duration-300 hover:border-accent h-full`} style={{ transitionDuration: '600ms' }}>
                    <div className="flex items-start gap-4 mb-4">
                      <span className="catalogue-number text-2xl">{String(index + 1).padStart(2, '0')}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-heading-lg text-foreground group-hover:text-accent transition-colors duration-200">{project.title}</h3>
                        </div>
                        <p className="text-meta-mono text-muted-foreground mb-3 uppercase tracking-wide">{project.category}</p>
                        <p className="text-body-sm text-muted-foreground mb-3">{project.description}</p>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-meta-mono text-muted-foreground text-xs">{project.status}</span>
                          <span className="text-muted-foreground group-hover:text-accent transition-colors duration-200">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-14">
            <div className="flex items-start gap-8 mb-8">
              <span className="catalogue-number">02</span>
              <div className="flex-1">
                <h2 className="text-heading-xl text-foreground mb-3">EXPERIENCE</h2>
                <div className="registration-line mb-4"></div>
                <p className="text-body-md text-muted-foreground mb-0">
                  Education, work and programmes that have shaped how I approach systems, responsibility and problem solving.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-5xl">
              <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border" aria-hidden="true" />
              <div className="space-y-6 md:space-y-8">
                {timelineEntries.map((entry, index) => {
                  const isActive = index === activeTimelineIndex;
                  const isLeft = index % 2 === 0;

                  return (
                    <div
                      key={`${entry.year}-${entry.title}`}
                      data-timeline-entry
                      data-index={index}
                      className="grid grid-cols-[minmax(0,1fr)_18px_minmax(0,1fr)] items-start gap-x-3 md:gap-x-5"
                    >
                      {isLeft ? (
                        <div className={`col-start-1 pr-3 md:pr-6 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                          <p className="text-meta-mono text-muted-foreground mb-2">{entry.year}</p>
                          <h3 className={`text-heading-md text-left transition-all duration-500 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {entry.title}
                          </h3>
                          <p className="mt-2 text-left text-body-sm text-muted-foreground">{entry.detail}</p>
                        </div>
                      ) : (
                        <div className="col-start-1" aria-hidden="true" />
                      )}

                      <div className="relative col-start-2 flex justify-center pt-2">
                        <span
                          className={`block h-3.5 w-3.5 rounded-full border transition-all duration-500 ${isActive ? 'bg-accent border-accent shadow-[0_0_0_4px_rgba(196,167,125,0.12)]' : 'bg-background border-border'}`}
                          aria-hidden="true"
                        />
                      </div>

                      {isLeft ? (
                        <div className="col-start-3" aria-hidden="true" />
                      ) : (
                        <div className={`col-start-3 pl-3 md:pl-6 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                          <p className="text-meta-mono text-muted-foreground mb-2">{entry.year}</p>
                          <h3 className={`text-heading-md text-left transition-all duration-500 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {entry.title}
                          </h3>
                          <p className="mt-2 text-left text-body-sm text-muted-foreground">{entry.detail}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-12">
            <div className="flex items-start gap-8 mb-6">
              <span className="catalogue-number">03</span>
              <div className="flex-1">
                <h2 className="text-heading-xl text-foreground mb-3">ABOUT</h2>
                <div className="registration-line mb-4"></div>
                <p className="text-body-md text-muted-foreground mb-4">
                  <Link href="/about" className="text-foreground hover:text-accent transition-colors duration-200">Learn more about me →</Link>
                </p>
              </div>
            </div>
          </section>

          {/* Capabilities */}
          <section className="mb-12">
            <div className="flex items-start gap-8 mb-6">
              <span className="catalogue-number">04</span>
              <div className="flex-1">
                <h2 className="text-heading-xl text-foreground mb-3">CAPABILITIES</h2>
                <div className="registration-line mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <h3 className="text-heading-md mb-2">OFFENSIVE SECURITY</h3>
                    <p className="text-body-md text-muted-foreground">Network Security · Network Scanning · Vulnerability Assessment · Wireshark · CTF</p>
                  </div>
                  <div>
                    <h3 className="text-heading-md mb-2">SYSTEMS & DEVELOPMENT</h3>
                    <p className="text-body-md text-muted-foreground">Python · Scripting · Web Development · System Administration</p>
                  </div>
                  <div>
                    <h3 className="text-heading-md mb-2">AI & APPLIED TECHNOLOGY</h3>
                    <p className="text-body-md text-muted-foreground">AI Automation · Foundation Models · Data Analysis · Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <div className="flex items-start gap-8">
              <span className="catalogue-number">05</span>
              <div className="flex-1">
                <h2 className="text-heading-xl text-foreground mb-3">CONTACT</h2>
                <div className="registration-line mb-4"></div>
                <p className="text-body-md text-muted-foreground mb-2">
                  <Link href="/contact" className="text-foreground hover:text-accent transition-colors duration-200">Get in touch →</Link>
                </p>
              </div>
            </div>
          </section>

        </main>

        <aside className="hidden lg:block lg:col-span-4">
          <div className="h-full sticky top-28">
            <div className="bg-display-text top-40 right-0">SECURITY</div>
          </div>
        </aside>

      </div>
    </div>
  );
}
