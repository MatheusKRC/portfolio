import React, { useState } from 'react';
import About from '../Components/About';
import Contact from '../Components/Contact';
import NavBar from '../Components/NavBar';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';

function Home() {
  const [language, setLanguage] = useState('Portugues');
  const [colorMode, setColorMode] = useState('');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const changeColor = (color) => {
    setColorMode(color);
  };
  return (
    <div>
      <NavBar onClick={changeLanguage} changeColor={changeColor} colorMode={colorMode} />
      <About language={language} colorMode={colorMode} />
      <Skills language={language} colorMode={colorMode} />
      <Projects language={language} colorMode={colorMode} />
      <Contact language={language} colorMode={colorMode} />

    </div>
  );
}

export default Home;
