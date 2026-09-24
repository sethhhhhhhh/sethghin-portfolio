"use client";

import React from 'react';
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
          <section className="mb-12">
            <div className="flex items-start gap-8 mb-6">
              <span className="catalogue-number">02</span>
              <div className="flex-1">
                <h2 className="text-heading-xl text-foreground mb-3">EXPERIENCE</h2>
                <div className="registration-line mb-4"></div>
                <p className="text-body-md text-muted-foreground">
                  <Link href="/experience" className="text-foreground hover:text-accent transition-colors duration-200">View experience →</Link>
                </p>
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
