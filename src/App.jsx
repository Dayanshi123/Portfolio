import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from './components/Experience/Experience'
import Projects from "./components/Project/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {

  return (

    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects/>
      <Contact />
    </>

  );
}

export default App;
