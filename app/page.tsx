import Projects from "@/components/project-section/Projects";
import Cursor from "../components/cursor/Cursor";
import Hero from "../components/hero copy/Hero";
import ProjectSection from "@/components/project-section/ProjectSection";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen">
        <Cursor />
        <Hero />
      </section>
      <ProjectSection />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
