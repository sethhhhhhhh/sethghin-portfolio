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

export default function SecurityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-12 lg:col-span-8">
      <article>
        <ProjectHeader 
          title="Security & CTF"
          category="OFFENSIVE SECURITY"
          status="ONGOING"
        />
        
        <ProjectMetadata 
          role="STUDENT & PARTICIPANT"
          timeline="ONGOING"
          technologies={['Security Tools', 'Forensics', 'Network Analysis']}
        />
        
        <ProjectSection 
          number="01"
          title="CONTEXT"
          content="Security and CTF work focusing on cybersecurity skill development through practical challenges and competitions. Developing toward offensive security and penetration testing through hands-on learning."
        />
        
        <ProjectSection 
          number="02"
          title="APPROACH"
          content="Active participation in Capture The Flag competitions, including YCEP CTF. Focus on developing practical cybersecurity skills through network analysis, vulnerability assessment, and understanding systems from an attacker's perspective."
        />
        
        <ProjectSection 
          number="03"
          title="LEARNING"
          content="Currently developing security skills through CTF participation and practical projects. Building understanding of how systems work, how they can fail, and how vulnerabilities can be identified and addressed."
        />
      </article>
      
        </main>

        <aside className="col-span-12 lg:col-span-4">
          <div className="sticky top-28">
            <CaseStudyNavigation 
              currentSlug="security"
              projects={allProjects}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
