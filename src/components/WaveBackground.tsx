 'use client';

import React, { useEffect, useRef } from 'react';

export const WaveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<SVGSVGElement | null>(null);
  const layer2Ref = useRef<SVGSVGElement | null>(null);
  const layer3Ref = useRef<SVGSVGElement | null>(null);
  const layer4Ref = useRef<SVGSVGElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let lastScrollY = window.scrollY;

    const doc = document.documentElement;
    const getScrollRatio = () => {
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      return Math.min(1, window.scrollY / maxScroll);
    };

    const maxOffset = 20; // cap movement to ~5-20px across full scroll

    const update = () => {
      const ratio = getScrollRatio();

      const v1 = ratio * maxOffset * 0.35; // slow background
      const v2 = ratio * maxOffset * 0.6; // middle
      const v3 = ratio * maxOffset * 1.0; // foreground
      const v4 = ratio * maxOffset * 0.7; // secondary

      if (layer1Ref.current) layer1Ref.current.style.transform = `translateY(${v1}px)`;
      if (layer2Ref.current) layer2Ref.current.style.transform = `translateY(${v2}px)`;
      if (layer3Ref.current) layer3Ref.current.style.transform = `translateY(${v3}px)`;
      if (layer4Ref.current) layer4Ref.current.style.transform = `translateY(${v4}px)`;

      rafRef.current = requestAnimationFrame(update);
    };

    const onScroll = () => {
      // only trigger rAF loop when scroll changes
      if (window.scrollY !== lastScrollY) {
        lastScrollY = window.scrollY;
        if (rafRef.current == null) {
          rafRef.current = requestAnimationFrame(update);
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // run one tick to set initial positions
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ backgroundColor: 'var(--color-charcoal-950)' }}
    >
      {/* Background wave - darkest, slowest */}
      <svg
        ref={layer1Ref}
        className="absolute top-0 left-0 w-[120%] h-[120%] transition-transform will-change-transform"
        style={{ opacity: 0.3 }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M0,450 C300,400 600,500 900,450 C1200,400 1440,450 1440,450 L1440,900 L0,900 Z"
          fill="rgba(20, 20, 20, 0.8)"
        />
      </svg>

      {/* Middle wave - subtle bronze highlight */}
      <svg
        ref={layer2Ref}
        className="absolute top-0 left-0 w-[120%] h-[120%] transition-transform will-change-transform"
        style={{ opacity: 0.25 }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M0,500 C400,450 800,550 1200,500 C1440,470 1440,500 1440,500 L1440,900 L0,900 Z"
          fill="rgba(196, 167, 125, 0.08)"
        />
      </svg>

      {/* Foreground wave - lighter, more movement */}
      <svg
        ref={layer3Ref}
        className="absolute top-0 left-0 w-[120%] h-[120%] transition-transform will-change-transform"
        style={{ opacity: 0.2 }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M0,550 C350,500 700,600 1050,550 C1400,500 1440,550 1440,550 L1440,900 L0,900 Z"
          fill="rgba(30, 30, 30, 0.6)"
        />
      </svg>

      {/* Secondary wave layer - adds depth */}
      <svg
        ref={layer4Ref}
        className="absolute top-0 left-0 w-[120%] h-[120%] transition-transform will-change-transform"
        style={{ opacity: 0.15 }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M0,600 C400,550 800,650 1200,600 C1440,570 1440,600 1440,600 L1440,900 L0,900 Z"
          fill="rgba(196, 167, 125, 0.05)"
        />
      </svg>
    </div>
  );
};
