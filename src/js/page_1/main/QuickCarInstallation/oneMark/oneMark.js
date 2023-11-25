import React from "react";
import styles from './oneMark.module.css'

export const OneMark = ({title, logo})=>{
    return(
        <div className={styles.carItem}>
            <img className={styles.carItemImg} src={logo}/>
            <a href={"#"} className={styles.carItemTitle}>{title}</a>
        </div>
    )
}