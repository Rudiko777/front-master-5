import React from "react";
import {useState} from "react";

export const Komb2 = ()=>{
    let[value, setValue] = useState(0)


    return(
        <div className={"komb-2"}>
            <a className={"komb-2-link"} href={"#"}>
                Спонсоры:
            </a>
            <p>Shell</p>
            <p>NAVI</p>
            <p>TeaM Spirit</p>
            <p>{value}</p>
            <button onClick={()=> setValue(value + 1)}>
                Нажмите
            </button>
        </div>
    )
}