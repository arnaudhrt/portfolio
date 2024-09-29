import Header from "@/components/layout/Header";
import About from "@/components/about/About";
import Experience from "@/components/about/Experience";
import TechStack from "@/components/about/TechStack";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/about/Contact";
import Footer from "@/components/layout/Footer";
import LayerBlur from "@/components/layout/LayerBlur";

export default function Home() {
  return (
    <div className="width-[90%] max-w-screen-md mx-auto">
      <LayerBlur />
      <Header />
      <div className="space-y-12">
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
