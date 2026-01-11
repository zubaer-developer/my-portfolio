import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div data-theme="light">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <h1 className="text-3xl font-bold text-center py-10">My Portfolio</h1>
    </div>
  );
}

export default App;
