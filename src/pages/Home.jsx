import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Educaion";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
  return (
    <div data-theme="light">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
      <h1 className="text-3xl font-bold text-center py-10">My Portfolio</h1>
    </div>
  );
}

export default Home;
