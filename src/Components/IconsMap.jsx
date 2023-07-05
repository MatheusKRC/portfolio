import JavaScript from '../Icons/js.png';
import TypeScript from '../Icons/typescript.png';
import Python from '../Icons/python.png';
import HTML from '../Icons/html.png';
import CSS from '../Icons/css.png';
import Docker from '../Icons/docker.png';
import React from '../Icons/React.png';
import Redux from '../Icons/redux.png';
import Testing from '../Icons/test.png';
import Git from '../Icons/git.png';
import GitHub from '../Icons/github.png';
import NPM from '../Icons/npm.png';
import Netifly from '../Icons/netifly.png';
import ExpressJs from '../Icons/expressJs.webp';
import MySQL from '../Icons/mysql.png';
import MongoDB from '../Icons/mongoDB.png';
import Figma from '../Icons/figma.png';
import Linux from '../Icons/linux.png';

function IconsMap() {
  const arrayIcons = [
    JavaScript, TypeScript, Python, HTML, CSS,
    Docker, React, Redux, Testing, Git, GitHub,
    NPM, Netifly, ExpressJs, MySQL, MongoDB, Figma, Linux];

  const arrayIconsNames = [
    'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS',
    'Docker', 'React', 'Redux', 'Testing', 'Git', 'GitHub',
    'NPM', 'Netlify', 'ExpressJs', 'MySQL', 'MongoDB', 'Figma', 'Linux',
  ];

  return (
    <section className="skills">
      {arrayIcons.map((icons, index) => (
        <figure key={icons} className="iconFigure">
          <img className="icon" alt={`${icons} Icon`} src={icons} />
          <figcaption id={arrayIconsNames[index]} className="iconName">{arrayIconsNames[index]}</figcaption>
        </figure>
      ))}
    </section>
  );
}

export default IconsMap;
