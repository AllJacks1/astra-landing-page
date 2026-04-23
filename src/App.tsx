import About from "./components/About";
import Ecosystem from "./components/Ecosystem";
import Founder from "./components/Founder";
import Hero from "./components/Hero";
import InsuranceCapability from "./components/InsuranceCapability";
import SystemsDriven from "./components/Methodology";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Services from "./components/Services";
import VisionExpansion from "./components/VisionExpansion";
import WhyAstra from "./components/WhyAstra";

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
      <WhyAstra/>
      <InsuranceCapability/>
      <VisionExpansion/>
    </>
  );
}

export default App;
