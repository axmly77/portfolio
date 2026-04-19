"use client";
import { useEffect, useRef } from "react";

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COLORS = ["#6366f1", "#a855f7", "#3b82f6", "#818cf8"];
    const pts = Array.from({ length: 90 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -(Math.random() * 0.55 + 0.15),
      r: Math.random() * 1.6 + 0.4,
      a: Math.random() * 0.5 + 0.15,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -6) {
          p.y = canvas.height + 6;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -6) p.x = canvas.width + 6;
        if (p.x > canvas.width + 6) p.x = -6;
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.65 }}
    />
  );
}

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-14 overflow-hidden">
      {/* Aurora blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "80vmax",
          height: "80vmax",
          top: "50%",
          left: "50%",
          background:
            "conic-gradient(from 0deg, rgba(99,102,241,0.14) 0%, rgba(168,85,247,0.1) 30%, rgba(59,130,246,0.08) 60%, transparent 80%)",
          borderRadius: "50%",
          animation: "aurora 22s linear infinite",
          filter: "blur(48px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "42vmax",
          height: "42vmax",
          top: "25%",
          right: "8%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "aurora 16s linear infinite reverse",
          filter: "blur(60px)",
        }}
      />

      <Particles />

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full">
        <p
          className="font-mono text-sm mb-5"
          style={{ color: "#818cf8", letterSpacing: "0.12em" }}
        >
          Hi, I&apos;m
        </p>
        <h1
          className="text-7xl md:text-9xl font-bold leading-none mb-4"
          style={{ color: "#f1f5f9", letterSpacing: "-0.03em" }}
        >
          y
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">
          AIネイティブ開発者
        </h2>
        <p
          className="text-lg max-w-xl leading-relaxed mb-10"
          style={{ color: "#94a3b8" }}
        >
          20歳 / SESインフラエンジニアから自社開発エンジニアへ転向中 / AI活用で爆速開発 /
          TypeScript・Next.js・Claude API
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              color: "#fff",
              boxShadow: "0 0 32px rgba(99,102,241,0.45)",
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#e2e8f0",
            }}
          >
            Contact
          </a>
          <a
            href="https://github.com/axmly77"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#94a3b8",
            }}
          >
            <GithubIcon />
            GitHub
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #050510)" }}
      />
    </section>
  );
}
