import React, {useState} from "react";
import styles from "./input.module.css"

export const InputRange = ({title, limitNumber, shortNumber, max, min})=>{
    const[number, setNumber] = useState('0 - 0т');

    const handleClick = ()=>{
        const valueOfNumber = document.querySelector('input')
        if (valueOfNumber.value >= limitNumber){
            setNumber(`0 - ${((valueOfNumber.value)/limitNumber).toFixed(1)}м`)
        }
        else{
            setNumber(`0 - ${((valueOfNumber.value)/shortNumber).toFixed(0)}т`)
        }
    }

    return(
        <>
            <div className={styles.info}>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.myDiv}>
                    {number}
                </div>
            </div>
            <div className={styles.inputBox}>
                <input type={"range"} min={min} max={max} step={1} id={"inputRange"} onInput={()=> handleClick()} className={styles.inputReal}/>
            </div>
        </>
    )
}