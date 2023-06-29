import Projetos from '../Assets/Projetos.png';
import arrow from '../Assets/arrow.png';
import Baratiê from '../Images/Baratiê.png';

function Projects() {
  return (
    <div id="Projects" className="projectsPage">
      <img alt="Projetos" src={Projetos} />
      <section className="projects">
        <img width="100px" alt="seta" src={arrow} />
        <img width="1000px" alt="Baratiê" src={Baratiê} />
        <img width="100px" alt="seta" src={arrow} />

      </section>

    </div>
  );
}

export default Projects;
