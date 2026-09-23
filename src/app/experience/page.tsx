"use client";

import React from 'react';

export default function Experience() {
  const experience = [
    {
      id: '1',
      title: 'Vice President',
      organization: 'CATHOLIC CHURCH OF DIVINE MERCY',
      period: 'Nov 2023 — Present',
      description: 'Assisted in organizing duty schedules for altar servers to ensure smooth church operations. Mentored and guided junior altar servers, helping them learn proper procedures and responsibilities. Ensured discipline, professionalism, and teamwork among members during services and events. Assisted clergy and church staff during Mass and special liturgical celebrations. Helped organize ministry activities, training sessions, and church events. Developed leadership, communication, and organizational skills through active service.'
    },
    {
      id: '2',
      title: 'Food & Beverage Assistant',
      organization: 'W HOTELS',
      period: 'Oct 2024 — Nov 2024',
      description: 'Customer service and operations role in hospitality environment, focusing on high-volume operations, consistency, communication, teamwork, working under time pressure, and attention to service and operations.'
    },
    {
      id: '3',
      title: 'Guest Experience Associate',
      organization: 'TWELVE',
      period: 'Nov 2024 — Dec 2024',
      description: 'Customer service and operations role in hospitality environment, focusing on high-volume operations, consistency, communication, teamwork, working under time pressure, and attention to service and operations.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-12 lg:col-span-8">
          {/* Background Typography */}
          <div className="bg-display-text top-20 left-0">EXPERIENCE</div>

          <div className="flex items-start gap-8 mb-12">
            <span className="catalogue-number animate-fade-in">03</span>
            <div className="flex-1">
              <h1 className="text-display-xl text-foreground mb-4 animate-slide-up">EXPERIENCE</h1>
              <div className="registration-line mb-8 animate-fade-in delay-100"></div>
            </div>
          </div>
          
          <div className="space-y-0">
            {experience.map((exp, index) => (
              <div key={exp.id}>
                <div className={`flex items-start gap-8 py-8 border-b border-border transition-all duration-600`}>
                  <span className="catalogue-number min-w-[4rem]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-heading-xl text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-meta-mono text-muted-foreground mb-3 uppercase tracking-wide">
                      {exp.organization}
                    </p>
                    <p className="text-meta-mono text-muted-foreground mb-4">
                      {exp.period}
                    </p>
                    <p className="text-body-md text-muted-foreground">
                      {exp.description}
                    </p>
                    <div className="registration-line mt-8"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <aside className="col-span-12 lg:col-span-4">
          <div className="sticky top-28">
            <div className="text-meta-mono text-muted-foreground">Experience • roles & timeline</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
