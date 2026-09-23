import { RESUME_FILENAME, RESUME_PDF_HREF } from '@/lib/resume';

interface ResumeActionsProps {
  downloadLabel?: string;
  className?: string;
}

export function ResumeActions({
  downloadLabel = 'DOWNLOAD CV ↗',
  className = '',
}: ResumeActionsProps) {
  const linkClassName =
    'text-meta-mono text-foreground hover:text-accent transition-colors duration-200 focus-visible:outline-none';

  return (
    <div className={`flex flex-wrap items-center gap-6 sm:gap-8 ${className}`}>
      <a
        href={RESUME_PDF_HREF}
        download={RESUME_FILENAME}
        className={linkClassName}
      >
        {downloadLabel}
      </a>
      <a
        href={RESUME_PDF_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        OPEN PDF ↗
      </a>
    </div>
  );
}
