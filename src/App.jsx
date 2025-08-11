import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { About } from "./Components/About/About";
import { Skills } from "./Components/skills/Skills";
import { Experience } from "./Components/Experience/Experience";
import { Work } from "./Components/Work/Work";
import { Education } from "./Components/Education/Education";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { Blurblob } from "./Blurblob/Blurblob";
const App = () => {
  return (
    <>
      <div className="bg-[#050414]">
        <Blurblob position={{ top: "25%", left: "25%" }} />
        <Blurblob size={{ width: "15%", height: "20%%" }} />

        <div className="min-h-screen w-full bg-[#0a0a0a] relative">
          {/* Cosmic Aurora */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
        radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
        radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)
      `,
            }}
          />

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          {/* Your Components */}

          <div className="relative pt-20">
            <Navbar />
            <About />
            <Skills />
            <Experience />
            <Work />
            <Education />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
