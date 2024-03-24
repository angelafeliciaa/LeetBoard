import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <ScrollToTop />
    </>
  );
}

export default App;
