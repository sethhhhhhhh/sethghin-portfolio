export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'active' | 'archived' | 'in-development';
  slug: string;
}

export interface CaseStudySection {
  title: string;
  content: string;
  type?: 'text' | 'image' | 'quote';
}

export interface CaseStudy {
  title: string;
  subtitle: string;
  overview: string;
  role: string;
  timeline: string;
  technologies: string[];
  sections: CaseStudySection[];
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'volunteer';
}
