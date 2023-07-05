/* eslint-disable react/prop-types */
import { useState } from 'react';
import Projetos from '../Assets/Projetos.png';
import Project from '../AssetsENG/Projects.png';
import arrow from '../Assets/arrow.png';
import Baratiê from '../Images/Baratiê.png';

function Projects({ language }) {
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
        {language === 'Portugues' ? <img className="projectsName" alt="Projetos" src={Projetos} />
          : <img className="projectsName" alt="Projetos" src={Project} />}
      </div>

      <div className="projectsDiv">
        <button className="arrowButton" type="button">
          <img className="leftArrow" alt="seta" src={arrow} />

        </button>

        <section onMouseEnter={blur} onMouseLeave={blur} className="projects">

          <img className={filter} alt="Baratiê" src={Baratiê} />

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
        <button className="arrowButton" type="button">
          <img className="arrow" alt="seta" src={arrow} />

        </button>

      </div>

    </div>
  );
}

export default Projects;
