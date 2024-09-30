"use client";
import Header from "@/components/layout/Header";
import About from "@/components/about/About";
import Footer from "@/components/layout/Footer";
import LayerBlur from "@/components/layout/LayerBlur";
import Projects from "@/components/projects/Projects";
import { useUseStore } from "@/lib/stores/useStore";

export default function Home() {
  const { activeTab } = useUseStore();
  const tabs = [
    {
      name: "About",
      component: <About />,
    },
    {
      name: "Projects",
      component: <Projects />,
    },
  ];
  const activeTabComponent = tabs.find((tab) => tab.name === activeTab)?.component;
  return (
    <div className="width-[90%] max-w-screen-md mx-auto">
      <LayerBlur />
      <Header />
      {activeTabComponent}
      <Footer />
    </div>
  );
}
