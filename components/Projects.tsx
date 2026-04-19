"use client";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    title: "CareerLens",
    description:
      "履歴書・職務経歴書をAIで解析し、求人との適合度スコアとフィードバックを提供するWebアプリ。Next.js + TypeScript + Supabase で構築。",
    tech: ["Next.js", "TypeScript", "Supabase", "OpenAI API"],
    github: "https://github.com/axmly77",
    demo: "https://shoruiai.vercel.app",
  },
  {
    title: "TaskAI",
    description:
      "自然言語でタスクを登録・管理できるAI連携タスク管理ツール。音声入力対応。Vercel Edge Functions を活用したサーバーレス構成。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    github: "https://github.com/axmly77",
    demo: "https://taskai-phi.vercel.app",
  },
  {
    title: "LINE Bot 自動化基盤",
    description:
      "VPS上でPM2管理されるLINE通知Botシステム。朝の天気・電車情報、VALORANT ストア通知、求人マッチング、GitHub活動レポートなどを自動配信。",
    tech: ["Node.js", "Python", "Playwright", "Cloudflare Tunnel", "Supabase"],
    github: "https://github.com/axmly77",
    demo: null,
  },
  {
    title: "求人マッチングBot",
    description:
      "Green・Wantedly のAPIから求人を取得し、スキル・給与・リモート条件をルールベースでスコアリング。スコア70以上の案件のみLINEに通知し、「応募」コマンドで応募レターを自動生成する。",
    tech: ["Python", "LINE Messaging API", "Node.js", "Cron"],
    github: "https://github.com/axmly77",
    demo: null,
  },
];

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ProjectCard({ p, delay }: { p: (typeof projects)[0]; delay: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="h-full">
      <div
        className={`card-glow reveal${inView ? " in-view" : ""} ${delay} h-full flex flex-col rounded-2xl p-6`}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold" style={{ color: "#f1f5f9" }}>
            {p.title}
          </h3>
          <div className="flex gap-3" style={{ color: "#4b5563" }}>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#818cf8] transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#818cf8] transition-colors"
                aria-label="Demo"
              >
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#94a3b8" }}>
          {p.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-lg"
              style={{
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "#818cf8",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      className="py-24 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`reveal${inView ? " in-view" : ""} mb-10`}>
          <h2 className="text-3xl font-bold" style={{ color: "#f1f5f9" }}>
            <span className="gradient-text font-mono mr-2 text-2xl">02.</span>Projects
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} delay={`delay-${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
