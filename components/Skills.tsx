"use client";
import { useInView } from "@/hooks/useInView";

const skillGroups = [
  {
    category: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "AI / API",
    items: ["Claude API", "OpenAI API", "LINE Messaging API", "GitHub API"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "REST API", "Supabase", "PostgreSQL"],
  },
  {
    category: "Tools & Infra",
    items: ["Git", "Vercel", "PM2", "Playwright", "Linux (Ubuntu)", "Cloudflare"],
  },
];

function SkillGroup({ group, delay }: { group: (typeof skillGroups)[0]; delay: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`reveal${inView ? " in-view" : ""} ${delay}`}>
      <h3
        className="text-xs font-mono uppercase tracking-widest mb-4"
        style={{ color: "#818cf8" }}
      >
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 rounded-lg text-sm font-medium cursor-default transition-all duration-200 hover:scale-105 hover:border-[rgba(99,102,241,0.4)]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#cbd5e1",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className={`reveal${inView ? " in-view" : ""} mb-10`}>
          <h2 className="text-3xl font-bold" style={{ color: "#f1f5f9" }}>
            <span className="gradient-text font-mono mr-2 text-2xl">03.</span>Skills
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-10">
          {skillGroups.map((g, i) => (
            <SkillGroup key={g.category} group={g} delay={`delay-${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
