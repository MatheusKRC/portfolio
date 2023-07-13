/* eslint-disable react/prop-types */
import Name from '../Assets/Name.png';
import NameW from '../Assets/White/NameW.png';
import DesenvolvedorBR from '../Assets/DesenvolvedorBR.png';
import RoleW from '../Assets/White/RoleW.png';
import WebDeveloper from '../AssetsENG/WebDeveloper.png';
import RoleB from '../AssetsENG/RoleB.png';
import tattoo from '../Assets/tattoo.png';
import tattooW from '../Assets/White/TattooW.png';
import Me from '../Assets/Me.webp';
import SocialMedia from './SocialMedia';
import { changeColor } from '../Utils/AllProjects';

function About({ language, colorMode }) {
  return (
    <main id="About" className={`aboutPage ${colorMode}`}>
      <section className={`aboutMe ${colorMode}`}>

        <img className="myName" alt="Matheus Santos Leão" src={changeColor(colorMode, Name, NameW)} />

        <br />

        {language === 'Portugues' ? <img className="myRole" alt="Desenvolvedor Web" src={changeColor(colorMode, DesenvolvedorBR, RoleW)} />
          : <img className="myRoleENG" alt="Desenvolvedor Web" src={changeColor(colorMode, WebDeveloper, RoleB)} />}

        <p className={`textAboutMe ${colorMode}`}>
          Olá, Meu nome é Matheus Santos Leão e sou
          do Piauí, Brasil.
          <br />
          Sou um Desenvolvedor FullStack formado em Desenvolvimento Web na Trybe.
          <br />
          Tenho experiência trabalhando com FrontEnd e Backend
          aplicados em projetos que foram desenvolvidos ao longo
          do curso e projetos pessoais.
          <br />
          No momento estou iniciando minha carreira profissional
          como Freelancer, mas estou aberto a propostas de emprego, gosto de trabalhar
          principalmente no BackEnd, mas também me dou muito bem com FrontEnd
          e estou disposto a aprender novas tecnológias caso necessário,
          sou apaixonado por tecnologia, quase não vejo as horas passarem
          enquanto estou codando.
          <br />
          Caso precise de mim, só entrar em contato pelas plataformas de
          Freelancer abaixo, pelo meu Linkedin ou E-mail no rodapé.

        </p>

        <SocialMedia github={`github${colorMode}`} />

        <section className="tattoo">

          <img className="tattooImg" alt="Tatuagem da Ellie de The Las Of Us" src={changeColor(colorMode, tattoo, tattooW)} />

        </section>

      </section>

      <section className={`myPhotoDiv${colorMode}`}>

        <img className="myPhoto" alt="Uma foto minha" src={Me} />

      </section>
    </main>
  );
}

export default About;
