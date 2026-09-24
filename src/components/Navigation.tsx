'use client';

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
}

const navItems: NavItem[] = [
  { name: 'SG', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Experience', href: '/experience' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resume', href: '/resume' }
];

const internalNavItems = navItems.filter(item => !item.external);

export const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const underlineRef = useRef<HTMLSpanElement | null>(null);
  const [underlineVisible, setUnderlineVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    const update = () => {
      if (!containerRef.current || !underlineRef.current) return;
      const idx = navItems.findIndex(i => i.href === pathname);
      if (idx === -1) {
        underlineRef.current.style.opacity = '0';
        setUnderlineVisible(false);
        return;
      }
      const el = navRefs.current[idx];
      if (!el) {
        underlineRef.current.style.opacity = '0';
        setUnderlineVisible(false);
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const left = elRect.left - containerRect.left + containerRef.current.scrollLeft;
      const width = elRect.width;

      underlineRef.current.style.transform = `translateX(${left}px)`;
      underlineRef.current.style.width = `${width}px`;
      underlineRef.current.style.opacity = '1';
      setUnderlineVisible(true);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <nav
      className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Desktop Navigation */}
      <div ref={containerRef} className="hidden sm:block relative">
        <ul className="flex items-center gap-8">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          const baseClasses = 'text-foreground text-xl font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent';
          const activeClasses = isActive ? 'text-accent' : 'text-foreground hover:text-accent';

          if (item.external) {
            return (
              <li key={item.name} className="flex-shrink-0">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseClasses} ${activeClasses}`}
                >
                  {item.name}
                </a>
              </li>
            );
          }

          return (
            <li
              key={item.name}
              ref={el => { navRefs.current[index] = el }}
              className={`${baseClasses} ${activeClasses} flex-shrink-0`}
            >
              <Link href={item.href}>
                {item.name}
              </Link>
            </li>
          );
        })}
        </ul>

        {/* moving underline */}
        <span
          ref={underlineRef}
          aria-hidden
          className="pointer-events-none absolute bottom-0 h-[2px] bg-accent rounded"
          style={{
            left: 0,
            width: 0,
            transform: 'translateX(0px)',
            transition: 'transform 520ms cubic-bezier(0.2,0.8,0.2,1), width 520ms cubic-bezier(0.2,0.8,0.2,1), opacity 220ms linear',
            opacity: 0
          }}
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden p-2 text-foreground hover:text-accent transition-colors duration-200"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <ul className="absolute top-full left-0 right-0 bg-background border-b border-border sm:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const baseClasses = 'block px-4 sm:px-6 lg:px-8 py-4 text-foreground text-lg font-semibold transition-colors duration-200';
            const activeClasses = isActive ? 'text-accent' : 'text-foreground hover:text-accent';

            if (item.external) {
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClasses} ${activeClasses}`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            }

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${baseClasses} ${activeClasses}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};
