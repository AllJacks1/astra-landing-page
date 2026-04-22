import About from "./components/About";
import Ecosystem from "./components/Ecosystem";
import Founder from "./components/Founder";
import Hero from "./components/Hero";
import SystemsDriven from "./components/Methodology";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Ecosystem/>
      <Founder/>
      <SystemsDriven/>
      <Services/>
      <People/>
    </>
  );
}

export default App;
