import Contato from '../Assets/Contato.png';
import Linkedin from '../Assets/Linkedin.png';
import GitHub from '../Assets/GitHub.png';
import UpWork from '../Assets/UpWork.png';
import Workana from '../Assets/Workana.png';

function Contact() {
  return (
    <div className="contacPage">
      <img alt="Contato" src={Contato} />

      <p className="textContactMe">
        The Last of Us is a television series based on the
        popular video game of the same name. It follows the
        story of Joel and Ellie, two survivors of a
        post-apocalyptic world ravaged by a deadly fungus
        that turns people into zombies, as they navigate
        through dangerous terrain and encounter other survivors.
      </p>

      <section className="socialMedias">
        <img width="50px" alt="Linkedin Icon" src={Linkedin} />
        <img width="50px" alt="GitHub Icon" src={GitHub} />
        <img width="50px" alt="UpWork Icon" src={UpWork} />
        <img width="50px" alt="Workana Icon" src={Workana} />
      </section>
    </div>
  );
}

export default Contact;
