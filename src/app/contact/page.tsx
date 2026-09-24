export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-12 lg:col-span-8">
      {/* Background Typography */}
      <div className="bg-display-text top-20 left-0">CONTACT</div>

      <div className="flex items-start gap-8 mb-12">
        <span className="catalogue-number animate-fade-in">04</span>
        <div className="flex-1">
          <h1 className="text-display-xl text-foreground mb-4 animate-slide-up">CONTACT</h1>
          <div className="registration-line mb-8 animate-fade-in delay-100"></div>
        </div>
      </div>
      
      <div className="ml-16">
        <div className="max-w-2xl mb-12">
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            Feel free to reach out for collaborations, opportunities, or just to connect.
          </p>
        </div>
        
        <div className="registration-line mb-12"></div>
        
        <div className="space-y-8">
          <div>
            <div className="system-annotation mb-2">EMAIL</div>
            <a 
              href="mailto:sbxghin@gmail.com" 
              className="text-body-md text-foreground hover:text-accent transition-colors duration-200"
              style={{ fontFamily: 'var(--font-mono), monospace' }}
            >
              sbxghin@gmail.com
            </a>
          </div>
          
          <div>
            <div className="system-annotation mb-2">LINKEDIN</div>
            <a 
              href="https://www.linkedin.com/in/sethghin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-body-md text-foreground hover:text-accent transition-colors duration-200"
              style={{ fontFamily: 'var(--font-mono), monospace' }}
            >
              linkedin.com/in/sethghin
            </a>
          </div>
          
          <div>
            <div className="system-annotation mb-2">GITHUB</div>
            <a 
              href="https://github.com/sethhhhhhhh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-body-md text-foreground hover:text-accent transition-colors duration-200"
              style={{ fontFamily: 'var(--font-mono), monospace' }}
            >
              github.com/sethhhhhhhh
            </a>
          </div>
          
          <div>
            <div className="system-annotation mb-2">LOCATION</div>
            <p className="text-body-md text-muted-foreground" style={{ fontFamily: 'var(--font-mono), monospace' }}>
              Singapore
            </p>
          </div>
        </div>
        </div>
        </main>
        <aside className="col-span-12 lg:col-span-4">
          <div className="sticky top-28">
            <div className="text-meta-mono text-muted-foreground">Contact • reach out</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
