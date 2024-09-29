import Header from "@/components/Header";
import About from "@/components/About";
import NavBar from "@/components/global/NavBar";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="width-[90%] max-w-screen-md mx-auto">
      <Header />
      <div className="space-y-12">
        <NavBar />
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
