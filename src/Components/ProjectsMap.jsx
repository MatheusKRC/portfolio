/* eslint-disable react/prop-types */
import { useState } from 'react';
import arrow from '../Assets/arrow.png';
import ArrowW from '../Assets/White/ArrowW.png';
import Baratiê from '../Images/Baratiê.png';
import TFC from '../Images/TFC.png';
import TryBeer from '../Images/TryBeer.png';
import { changeColor, projectsBR, projectsENG } from '../Utils/AllProjects';

function ProjectsMap({ language, colorMode }) {
  const [filter, setFilter] = useState('projectImage');
  const [infoFilter, setInfoFilter] = useState('projectInfos');
  const projects = [Baratiê, TFC, TryBeer];
  const [index, setIndex] = useState(0);

  const blur = () => {
    if (filter === 'projectImage' || infoFilter === 'projectInfo') {
      setFilter('projectBlur');
      setInfoFilter('infoVisible');
    } else {
      setFilter('projectImage');
      setInfoFilter('projectInfos');
    }
  };

  const handleClick = ({ target }) => {
    if (target.alt === 'left' && index > 0) {
      setIndex(index - 1);
    }
    if (target.alt === 'right' && index < 2) {
      setIndex(index + 1);
    }
  };
  return (
    <div className="projectsDiv">
      <button onClick={handleClick} className="arrowButton" alt="left" type="button">
        <img className="leftArrow" alt="left" src={changeColor(colorMode, arrow, ArrowW)} />

      </button>

      <section onMouseEnter={blur} onMouseLeave={blur} className="projects">

        <img className={filter} alt="Baratiê" src={projects[index]} />

        {language === 'Portugues' ? (
          <div className={infoFilter}>

            <h1 className="projectTitle">{projectsBR[index].name}</h1>
            <h3 className="projectDesc">
              {projectsBR[index].describe}
            </h3>

            {projectsBR[index].skills.map((skill) => (
              <h4 className="projectTasks">{skill}</h4>
            ))}

            <br />

            <button type="button" className="projectButtons">Repositorio</button>
            <button type="button" className="projectButtons">Veja o Site</button>
          </div>
        ) : (
          <div className={infoFilter}>

            <h1 className="projectTitle">{projectsENG[index].name}</h1>
            <h3 className="projectDesc">
              {projectsENG[index].describe}
            </h3>

            {projectsENG[index].skills.map((skill) => (
              <h4 className="projectTasks">{skill}</h4>
            ))}

            <br />

            <button type="button" className="projectButtons">Repository</button>
            <button type="button" className="projectButtons">See the Website</button>
          </div>
        )}
      </section>
      <button onClick={handleClick} className="arrowButton" alt="right" type="button">
        <img className="arrow" alt="right" src={changeColor(colorMode, arrow, ArrowW)} />

      </button>

    </div>
  );
}

export default ProjectsMap;
