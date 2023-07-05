/* eslint-disable react/prop-types */
import Art from '../Assets/Art.png';
import ArtENG from '../AssetsENG/ArtENG.png';
import IconsMap from './IconsMap';
import SoftCards from './SoftCards';

function Skills({ language }) {
  return (
    <div id="Skills" className="skillsPage">
      <section className="artSection">

        <div className="artDiv">
          {language === 'Portugues' ? <img className="art" alt="Uma arte personalizada" src={Art} />
            : <img className="art" alt="Uma arte personalizada" src={ArtENG} /> }
        </div>

      </section>

      <IconsMap />
      <SoftCards language={language} />
    </div>
  );
}

export default Skills;
