import React from "react";
import styles from './interBtn.module.css'
import {Btn} from "./Btn";

export const InterBtn = ()=>{
    return(
        <>
            <div className={styles.myBtns}>
                <Btn title={"Тип кузова"}/>
                <Btn title={"Коробка"}/>
            </div>
        </>
    )
}