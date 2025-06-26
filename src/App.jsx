import React, { Component } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./Cocktails";
import About from "./components/About";
import Art from "./components/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
};

export default App;
