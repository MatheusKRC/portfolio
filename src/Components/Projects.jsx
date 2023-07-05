/* eslint-disable react/prop-types */
import Projetos from '../Assets/Projetos.png';
import Project from '../AssetsENG/Projects.png';
import ProjectsMap from './ProjectsMap';

function Projects({ language }) {
  return (
    <div id="Projects" className="projectsPage">

      <div className="projectsName">
        {language === 'Portugues' ? <img className="projectsName" alt="Projetos" src={Projetos} />
          : <img className="projectsName" alt="Projetos" src={Project} />}
      </div>

      <ProjectsMap />

    </div>
  );
}

export default Projects;
