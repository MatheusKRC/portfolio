import Name from '../Assets/Name.png';
import DesenvolvedorBR from '../Assets/DesenvolvedorBR.png';

import tattoo from '../Assets/tattoo.png';
import Me from '../Assets/Me.webp';
import SocialMedia from './SocialMedia';

function About() {
  return (
    <main id="About" className="aboutPage">
      <section className="aboutMe">

        <img className="myName" alt="Matheus Santos Leão" src={Name} />

        <br />

        <img className="myRole" alt="Desenvolvedor Web" src={DesenvolvedorBR} />

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
