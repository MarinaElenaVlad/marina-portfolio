import React from 'react';

import skills from "../data/skills.json";
import history from "../data/history.json";
import styles from "./Experience.module.css";

import {getImageUrl} from "../utils.js";


export const Experience = () => {
  return (
    <selection className={styles.container} id="experience">
        <h2 className={styles.title}>Experiencia</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill, id) => {
                    return <div key={id} className={styles.skill}>
                       <div className={styles.skillImageContainer}>
                        <img src={getImageUrl(skill.imageSrc)} 
                        alt={skill.title}
                        style={{ width: '60px' }} ></img>
                        </div>     
                        <p>{skill.title}</p>
                    </div>
                })
                }</div>
            <ul className={styles.history}> 
                {
                    history.map((historyItem, id) => {
                        return (<li key={id} className={styles.historyItem}>
                            <img src={getImageUrl(historyItem.imageSrc)} 
                            alt={`${historyItem.organisation} Logo`}/>
                        <div className={styles.historyItemDetails}>
                            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <ul>{historyItem.experiencies.map((experiencie, id) => {
                                return <li key={id}>{experiencie}</li>
                            })}</ul>
                        </div>
                        </li>
                        );
                    })
                }
            </ul>
        </div>
    </selection>
  )
}
