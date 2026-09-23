'use client';

import { useEffect, useState } from 'react';
import { ResumeActions } from '@/components/ResumeActions';
import { RESUME_PDF_HREF } from '@/lib/resume';

export function ResumeViewer() {
  const [previewUnavailable, setPreviewUnavailable] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(RESUME_PDF_HREF, { method: 'GET' })
      .then((response) => {
        if (!cancelled && !response.ok) {
          setPreviewUnavailable(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setPreviewUnavailable(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (previewUnavailable) {
    return (
      <div className="border border-border px-6 py-16 sm:px-10 sm:py-20">
        <p className="text-body-md text-foreground mb-2">PDF preview unavailable.</p>
        <p className="text-body-md text-muted-foreground mb-8">
          Open the CV in a new tab or download the PDF.
        </p>
        <ResumeActions downloadLabel="DOWNLOAD CV ↓" />
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden border border-border bg-charcoal-900">
      <object
        data={RESUME_PDF_HREF}
        type="application/pdf"
        className="block w-full max-w-full"
        style={{ height: 'min(85vh, 1100px)', minHeight: '32rem' }}
        aria-label="Seth Ghin Kai CV preview"
      >
        <iframe
          src={RESUME_PDF_HREF}
          title="Seth Ghin Kai CV"
          className="block h-full w-full max-w-full border-0"
          style={{ height: 'min(85vh, 1100px)', minHeight: '32rem' }}
          onError={() => setPreviewUnavailable(true)}
        />
        <div className="px-6 py-16 sm:px-10 sm:py-20">
          <p className="text-body-md text-foreground mb-2">PDF preview unavailable.</p>
          <p className="text-body-md text-muted-foreground mb-8">
            Open the CV in a new tab or download the PDF.
          </p>
          <ResumeActions downloadLabel="DOWNLOAD CV ↓" />
        </div>
      </object>
    </div>
  );
}
