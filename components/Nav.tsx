"use client";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1117]/90 backdrop-blur border-b border-[#21262d]">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-[#58a6ff] font-semibold tracking-tight">
          SA
        </a>
        <ul className="hidden md:flex gap-6 text-sm text-[#8b949e]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-[#e6edf3] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-[#8b949e] hover:text-[#e6edf3]"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <>
                <path d="M3 6h14M3 10h14M3 14h14" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#21262d] bg-[#0d1117]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-[#8b949e] hover:text-[#e6edf3] hover:bg-[#161b22] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
