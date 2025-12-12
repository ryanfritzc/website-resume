import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
