import React, { useState, useEffect } from 'react';
import styles from "./Projects.module.css";

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [sections, setSections] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const accessToken = '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'; 
          const response = await fetch('https://api.github.com/users/MarinaElenaVlad/repos', {
            headers: {
              Authorization: `token ${accessToken}`
            }
          });
          const data = await response.json();
          const projectsWithDetails = await Promise.all(data.map(project => getProjectDetails(project)));
          setProjects(projectsWithDetails);
        } catch (error) {
          console.error('Error fetching data from GitHub:', error);
        }
      };

      fetchData();
    }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        const updatedSections = sections.map(section => {
          const sectionElement = document.getElementById(section.id);
          if (sectionElement) {
            const sectionPosition = sectionElement.offsetTop;
            return { ...section, visible: scrollPosition >= sectionPosition - window.innerHeight / 2 };
          }
          return section;
        });
  
        setSections(updatedSections);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [sections]); 
  
    const getProjectDetails = async (repo) => {
      try {
        const response = await fetch(`https://api.github.com/repos/MarinaElenaVlad/${repo.name}`);
        const data = await response.json();
        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          homepage: data.homepage,
          technologies: data.language ? [data.language] : [],
          image: `https://raw.githubusercontent.com/MarinaElenaVlad/${repo.name}/master/image.png`
        };
      } catch (error) {
        console.error('Error fetching project details:', error);
        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          homepage: '',
          technologies: [],
          image: '' 
        };
      }
    };
  
    return (
      <section className={styles.container} id="projects" >
        <h1 className={styles.title}>GitHub Projects</h1>
        {projects.map(project => (
          <div className={styles.project} key={project.id}>
            {project.image && 
              <img src={project.image} alt={`${project.name}`} />
            }
            <div className={styles['project-content']}>
              <h2><a href={project.html_url} target="_blank" rel="noopener noreferrer">{project.name}</a></h2>
              <p>{project.description}</p>
              <p>Tecnologías: {project.technologies.join(', ')}</p>
            </div>
          </div>
        ))}
      </section>
    );
}
