/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Brasil from '../Assets/Brasil.png';
import EUA from '../Assets/EUA.png';

function NavBar({ onClick }) {
  const [filterBrasil, setFilterBrasil] = useState('noFilter');
  const [filterEUA, setFilterEUA] = useState('Filter');

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

  return (
    <nav id="About" className="navBarPage">

      <div className="language">

        <button onClick={handleClick} className="languageButton" type="button">
          <img id={filterBrasil} className="languageImg" alt="Brasil" src={Brasil} />
        </button>

        <button onClick={handleClick} className="languageButton" type="button">
          <img id={filterEUA} className="languageImg" alt="EUA" src={EUA} />
        </button>

      </div>

      <div className="links">
        <a className="navLink" href="#About">
          {filterBrasil === 'noFilter' ? <span className="hover-underline-animation"> Sobre Mim </span>
            : <span className="hover-underline-animation"> About Me </span> }

        </a>
        <a className="navLink" href="#Skills">
          {filterBrasil === 'noFilter' ? <span className="hover-underline-animation"> Habilidades </span>
            : <span className="hover-underline-animation"> Skills </span>}

        </a>
        <a className="navLink" href="#Projects">
          {filterBrasil === 'noFilter' ? <span className="hover-underline-animation"> Projetos </span>
            : <span className="hover-underline-animation"> Projects </span>}

        </a>
        <a className="navLink" href="#Contact">
          {filterBrasil === 'noFilter' ? <span className="hover-underline-animation"> Contato </span>
            : <span className="hover-underline-animation"> Contact </span>}

        </a>

      </div>

    </nav>
  );
}

export default NavBar;
