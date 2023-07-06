/* eslint-disable react/prop-types */
import Art from '../Assets/Art.png';
import ArtB from '../Assets/ArtB.png';
import ArtENG from '../AssetsENG/ArtENG.png';
import ArtEB from '../AssetsENG/ArtEB.png';
import IconsMap from './IconsMap';
import SoftCards from './SoftCards';

function Skills({ language, colorMode }) {
  return (
    <div id="Skills" className={`skillsPage ${colorMode}`}>
      <section className="artSection">

        <div className={`artDiv${colorMode}`}>
          {language === 'Portugues' ? <img className="art" alt="Uma arte personalizada" src={colorMode === 'Moon' || colorMode === '' ? Art : ArtB} />
            : <img className="art" alt="Uma arte personalizada" src={colorMode === 'Moon' || colorMode === '' ? ArtENG : ArtEB} /> }
        </div>

      </section>

      <IconsMap colorMode={colorMode} />
      <SoftCards language={language} colorMode={colorMode} />
    </div>
  );
}

export default Skills;
