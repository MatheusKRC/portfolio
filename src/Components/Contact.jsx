/* eslint-disable react/prop-types */
import Contato from '../Assets/Contato.png';
import ContactName from '../AssetsENG/Contact.png';
import SocialMedia from './SocialMedia';

function Contact({ language }) {
  return (
    <div id="Contact" className="contactPage">

      <div className="contactName">
        {language === 'Portugues' ? <img alt="Contato" src={Contato} />
          : <img alt="Contato" src={ContactName} />}

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
        {language === 'Portugues' ? <h3 className="references">Icones:</h3>
          : <h3 className="references">Icons:</h3>}
        <a className="flaticon" href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Freepik - Flaticon</a>

      </footer>

    </div>
  );
}

export default Contact;
