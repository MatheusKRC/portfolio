/* eslint-disable react/prop-types */
import Contato from '../Assets/Contato.png';
import ContatoB from '../Assets/ContatoB.png';
import ContactName from '../AssetsENG/Contact.png';
import ContactB from '../AssetsENG/ContactB.png';
import SocialMedia from './SocialMedia';

function Contact({ language, colorMode }) {
  return (
    <div id="Contact" className={`contactPage ${colorMode}`}>

      <div className="contactName">
        {language === 'Portugues' ? <img alt="Contato" src={colorMode === 'Moon' || colorMode === '' ? Contato : ContatoB} />
          : <img alt="Contato" src={colorMode === 'Moon' || colorMode === '' ? ContactName : ContactB} />}

      </div>

      <div className="footer">
        {' '}
        <p className={`textContactMe ${colorMode}`}>
          The Last of Us is a television series based on the
          popular video game of the same name. It follows the
          story of Joel and Ellie, two survivors of a
          post-apocalyptic world ravaged by a deadly fungus
          that turns people into zombies, as they navigate
          through dangerous terrain and encounter other survivors.
        </p>

        <SocialMedia github="githubMoon" />
      </div>

      <footer className={`references ${colorMode}`}>
        {' '}
        {language === 'Portugues' ? <h3 className={`references ${colorMode}`}>Icones:</h3>
          : <h3 className="references">Icons:</h3>}
        <a className={`flaticon ${colorMode}`} href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Freepik - Flaticon</a>

      </footer>

    </div>
  );
}

export default Contact;
