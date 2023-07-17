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
          Este é um breve resumo sobre mim, minhas habilidades e projetos,
          ainda estou começando a minha carreira, mas garanto que posso
          ser de grande ajuda no desenvolvimento de projetos, de qualquer forma
          estou aqui para aprender cada vez mais e mais e estou disposto a enfrentar
          qualquer desafio, estou aqui exatamente para isso, como Desenvolvedor meu trabalho é
          justamente resolver problemas.
          Caso precise de mim, meu e-mail é:
          {' '}
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=VpCqJXKbXbcPGrDLkDWpjmSLRTXWNFghWBVbbnwWWdwmmNJJzxnRdpjtXhtDttZxNtKGBGv">kyracraft0@gmail.com</a>
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
