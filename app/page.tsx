import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LayerBlur from "@/components/global/LayerBlur";

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
