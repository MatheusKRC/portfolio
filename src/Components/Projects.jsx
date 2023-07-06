/* eslint-disable react/prop-types */
import Projetos from '../Assets/Projetos.png';
import ProjetosW from '../Assets/White/ProjetosW.png';
import Project from '../AssetsENG/Projects.png';
import ProjectsB from '../AssetsENG/ProjectsB.png';
import { changeColor } from '../Utils/AllProjects';
import ProjectsMap from './ProjectsMap';

function Projects({ language, colorMode }) {
  return (
    <div id="Projects" className={`projectsPage ${colorMode}`}>

      <div className="projectsName">
        {language === 'Portugues' ? <img className="projectsName" alt="Projetos" src={changeColor(colorMode, Projetos, ProjetosW)} />
          : <img className="projectsName" alt="Projetos" src={changeColor(colorMode, Project, ProjectsB)} />}
      </div>

      <ProjectsMap language={language} colorMode={colorMode} />

    </div>
  );
}

export default Projects;
