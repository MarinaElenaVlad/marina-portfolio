import React from 'react';
import styles from "./AboutMe.module.css";
import { getImageUrl } from '../utils';

export const AboutMe = () => {

  const onButtonClick = () => {
     
    fetch(getImageUrl("aboutMe/CV - Marina Elena Vlad.pdf")).then((response) => {
        response.blob().then((blob) => {
         
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Curriculum.pdf";
            alink.click();
        });
    });
  };
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hola, soy Marina</h1>
            <p className={styles.description}>Soy una estudiante de DAW</p>
            <a href='#' onClick={onButtonClick} className={styles.contactBtn} download>Descarga mi curriculum</a>
        </div>
        <img src={getImageUrl("aboutMe/avatar.png")} alt="Imagen de Marina" className={styles.avatarImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  );
};
