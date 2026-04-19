"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,5,16,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-sm gradient-text">
          y.dev
        </a>
        <ul className="hidden md:flex gap-7 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors duration-200 hover:text-[#818cf8]"
                style={{ color: "#94a3b8" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden transition-colors hover:text-[#818cf8]"
          style={{ color: "#94a3b8" }}
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div
          style={{
            background: "rgba(5,5,16,0.96)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm transition-colors hover:text-[#818cf8] hover:bg-white/[0.03]"
              style={{ color: "#94a3b8" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
