export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-12 lg:col-span-8">
      {/* Background Typography */}
      <div className="bg-display-text top-20 left-0">ABOUT</div>

      <div className="flex items-start gap-8 mb-12">
        <span className="catalogue-number animate-fade-in">03</span>
        <div className="flex-1">
          <h1 className="text-display-xl text-foreground mb-4 animate-slide-up">ABOUT</h1>
          <div className="registration-line mb-8 animate-fade-in delay-100"></div>
        </div>
      </div>
      
      <div className="ml-16">
        <div className="flex gap-12 mb-12">
          <div className="w-32 flex-shrink-0">
            <div className="system-annotation mb-2">LOCATION</div>
            <div className="text-meta-mono text-muted-foreground">SINGAPORE</div>
          </div>
          <div className="w-32 flex-shrink-0">
            <div className="system-annotation mb-2">EDUCATION</div>
            <div className="text-meta-mono text-muted-foreground">NANYANG POLYTECHNIC</div>
            <div className="text-meta-mono text-muted-foreground mt-1">Apr 2025 — Apr 2028</div>
          </div>
          <div className="w-32 flex-shrink-0">
            <div className="system-annotation mb-2">DIRECTION</div>
            <div className="text-meta-mono text-muted-foreground">OFFENSIVE SECURITY</div>
          </div>
        </div>
        
        <div className="registration-line mb-12"></div>
        
        <div className="max-w-2xl space-y-8">
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            I am a Cybersecurity & Digital Forensics student at Nanyang Polytechnic, developing toward a career in offensive security and penetration testing. My approach is grounded in curiosity about how systems work, how they can fail, and how vulnerabilities can be identified and addressed.
          </p>
          
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            I learn by building and taking systems apart. Through software development, I understand how applications are constructed and operated. Through CTF participation and security exercises, I develop practical skills in network analysis, vulnerability assessment, and understanding systems from an attacker&apos;s perspective.
          </p>
          
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            Aviation training has shaped my approach to risk assessment, situational awareness, and structured decision-making under pressure. Leadership roles have developed my communication, coordination, and responsibility. I am early in my field but committed to continuous technical development and responsible offensive security practice.
          </p>
        </div>
        
        <div className="registration-line my-12"></div>
        
        <div className="mb-8">
          <div className="system-annotation mb-4">CERTIFICATES</div>
          <div className="space-y-4">
            <a
              href="/images/certificates/YCEP 2024_Seth Ghin Kai.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border p-4 hover:border-accent transition-colors duration-200 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-body-md text-foreground group-hover:text-accent transition-colors duration-200" style={{ fontFamily: 'var(--font-mono), monospace' }}>
                    YCEP 2024
                  </div>
                  <div className="text-meta-mono text-muted-foreground mt-1">
                    Youth Cyber Exploration Programme
                  </div>
                </div>
                <span className="text-muted-foreground group-hover:text-accent transition-colors duration-200">
                  ↗
                </span>
              </div>
            </a>
            
            <a
              href="/images/certificates/ydcp.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border p-4 hover:border-accent transition-colors duration-200 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-body-md text-foreground group-hover:text-accent transition-colors duration-200" style={{ fontFamily: 'var(--font-mono), monospace' }}>
                    YDCP
                  </div>
                  <div className="text-meta-mono text-muted-foreground mt-1">
                    Youth Defence Cyber Programme
                  </div>
                </div>
                <span className="text-muted-foreground group-hover:text-accent transition-colors duration-200">
                  ↗
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
        </main>
        <aside className="col-span-12 lg:col-span-4">
          <div className="sticky top-28">
            <div className="text-meta-mono text-muted-foreground">About • background & certificates</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
