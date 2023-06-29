import React from 'react';
import About from '../Components/About';
import NavBar from '../Components/NavBar';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';

function Home() {
  return (
    <div>
      <NavBar />
      <About />
      <Skills />
      <Projects />

      <a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Freepik - Flaticon</a>
    </div>
  );
}

export default Home;
