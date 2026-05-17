import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkCarousel from "./components/WorkCarousel";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WorkCarousel />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
