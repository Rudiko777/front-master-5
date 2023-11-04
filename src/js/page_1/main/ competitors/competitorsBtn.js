import React from "react";
import styles from './competitors.module.css'


export const CompetitorsBtn = ({getOffers})=>{
    return(
        <div className={styles.competitorsBtnsInputs}>
            <input className={styles.competitorsInput} placeholder={"Введите номер"}/>
            <button type="submit" className={styles.competitorsBtn}>
                {getOffers}
            </button>
        </div>
    )
}