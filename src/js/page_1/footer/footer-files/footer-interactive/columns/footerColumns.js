import React from "react";
import styles from './columns.module.css'

export const FooterColumn = ({title, description})=>{
    if (title === "Авто под такси"){
        return(
            <div className={styles.box}>
                <a className={styles.carListYellowTitle} href={"#"}>
                    {title}
                </a>
                <p className={styles.carText}>
                    {description}
                </p>
            </div>
        )
    }
    return(
        <div className={styles.box}>
            <a className={styles.carTitle} href={"#"}>
                {title}
            </a>
            <p className={styles.carText}>
                {description}
            </p>
        </div>
    )
}