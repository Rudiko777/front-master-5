import React from "react";
import styles from './oneMark.module.css'

export const OneMark = ({title, logo})=>{
    return(
        <div className={styles.carItem}>
            <img className={styles.carItemImg} src={logo}/>
            <p className={styles.carItemTitle}>{title}</p>
        </div>
    )
}