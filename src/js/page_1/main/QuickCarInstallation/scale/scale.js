import React from "react";
import {useState} from "react";
import styles from './scale.module.css'
import {NumOfScale} from "./numOfScale/numOfScale";

export const Scale = ()=>{
    return(
        <div className={styles.scaleBox}>
            <NumOfScale title={"0"}/>
            <NumOfScale title={"500т"}/>
            <NumOfScale title={"800т"}/>
            <NumOfScale title={"1,1м"}/>
            <NumOfScale title={"1,4м"}/>
            <NumOfScale title={"1,7м"}/>
            <NumOfScale title={"2м"}/>
            <NumOfScale title={"2,3м"}/>
            <NumOfScale title={"2,7м"}/>
            <NumOfScale title={"3м"}/>
        </div>
    )
}