/* eslint-disable react/prop-types */
import Name from '../Assets/Name.png';
import DesenvolvedorBR from '../Assets/DesenvolvedorBR.png';
import WebDeveloper from '../AssetsENG/WebDeveloper.png';
import tattoo from '../Assets/tattoo.png';
import Me from '../Assets/Me.webp';
import SocialMedia from './SocialMedia';

function About({ language }) {
  return (
    <main id="About" className="aboutPage">
      <section className="aboutMe">

        <img className="myName" alt="Matheus Santos Leão" src={Name} />

        <br />

        {language === 'Portugues' ? <img className="myRole" alt="Desenvolvedor Web" src={DesenvolvedorBR} />
          : <img className="myRoleENG" alt="Desenvolvedor Web" src={WebDeveloper} />}

        <p className="textAboutMe">
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

        <SocialMedia github="socialIcons" />

        <section className="tattoo">

          <img className="tattooImg" alt="Tatuagem da Ellie de The Las Of Us" src={tattoo} />

        </section>

      </section>

      <section className="myPhotoDiv">

        <img className="myPhoto" alt="Uma foto minha" src={Me} />

      </section>
    </main>
  );
}

export default About;
