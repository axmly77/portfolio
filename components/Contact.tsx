"use client";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div ref={ref} className="max-w-xl mx-auto text-center">
        <h2
          className={`reveal${inView ? " in-view" : ""} text-3xl font-bold mb-4`}
          style={{ color: "#f1f5f9" }}
        >
          <span className="gradient-text font-mono mr-2 text-2xl">04.</span>Contact
        </h2>
        <p
          className={`reveal${inView ? " in-view" : ""} delay-1 leading-relaxed mb-10`}
          style={{ color: "#94a3b8" }}
        >
          お仕事・インターン・コラボの相談など、お気軽にご連絡ください。
          GitHub のリポジトリを見てからでも大歓迎です。
        </p>
        <div
          className={`reveal${inView ? " in-view" : ""} delay-2 flex flex-col sm:flex-row gap-4 justify-center`}
        >
          <a
            href="mailto:axmly77@example.com"
            className="px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              color: "#fff",
              boxShadow: "0 0 28px rgba(99,102,241,0.35)",
            }}
          >
            メールを送る
          </a>
          <a
            href="https://github.com/axmly77"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
