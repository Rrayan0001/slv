'use client';

import React, { useRef, useEffect, useState } from 'react';

export default function RippleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Array<{
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    opacity: number;
  }>>([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Disable on mobile devices for performance
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return;

    // Enable only after page load for better initial performance
    const timer = setTimeout(() => setIsEnabled(true), 2000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create ripple on mouse move - reduced frequency
    const handleMouseMove = (e: MouseEvent) => {
      // Only create ripples occasionally for performance (reduced frequency)
      if (Math.random() > 0.98) {
        ripplesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          radius: 0,
          maxRadius: Math.random() * 100 + 80,
          opacity: 0.5,
        });
      }
    };

    // Animate ripples - limit concurrent ripples
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw ripples - limit to max 5 ripples
      if (ripplesRef.current.length > 5) {
        ripplesRef.current = ripplesRef.current.slice(-5);
      }

      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        ripple.radius += 2;
        ripple.opacity -= 0.02;

        if (ripple.opacity <= 0) {
          return false;
        }

        // Draw ripple
        ctx.strokeStyle = `rgba(249, 115, 22, ${ripple.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();

        return ripple.radius < ripple.maxRadius;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: 0.3,
        mixBlendMode: 'screen',
      }}
    />
  );
}
