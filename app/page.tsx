import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
