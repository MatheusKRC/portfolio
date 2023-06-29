import Brasil from '../Assets/Brasil.png';
import EUA from '../Assets/EUA.png';

function NavBar() {
  return (
    <nav id="About" className="navBarPage">

      <div className="language">

        <button className="languageButton" type="button">
          <img className="languageImg" alt="Bandeira do Brasil" src={Brasil} />
        </button>

        <button className="languageButton" type="button">
          <img className="languageImg" alt="Bandeira dos Estados Unidos" src={EUA} />
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
