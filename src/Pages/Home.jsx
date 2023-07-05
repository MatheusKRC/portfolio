import React, { useState } from 'react';
import About from '../Components/About';
import Contact from '../Components/Contact';
import NavBar from '../Components/NavBar';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';

function Home() {
  const [language, setLanguage] = useState('Portugues');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <div>
      <NavBar onClick={changeLanguage} />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Contact language={language} />

    </div>
  );
}

export default Home;
