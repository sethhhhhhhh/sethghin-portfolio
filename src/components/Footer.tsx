import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-12 relative z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="text-meta text-muted-foreground">© {currentYear} Seth Ghin Kai</p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center justify-start lg:justify-end gap-8">
              <div className="flex items-center gap-8">
                <a
                  href="mailto:sbxghin@gmail.com"
                  className="text-meta text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/sethghin/"
                  className="text-meta text-muted-foreground hover:text-foreground transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/sethhhhhhhh"
                  className="text-meta text-muted-foreground hover:text-foreground transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
