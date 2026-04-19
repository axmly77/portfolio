"use client";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div ref={ref} className="max-w-3xl mx-auto">
        <h2
          className={`reveal${inView ? " in-view" : ""} text-3xl font-bold mb-10`}
          style={{ color: "#f1f5f9" }}
        >
          <span className="gradient-text font-mono mr-2 text-2xl">01.</span>About
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`reveal${inView ? " in-view" : ""} delay-1 space-y-4 leading-relaxed`}
            style={{ color: "#94a3b8" }}
          >
            <p>
              20歳のAIネイティブ開発者です。SESインフラエンジニアとして働きながら、
              自社開発エンジニアへの転向を目指しています。
            </p>
            <p>
              Claude API・OpenAI を活用した爆速プロトタイピングを得意とし、
              TypeScript / Next.js でフロントエンドからバックエンドまで一気通貫で開発します。
            </p>
            <p>
              個人開発では LINE Bot 自動化基盤・求人マッチング Bot・AI タスク管理ツールを運用中。
              実際に動くものを爆速で作ることにこだわっています。
            </p>
          </div>
          <div
            className={`reveal${inView ? " in-view" : ""} delay-2 space-y-3 text-sm`}
            style={{ lineHeight: "1.9" }}
          >
            {[
              ["場所", "埼玉県 / リモート可"],
              ["言語", "TypeScript, Python, JavaScript"],
              ["フレームワーク", "Next.js, React, Node.js"],
              ["AI", "Claude API, OpenAI API"],
              ["インフラ", "Vercel, VPS (Ubuntu), PM2"],
              ["GitHub", "github.com/axmly77"],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-3">
                <span className="font-mono w-28 shrink-0" style={{ color: "#818cf8" }}>
                  ▹ {label}
                </span>
                <span style={{ color: "#94a3b8" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
