import React from "react";
import styles from './myCard.module.css'

export const Stat = ({text, logo})=>{
    return(
        <div className={styles.StatsItem}>
            <img className={styles.StatsLogo} src={logo} alt={"Ошибка"}/>
            <p className={styles.StatText} style={{fontSize: "12px"}}>
                {text}
            </p>
        </div>
    )
}