import Intro from "@/components/Intro";
import About from "@/components/About";
import NavBar from "@/components/NavBar";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="width-[90%] max-w-screen-md mx-auto space-y-12">
      <Intro />
      <NavBar />
      <About />
      <TechStack />
      <Experience />
      <Projects />
    </div>
  );
}
