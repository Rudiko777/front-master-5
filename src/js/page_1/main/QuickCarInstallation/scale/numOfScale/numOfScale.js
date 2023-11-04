import React, {useEffect} from "react";
import {useState} from "react";
import styles from './numOfScale.module.css'

export const NumOfScale = ({title})=>{
    const[valueScale, setValueScale] = useState(false)

    useEffect(()=>{
        if ({title} === "0"){
            setValueScale(true);
        }
    }, [title])

    return(
        <div className={valueScale ? styles.numberBoxNull : styles.numberBox}>
            {title}
        </div>
    )
}