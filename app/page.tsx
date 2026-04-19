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
      <footer className="text-center py-6 text-[#8b949e] text-sm border-t border-[#21262d]">
        © 2025 y. Built with Next.js &amp; Tailwind CSS.
      </footer>
    </>
  );
}
