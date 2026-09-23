import { CaseStudy as CaseStudyComponent } from '@/components/CaseStudy';
import { CaseStudy as CaseStudyType } from '@/types';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Placeholder case study data - will be replaced with actual data fetching
  const placeholderCaseStudy: CaseStudyType = {
    title: 'Project Title',
    subtitle: 'Project subtitle or tagline',
    overview: 'Project overview will be displayed here.',
    role: 'Role description',
    timeline: 'Timeline information',
    technologies: ['Technology 1', 'Technology 2'],
    sections: [
      {
        title: 'Section Title',
        content: 'Section content will be displayed here.',
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-12 lg:col-span-8">
          <CaseStudyComponent caseStudy={placeholderCaseStudy} />
        </main>
        <aside className="col-span-12 lg:col-span-4">
          <div className="sticky top-28">
            {/* placeholder for navigation or project metadata */}
          </div>
        </aside>
      </div>
    </div>
  );
}
