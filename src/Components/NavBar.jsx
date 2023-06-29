import Brasil from '../Assets/Brasil.png';
import EUA from '../Assets/EUA.png';

function NavBar() {
  return (
    <nav className="navBar">

      <div className="language">

        <button type="button">
          <img alt="Bandeira do Brasil" src={Brasil} />
        </button>

        <button type="button">
          <img alt="Bandeira dos Estados Unidos" src={EUA} />
        </button>

      </div>

      <a href="#about">Sobre Mim</a>
      <a href="#skills">Habilidades</a>
      <a href="#projects">Projetos</a>
      <a href="#contact">Contato</a>
    </nav>
  );
}

export default NavBar;
