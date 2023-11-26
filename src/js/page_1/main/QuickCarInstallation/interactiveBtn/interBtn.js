import React from "react";
import styles from './interBtn.module.css'
import {Btn} from "./Btn";

export const InterBtn = ()=>{
    return(
        <>
            <div className={styles.myBtns}>
                <Btn title={"Тип кузова"} one={"A220"} two={"B550"} three={"U879"}/>
                <Btn title={"Коробка"} one={"МКПП"} two={"АКПП"} three={"РКПП"}/>
            </div>
        </>
    )
}