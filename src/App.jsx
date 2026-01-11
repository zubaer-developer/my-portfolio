import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div data-theme="corporate">
      <Navbar></Navbar>
      <Hero></Hero>
      <h1 className="text-3xl font-bold text-center py-10">My Portfolio</h1>
    </div>
  );
}

export default App;
