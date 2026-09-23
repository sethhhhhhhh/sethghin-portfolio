'use client';

import React, { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hasHover = window.matchMedia('(hover: hover)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hasHover || prefersReducedMotion) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
    };

    const onLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!cursorRef.current) return;

      // pointer interactions: slightly enlarge or show subtle marker
      if (el.closest('a, button') || el.tagName === 'A' || el.tagName === 'BUTTON') {
        cursorRef.current.style.width = '18px';
        cursorRef.current.style.height = '18px';
        cursorRef.current.style.border = '1px solid rgba(196,167,125,0.45)';
      } else {
        cursorRef.current.style.width = '8px';
        cursorRef.current.style.height = '8px';
        cursorRef.current.style.border = '1px solid rgba(200,200,200,0.08)';
      }
    };

    const animate = () => {
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      pos.current.x += dx * 0.18;
      pos.current.y += dy * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseout', onLeave);
    window.addEventListener('mouseover', onOver);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
      window.removeEventListener('mouseover', onOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        left: 0,
        top: 0,
        transform: 'translate3d(0,0,0) translate(-50%, -50%)',
        transition: 'width 160ms ease, height 160ms ease, border 160ms ease, opacity 220ms ease',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'rgba(220,217,211,0.02)',
        border: '1px solid rgba(200,200,200,0.08)',
        opacity: 0
      }}
    />
  );
};
