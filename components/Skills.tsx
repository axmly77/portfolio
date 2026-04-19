const skillGroups = [
  {
    category: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "REST API", "Supabase", "PostgreSQL"],
  },
  {
    category: "Tools & Infra",
    items: ["Git", "Vercel", "PM2", "Playwright", "Linux (Ubuntu)"],
  },
  {
    category: "API / Services",
    items: ["LINE Messaging API", "OpenAI API", "GitHub API", "Cloudflare"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-[#21262d]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-10">
          <span className="text-[#58a6ff] font-mono mr-2">03.</span>Skills
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {skillGroups.map((g) => (
            <div key={g.category}>
              <h3 className="text-sm font-mono text-[#58a6ff] uppercase tracking-widest mb-4">
                {g.category}
              </h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[#8b949e] text-sm">
                    <span className="text-[#58a6ff]">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
