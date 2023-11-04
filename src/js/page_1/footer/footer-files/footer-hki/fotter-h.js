import React from "react";
import styles from './style.module.css'
import {Link} from "react-router-dom";

export const FooterA = ({name}) =>{
    return(
        <div className={styles.box}>
            <a className={styles.a} href={"#"}>
                {name}
            </a>
        </div>
    )
}