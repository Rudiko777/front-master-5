import React from "react";
import styles from './interBtn.module.css'


export const ShowBtn = ({count})=>{
    return(
        <>
            <button className={styles.showBtn}>
                Показать {count}
            </button>
        </>
    )
}