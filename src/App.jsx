import "./App.scss";
import React from "react";

import Bar from "./components/bar/Bar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Bar />
      <div className="sections">
        <Intro />
        <Works />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
