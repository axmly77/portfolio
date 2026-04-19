import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer
        className="text-center py-6 text-sm"
        style={{
          color: "#334155",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        © 2025 y. Built with Next.js &amp; Tailwind CSS.
      </footer>
    </>
  );
}
