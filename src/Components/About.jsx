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
          The Last of Us is a television series based on the
          popular video game of the same name. It follows the
          story of Joel and Ellie, two survivors of a
          post-apocalyptic world ravaged by a deadly fungus
          that turns people into zombies, as they navigate
          through dangerous terrain and encounter other survivors.
          The Last of Us is a television series based on the
          popular video game of the same name. It follows the
          story of Joel and Ellie, two survivors of a
          post-apocalyptic world ravaged by a deadly fungus
          that turns people into zombies, as they navigate
          through dangerous terrain and encounter other survivors.
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
