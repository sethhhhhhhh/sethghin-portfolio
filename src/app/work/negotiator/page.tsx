import { ProjectHeader } from '@/components/ProjectHeader';
import { ProjectMetadata } from '@/components/ProjectMetadata';
import { ProjectSection } from '@/components/ProjectSection';
import { CaseStudyNavigation } from '@/components/CaseStudyNavigation';

const allProjects = [
  { slug: 'ante', title: 'Ante' },
  { slug: 'hobbyconnect', title: 'HobbyConnect' },
  { slug: 'security', title: 'Security & CTF' },
  { slug: 'negotiator', title: 'Negotiator' }
];

export default function NegotiatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-12 lg:col-span-8">
      <article>
        <ProjectHeader 
          title="Negotiator"
          category="ARCHIVED"
          status="ARCHIVED"
        />
        
        <ProjectMetadata 
          role="DEVELOPER"
          timeline="ARCHIVED"
          technologies={['React', 'Node.js']}
        />
        
        <ProjectSection 
          number="01"
          title="CONTEXT"
          content="Negotiator was a previous project that has been archived. The project focused on negotiation and communication tools."
        />
        
        <ProjectSection 
          number="02"
          title="STATUS"
          content="This project has been archived and is no longer in active development."
        />
      </article>
      
        </main>

        <aside className="col-span-12 lg:col-span-4">
          <div className="sticky top-28">
            <CaseStudyNavigation 
              currentSlug="negotiator"
              projects={allProjects}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
