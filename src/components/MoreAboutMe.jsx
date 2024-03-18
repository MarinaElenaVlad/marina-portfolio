import React from 'react';
import { getImageUrl } from '../utils';
import styles from "./MoreAboutMe.module.css";
export const MoreAboutMe = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>Sobre mí</h2>
        <div className={styles.content}>
            <img className={styles.sobreMiImagen} src={getImageUrl("aboutMe/sobreMiImagen.png")} alt="Sentada con un portátil"></img>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}> 
                    <img src={getImageUrl("aboutMe/cursorIcon.png")} alt="Icono cursor"
                    style={{ width: '50px' }} />
                    <div className={styles.aboutItemText}>
                        <h3>Desarrollador de Fronted</h3>
                        <p>Soy una desarrolladora de Front-end apasionado por crear experiencias de usuario atractivas y funcionales</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("aboutMe/serverIcon.png")} alt="Icono cursor"
                    style={{ width: '50px' }} ></img>
                    <div className={styles.aboutItemText}>
                        <h3>Desarrollador de Backend</h3>
                        <p>Soy una desarrolladora de backend con experiencia en la creación y mantenimiento de la lógica y la funcionalidad detrás de las aplicaciones y sitios web.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("aboutMe/uiIcon.png")} alt="UI cursor"
                    style={{ width: '50px' }} ></img>
                    <div className={styles.aboutItemText}>
                        <h3>Diseñador de interfaz</h3>
                        <p>Soy un diseñador de interfaz de usuario (UI) con una pasión por crear experiencias visuales cautivadoras y funcionales</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
