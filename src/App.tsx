import About from "./components/About";
import Ecosystem from "./components/Ecosystem";
import Founder from "./components/Founder";
import Hero from "./components/Hero";
import SystemsDriven from "./components/Methodology";
import Navbar from "./components/Navbar";
import People from "./components/People";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Ecosystem/>
      <Founder/>
      <SystemsDriven/>
      <People/>
    </>
  );
}

export default App;
