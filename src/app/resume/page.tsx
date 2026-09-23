import type { Metadata } from 'next';
import { ResumeActions } from '@/components/ResumeActions';
import { ResumeViewer } from '@/components/ResumeViewer';

export const metadata: Metadata = {
  title: 'Resume — Seth Ghin Kai',
  description: 'Preview and download the current CV of Seth Ghin Kai.',
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-x-hidden">
      <div className="bg-display-text top-20 left-0">RESUME</div>

      <div className="flex items-start gap-6 sm:gap-8 mb-8 sm:mb-10">
        <span className="catalogue-number animate-fade-in">06</span>
        <div className="flex-1 min-w-0">
          <h1 className="text-display-xl text-foreground mb-4 animate-slide-up">RESUME</h1>
          <p className="text-meta-mono text-muted-foreground uppercase tracking-wide mb-1 animate-fade-in delay-100">
            Seth Ghin Kai
          </p>
          <p className="text-meta-mono text-muted-foreground uppercase tracking-wide mb-6 animate-fade-in delay-100">
            Cybersecurity & Digital Forensics
          </p>
          <div className="registration-line mb-8 animate-fade-in delay-200"></div>
          <ResumeActions className="animate-fade-in delay-300" />
        </div>
      </div>

      <div className="w-full max-w-full">
        <ResumeViewer />
      </div>
    </div>
  );
}
