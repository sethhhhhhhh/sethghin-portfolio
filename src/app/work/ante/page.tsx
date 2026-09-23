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

export default function AntePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-12 lg:col-span-8">
          <article>
            <ProjectHeader 
              title="Ante"
              category="AI / SYSTEMS"
              status="IN DEVELOPMENT"
            />
            
            <ProjectMetadata 
              role="SOLO DEVELOPER"
              timeline="IN DEVELOPMENT"
              technologies={['React', 'Node.js', 'AI/ML']}
            />
            
            <ProjectSection 
              number="01"
              title="CONTEXT"
              content="Ante is an AI-powered meeting assistant currently in development. The project focuses on helping users capture, organize, and action insights from meetings through intelligent transcription and analysis."
            />
            
            <ProjectSection 
              number="02"
              title="APPROACH"
              content="Currently in active development as a solo project. Building the core AI meeting assistant functionality with focus on user experience and practical utility."
              images={['/images/ante/Ask-ACE.png']}
            />
            
            <ProjectSection 
              number="03"
              title="STATUS"
              content="Pre-launch. In active development."
              images={[
                '/images/ante/Before-prep.png',
                '/images/ante/During-prep1.png',
                '/images/ante/During-prep2.png',
                '/images/ante/After-prep.png',
                '/images/ante/Ghost-Overlay.png'
              ]}
            />
          </article>
        </main>

        <aside className="col-span-12 lg:col-span-4">
          <div className="sticky top-28">
            <CaseStudyNavigation 
              currentSlug="ante"
              projects={allProjects}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
