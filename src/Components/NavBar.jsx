/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Brasil from '../Assets/Brasil.png';
import EUA from '../Assets/EUA.png';
import Sun from '../Icons/sun.png';
import SunW from '../Icons/sunW.png';
import Moon from '../Icons/moon.png';
import MoonW from '../Icons/moonW.png';
import B from '../Icons/B.png';
import W from '../Icons/W.png';

function NavBar({ onClick, changeColor, colorMode }) {
  const [filterBrasil, setFilterBrasil] = useState('noFilter');
  const [filterEUA, setFilterEUA] = useState('Filter');
  const [moon, setMoon] = useState('view');
  const [sun, setSun] = useState('view');
  const [bw, setBw] = useState('hidden');

  const handleClick = ({ target }) => {
    if (target.alt === 'Brasil') {
      setFilterBrasil('noFilter');
      setFilterEUA('Filter');
      onClick('Portugues');
    } else {
      setFilterBrasil('Filter');
      setFilterEUA('noFilter');
      onClick('Ingles');
    }
  };

  const changeColorIcon = ({ target }) => {
    if (target.alt === 'sun') {
      setSun('hidden');
      setBw('view');
      setMoon('view');
      changeColor('Sun');
    }
    if (target.alt === 'moon') {
      setMoon('hidden');
      setBw('view');
      setSun('view');
      changeColor('Moon');
    }
    if (target.alt === 'bw') {
      setBw('hidden');
      setMoon('view');
      setSun('view');
      changeColor('');
    }
  };

  return (
    <nav id="About" className={`navBarPage ${colorMode}`}>

      <div className={`language ${colorMode}`}>

        <button onClick={handleClick} className={`languageButton ${colorMode}`} type="button">
          <img id={filterBrasil} className="languageImg" alt="Brasil" src={Brasil} />
        </button>

        <button onClick={handleClick} className={`languageButton ${colorMode}`} type="button">
          <img id={filterEUA} className="languageImg" alt="EUA" src={EUA} />
        </button>

      </div>

      <div className="links">
        <a className={`navLink ${colorMode}`} href="#About">
          {filterBrasil === 'noFilter' ? <span className={`hover-underline-animation${colorMode}`}> Sobre Mim </span>
            : <span className={`hover-underline-animation${colorMode}`}> About Me </span> }

        </a>
        <a className={`navLink ${colorMode}`} href="#Skills">
          {filterBrasil === 'noFilter' ? <span className={`hover-underline-animation${colorMode}`}> Habilidades </span>
            : <span className={`hover-underline-animation${colorMode}`}> Skills </span>}

        </a>
        <a className={`navLink ${colorMode}`} href="#Projects">
          {filterBrasil === 'noFilter' ? <span className={`hover-underline-animation${colorMode}`}> Projetos </span>
            : <span className={`hover-underline-animation${colorMode}`}> Projects </span>}

        </a>
        <a className={`navLink ${colorMode}`} href="#Contact">
          {filterBrasil === 'noFilter' ? <span className={`hover-underline-animation${colorMode}`}> Contato </span>
            : <span className={`hover-underline-animation${colorMode}`}> Contact </span>}

        </a>

      </div>

      <div className="colorMode">
        <button onClick={changeColorIcon} className={`display ${sun}`} type="button">
          <img className="displayIcon" alt="sun" src={colorMode === 'Sun' || colorMode === '' ? Sun : SunW} />

        </button>
        <button onClick={changeColorIcon} className={`display ${moon}`} type="button">
          <img className="displayIcon" alt="moon" src={colorMode === 'Sun' || colorMode === '' ? Moon : MoonW} />

        </button>
        <button onClick={changeColorIcon} className={`display ${bw}`} type="button">
          <img className="displayIcon" alt="bw" src={colorMode === 'Sun' || colorMode === '' ? B : W} />

        </button>
      </div>

    </nav>
  );
}

export default NavBar;
