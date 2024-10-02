"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LayerBlur from "@/components/layout/LayerBlur";
import { useUseStore } from "@/lib/stores/useStore";
import { tabs } from "@/lib/constants/tabs";

export default function Home() {
  const { activeTab } = useUseStore();
  const activeTabComponent = tabs.find((tab) => tab.name === activeTab)?.component;
  return (
    <div className="width-[90%] max-w-screen-md mx-auto ">
      <div className="min-h-[calc(100vh-45px)]">
        <LayerBlur />
        <Header />
        {activeTabComponent}
      </div>
      <Footer />
    </div>
  );
}
