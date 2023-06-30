import Art from '../Assets/Art.png';
import Habilidades from '../Assets/Habilidades.png';
// import Icons from './Icons';
import IconsMap from './IconsMap';
import SoftCards from './SoftCards';

function Skills() {
  return (
    <div id="Skills" className="skillsPage">
      <section className="artSection">

        <div className="artDiv">
          <img className="art" alt="Uma arte personalizada" src={Art} />
        </div>

        <img className="skillName" alt="Habilidades" src={Habilidades} />

      </section>

      <IconsMap />
      <SoftCards />
    </div>
  );
}

export default Skills;
