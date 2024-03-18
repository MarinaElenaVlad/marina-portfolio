import React, {useState} from 'react';

import styles from "./NavBar.module.css";
import {getImageUrl} from "../utils.js";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navBar}>
        <a className={styles.title} href='/'>Portfolio</a>
        <div className={styles.menu}>
            <img 
             className={styles.menuBtn}
             src={
                menuOpen ? getImageUrl("nav/iconoCerrar.png")
                : getImageUrl("nav/iconoMenu.png")
            } 
            alt="boton-menu" 
            onClick={
                () => setMenuOpen(!menuOpen)
            }
            style={{ width: '50px' }}></img>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li>
                    <a href='#about'>Sobre mí</a>
                </li>
                <li>
                    <a href='#experience'>Experiencia</a>
                </li>
                <li>
                    <a href='#projects'>Proyectos</a>
                </li>
                <li>
                    <a href='#about'>Contact</a>
                </li>
            </ul>
        </div>

    </nav>
  )
}
