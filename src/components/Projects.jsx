import React from 'react';

import projects from "../data/projects.json";

export const Projects = () => {
  return (
    <section>
        <h2>Proyectos</h2>
        <div>{
            projects.map((project, id) => {
                return <div key={id}>
                   <img src={project.imageSrc}
                   alt={`Imagen de ${project.title}`}></img>     
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>{
                        project.skills.map((skill,id) =>{
                            <li key={id}>{skill}</li>;
                        })
                        }
                    </ul>
                    <div>
                        <a href={project.demo}>Demo</a>
                    </div>
                </div>
            })}
        </div>
    </section>
  )
}
