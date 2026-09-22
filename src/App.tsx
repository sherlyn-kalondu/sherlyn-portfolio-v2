import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import CreativeToolkit from "./components/sections/CreativeToolkit";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CreativeToolkit />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
