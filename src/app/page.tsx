
import Credentials from "./components/Credintial";
import ExperienceHorizontal from "./components/Exprience";
import Experience from "./components/Exprience";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="relative">
      <Hero/>
      <ExperienceHorizontal/>
      <Credentials />
      <Gallery />
    </main>
  );
}