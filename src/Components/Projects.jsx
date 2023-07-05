import { useState } from 'react';
import Projetos from '../Assets/Projetos.png';
import arrow from '../Assets/arrow.png';
import Baratiê from '../Images/Baratiê.png';

function Projects() {
  const [filter, setFilter] = useState('projectImage');
  const [infoFilter, setInfoFilter] = useState('projectInfos');

  const blur = () => {
    if (filter === 'projectImage' || infoFilter === 'projectInfo') {
      setFilter('projectBlur');
      setInfoFilter('infoVisible');
    } else {
      setFilter('projectImage');
      setInfoFilter('projectInfos');
    }
  };
  return (
    <div id="Projects" className="projectsPage">

      <div className="projectsName">
        <img className="projectsName" alt="Projetos" src={Projetos} />
      </div>

      <section onMouseEnter={blur} onMouseLeave={blur} className="projects">
        <img className="leftArrow" alt="seta" src={arrow} />
        <img className={filter} alt="Baratiê" src={Baratiê} />
        <img className="arrow" alt="seta" src={arrow} />

        <div className={infoFilter}>

          <h1 className="projectTitle">Baratiê Recipes App</h1>
          <h3 className="projectDesc">
            Um Aplicativo Mobile com diferentes
            receitas de comida e bebidas
          </h3>

          <h4 className="projectTasks">React.js</h4>
          <h4 className="projectTasks">JavaScript</h4>
          <h4 className="projectTasks">UI & UX</h4>
          <h4 className="projectTasks">CSS</h4>

          <br />

          <button type="button" className="projectButtons">Repositorio</button>
          <button type="button" className="projectButtons">Veja o Site</button>
        </div>
      </section>

    </div>
  );
}

export default Projects;
