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

export default function HobbyConnectPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-12 lg:col-span-8">
      <article>
        <ProjectHeader 
          title="HobbyConnect"
          category="WEB / MESSAGING"
          status="PREVIOUS PROJECT"
        />
        
        <ProjectMetadata 
          role="MESSAGING SYSTEM DEVELOPER"
          timeline="PREVIOUS PROJECT"
          technologies={['React', 'Node.js', 'WebSocket', 'TTS/STT']}
        />
        
        <ProjectSection 
          number="01"
          title="CONTEXT"
          content="HobbyConnect is an intergenerational social platform designed to connect people across generations through shared hobbies and interests."
        />
        
        <ProjectSection 
          number="02"
          title="APPROACH"
          content="Built the complete messaging system including multi-user messaging, reply functionality, online status indicators, text-to-speech capabilities, speech-to-text input, and colour-blind accessibility modes."
          images={[
            '/images/hobbyconnect/Screenshot 2026-09-21 170729.png',
            '/images/hobbyconnect/Screenshot 2026-09-21 170758.png'
          ]}
        />
        
        <ProjectSection 
          number="03"
          title="IMPLEMENTATION"
          content="Implemented real-time messaging using WebSocket technology, with focus on accessibility features including colour-blind modes and assistive text-to-speech functionality."
          images={['/images/hobbyconnect/Screenshot 2026-09-21 170844.png']}
        />
      </article>
      
        </main>

        <aside className="col-span-12 lg:col-span-4">
          <div className="sticky top-28">
            <CaseStudyNavigation 
              currentSlug="hobbyconnect"
              projects={allProjects}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
