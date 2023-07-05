import Contato from '../Assets/Contato.png';
import SocialMedia from './SocialMedia';

function Contact() {
  return (
    <div id="Contact" className="contactPage">

      <div className="contactName">
        <img alt="Contato" src={Contato} />

      </div>

      <div className="footer">
        {' '}
        <p className="textContactMe">
          The Last of Us is a television series based on the
          popular video game of the same name. It follows the
          story of Joel and Ellie, two survivors of a
          post-apocalyptic world ravaged by a deadly fungus
          that turns people into zombies, as they navigate
          through dangerous terrain and encounter other survivors.
        </p>

        <SocialMedia github="github" />
      </div>

      <footer className="references">
        {' '}
        <h3 className="references">Icones:</h3>
        <a className="flaticon" href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Freepik - Flaticon</a>

      </footer>

    </div>
  );
}

export default Contact;
