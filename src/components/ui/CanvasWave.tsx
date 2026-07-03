"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export default function CanvasWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let offset = 0;

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Active state tracker for performance (pause when not visible)
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const draw = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // We'll draw 2-3 overlapping waves with slight phase offsets
      offset += 0.003; // Control wave animation speed

      const isDark = document.documentElement.classList.contains("dark");

      // Draw Wave 1 (Back wave - translucent)
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 10) {
        // Calculate y coordinate using sine waves
        const wave1 = Math.sin(x * 0.003 + offset * 1.5) * 45;
        const wave2 = Math.cos(x * 0.001 - offset * 0.8) * 20;
        const y = height * 0.75 + wave1 + wave2;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      
      const gradient1 = ctx.createLinearGradient(0, height * 0.5, 0, height);
      if (isDark) {
        gradient1.addColorStop(0, "rgba(0, 180, 216, 0.06)");
        gradient1.addColorStop(1, "rgba(11, 19, 43, 0.9)");
      } else {
        gradient1.addColorStop(0, "rgba(0, 180, 216, 0.04)");
        gradient1.addColorStop(1, "rgba(255, 255, 255, 0.95)");
      }
      ctx.fillStyle = gradient1;
      ctx.fill();

      // Draw Wave 2 (Middle wave)
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 10) {
        const wave1 = Math.sin(x * 0.002 - offset * 1.2 + Math.PI / 4) * 35;
        const wave2 = Math.cos(x * 0.0045 + offset * 0.5) * 15;
        const y = height * 0.78 + wave1 + wave2;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();

      const gradient2 = ctx.createLinearGradient(0, height * 0.6, 0, height);
      if (isDark) {
        gradient2.addColorStop(0, "rgba(0, 194, 168, 0.08)");
        gradient2.addColorStop(1, "rgba(11, 19, 43, 0.95)");
      } else {
        gradient2.addColorStop(0, "rgba(0, 194, 168, 0.05)");
        gradient2.addColorStop(1, "rgba(255, 255, 255, 0.98)");
      }
      ctx.fillStyle = gradient2;
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 left-0 w-full h-[50vh] pointer-events-none z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
