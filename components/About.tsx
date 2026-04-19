export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#21262d]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-10">
          <span className="text-[#58a6ff] font-mono mr-2">01.</span>About
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-[#8b949e] leading-relaxed">
          <div className="space-y-4">
            <p>
              埼玉県在住のWebエンジニアです。TypeScript / React / Next.js を中心にフロントエンドを、
              Python / Node.js でバックエンドや自動化ツールを開発しています。
            </p>
            <p>
              個人開発では LINE Bot・Playwright による自動化基盤の構築や、
              AI を活用したWebアプリのプロトタイプ制作に取り組んでいます。
            </p>
            <p>
              実務チームに入りながら、ユーザーに価値を届けるプロダクト開発に
              貢献できるエンジニアを目指しています。
            </p>
          </div>
          <div className="space-y-3 text-sm">
            {[
              ["場所", "埼玉県 / リモート可"],
              ["言語", "TypeScript, Python, JavaScript"],
              ["フレームワーク", "Next.js, React, Node.js"],
              ["インフラ", "Vercel, VPS (Ubuntu), PM2"],
              ["ツール", "Playwright, Supabase, LINE API"],
              ["GitHub", "github.com/axmly77"],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-3">
                <span className="text-[#58a6ff] font-mono w-28 shrink-0">▹ {label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
