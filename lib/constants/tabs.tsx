import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";

export const tabs = [
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
