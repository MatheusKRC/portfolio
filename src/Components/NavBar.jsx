import React, { useState } from 'react';
import Brasil from '../Assets/Brasil.png';
import EUA from '../Assets/EUA.png';

function NavBar() {
  const [filterBrasil, setFilterBrasil] = useState('noFilter');
  const [filterEUA, setFilterEUA] = useState('noFilter');

  const handleClick = ({ target }) => {
    if (target.alt === 'Brasil') {
      setFilterBrasil('noFilter');
      setFilterEUA('Filter');
    } else {
      setFilterBrasil('Filter');
      setFilterEUA('noFilter');
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
          <span className="hover-underline-animation"> Sobre Mim </span>

        </a>
        <a className="navLink" href="#Skills">
          <span className="hover-underline-animation"> Habilidades </span>

        </a>
        <a className="navLink" href="#Projects">
          <span className="hover-underline-animation"> Projetos </span>

        </a>
        <a className="navLink" href="#Contact">
          <span className="hover-underline-animation"> Contato </span>

        </a>

      </div>

    </nav>
  );
}

export default NavBar;
