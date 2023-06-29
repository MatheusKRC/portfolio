import Art from '../Assets/Art.png';
import Habilidades from '../Assets/Habilidades.png';
import Icons from './Icons';
import SoftCards from './SoftCards';

function Skills() {
  return (
    <div className="skillsPage">
      <section className="arte">
        <img alt="Uma arte personalizada" src={Art} />
        <img alt="Habilidades" src={Habilidades} />

      </section>

      <Icons />
      <SoftCards />
    </div>
  );
}

export default Skills;
