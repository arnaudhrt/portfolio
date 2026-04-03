import Footer from "@/components/Footer";
import LayerBlur from "@/components/LayerBlur";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useState } from "react";
import profilePic from "@/assets/images/profile-pic.png";
import { Separator } from "@/components/ui/separator";
import NavBar from "@/components/NavBar";
import About from "@/components/About";

const tabs = [
  {
    name: "About",
    component: <About />,
  },
  {
    name: "Projects",
    component: <Projects />,
  },
  {
    name: "Contact",
    component: <Contact />,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");
  const activeTabComponent = tabs.find((tab) => tab.name === activeTab)?.component;

  return (
    <div className="w-[90%] max-w-3xl mx-auto ">
      <div className="min-h-[calc(100vh-45px)]">
        <LayerBlur />
        <div className="pt-12 pb-5">
          <div className="flex gap-4 justify-between items-center mb-10">
            <div>
              <div className="relative">
                <pre className="font-mono text-xs leading-none">
                  {`/**
 *     █████╗ ██████╗ ███╗   ██╗ █████╗ ██╗   ██╗██████╗
 *    ██╔══██╗██╔══██╗████╗  ██║██╔══██╗██║   ██║██╔══██╗
 *    ███████║██████╔╝██╔██╗ ██║███████║██║   ██║██║  ██║
 *    ██╔══██║██╔══██╗██║╚██╗██║██╔══██║██║   ██║██║  ██║
 *    ██║  ██║██║  ██║██║ ╚████║██║  ██║╚██████╔╝██████╔╝
 *    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝
 *
 */`}
                </pre>
                <span className="absolute bottom-0 left-12 text-base text-muted-foreground">Software Developer</span>
              </div>
            </div>
            <img
              className="rounded-full size-28 grayscale border-2 border-muted-foreground z-[-1]"
              src={profilePic}
              alt="arnaudhrt software developer"
              width={180}
              height={190}
            />
          </div>
          <NavBar setActiveTab={setActiveTab} />
          <Separator />
        </div>
        {activeTabComponent}
      </div>
      <Footer />
    </div>
  );
}
