import PixelSnow from "./PixelSnow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import "./index.css";
import Footer from "./pages/Fotter";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <PixelSnow
            color="#000000ff"
            flakeSize={0.01}
            minFlakeSize={1.25}
            pixelResolution={200}
            speed={1.25}
            density={0.3}
            direction={125}
            brightness={1}
          />
        </div>
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
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
