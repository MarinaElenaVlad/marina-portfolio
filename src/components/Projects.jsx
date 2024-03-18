import React, { useState, useEffect } from 'react';
import styles from "./Projects.module.css";
import projects from "../data/projects.json";
import {getImageUrl} from "../utils.js";


export const Projects = () => {
    return (
      <div className={styles.container} id="projects" >
        <h1 className={styles.title}>GitHub Projects</h1>
        {projects.map(project => (
          <div className={styles.project}>
            {
              <img src={getImageUrl(project.imageSrc)} alt={`${project.title}`} />
            }
            <div className={styles['project-content']}>
              <h2><a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a></h2>
              <p>{project.description}</p>
              <p>Tecnologías: {project.technologies.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    );
}
