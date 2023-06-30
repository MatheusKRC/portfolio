import JavaScript from '../Icons/js.png';
import typescript from '../Icons/typescript.png';
import python from '../Icons/python.png';
import html from '../Icons/html.png';
import css from '../Icons/css.png';
import docker from '../Icons/docker.png';
import React from '../Icons/React.png';
import redux from '../Icons/redux.png';
import test from '../Icons/test.png';
import git from '../Icons/git.png';
import github from '../Icons/github.png';
import npm from '../Icons/npm.png';
import netifly from '../Icons/netifly.png';
import expressJs from '../Icons/expressJs.webp';
import mysql from '../Icons/mysql.png';
import mongoDB from '../Icons/mongoDB.png';
import figma from '../Icons/figma.png';
import linux from '../Icons/linux.png';

function Icons() {
  return (
    <section className="skills">
      <figure className="figure">
        <img className="icon" width="60px" alt="JavaScript Icon" src={JavaScript} />
        <figcaption className="iconText">JavaScript</figcaption>

      </figure>

      <figure className="figure">
        <img className="icon" width="60px" alt="TypeScript Icon" src={typescript} />
        <figcaption className="iconText">TypeScript</figcaption>

      </figure>

      <figure>
        <img className="icon" width="60px" alt="Python Icon" src={python} />
        <figcaption>Python</figcaption>

      </figure>

      <figure>
        <img className="icon" width="60px" alt="HTML Icon" src={html} />
        <figcaption>HTML</figcaption>

      </figure>

      <figure>
        <img className="icon" width="60px" alt="CSS Icon" src={css} />
        <figcaption>CSS</figcaption>

      </figure>

      <img className="icon" width="60px" alt="Docker Icon" src={docker} />
      Docker

      <img className="icon" width="60px" alt="React.js Icon" src={React} />
      React.js

      <img className="icon" width="60px" alt="Redux Icon" src={redux} />
      Redux

      <img className="icon" width="60px" alt="Testing Library Icon" src={test} />
      Testing Library

      <img className="icon" width="60px" alt="Git Icon" src={git} />
      Git

      <img className="icon" width="60px" alt="GitHub Icon" src={github} />
      GitHub

      <img className="icon" width="60px" alt="NPM Icon" src={npm} />
      NPM

      <img className="icon" width="60px" alt="Netlify Icon" src={netifly} />
      Netlify

      <img className="icon" width="60px" alt="ExpressJs Icon" src={expressJs} />
      ExpressJs

      <img className="icon" width="60px" alt="MySQL Icon" src={mysql} />
      MySQL

      <img className="icon" width="60px" alt="MongoDB Icon" src={mongoDB} />
      MongoDB

      <img className="icon" width="60px" alt="Figma Icon" src={figma} />
      Figma

      <img className="icon" width="60px" alt="Linux Icon" src={linux} />
      Linux
    </section>
  );
}

export default Icons;
