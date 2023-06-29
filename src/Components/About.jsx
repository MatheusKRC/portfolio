import Name from '../Assets/Name.png';
import DesenvolvedorBR from '../Assets/DesenvolvedorBR.png';
import Linkedin from '../Assets/Linkedin.png';
import GitHub from '../Assets/GitHub.png';
import UpWork from '../Assets/UpWork.png';
import Workana from '../Assets/Workana.png';
import Tattoo from '../Assets/Tattoo.png';
import Me from '../Assets/Me.webp';

function About() {
  return (
    <main className="aboutPage">
      <section className="aboutMe">

        <img alt="Matheus Santos Leão" src={Name} />

        <img alt="Desenvolvedor Web" src={DesenvolvedorBR} />

        <p className="textAboutMe">
          The Last of Us is a television series based on the
          popular video game of the same name. It follows the
          story of Joel and Ellie, two survivors of a
          post-apocalyptic world ravaged by a deadly fungus
          that turns people into zombies, as they navigate
          through dangerous terrain and encounter other survivors.
        </p>

      </section>

      <section className="socialMedias">
        <img width="50px" alt="Linkedin Icon" src={Linkedin} />
        <img width="50px" alt="GitHub Icon" src={GitHub} />
        <img width="50px" alt="UpWork Icon" src={UpWork} />
        <img width="50px" alt="Workana Icon" src={Workana} />
      </section>

      <section className="tatto">

        <img alt="Tatuagem da Ellie de The Las Of Us" src={Tattoo} />

      </section>

      <section className="myPhoto">

        <img width="300px" alt="Uma foto minha" src={Me} />

      </section>
    </main>
  );
}

export default About;
