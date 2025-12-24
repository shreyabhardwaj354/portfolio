import Silk from "./Silk";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import "./index.css";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <Silk
          speed={5}
          scale={1}
          color="#3a383cff"
          noiseIntensity={1.5}
          rotation={0}
        />
        <div className="app-content">
          <Navbar />

          <section id="home">
            <Home />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
