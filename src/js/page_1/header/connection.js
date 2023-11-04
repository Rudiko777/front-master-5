import React, {useState} from "react";
import '../../.././css/style.css'
import connect from '../../../images/page_1/header-main/tel.svg'
import {Link} from "react-router-dom";


export const ConnectionMain = ()=>{
    const [pressed, setPressed] = useState(0);


    return(
        <div className={"header-main-connection"}>
            <div className={"header-main-connection-tel"}>
                <a href={"#"}><img className={"header-main-connection-tel-link"} alt={"number"} src={connect}/></a>
                <div className={"header-main-connection-tel-numbers"}>
                    <a className={"header-main-connection-tel-numbers-first"} href={"tel:+78005519431"}>+7 (800) 551-94-31</a>
                    <a className={"header-main-connection-tel-numbers-second"} href={"tel:+74952921867"}>+7 (495) 292-18-67</a>
                </div>
            </div>
            <button className={"header-main-connection-btn"} type={"submit"} onClick={()=> setPressed(pressed + 1)}>
                <Link to={"/Auth"}>
                    Регистрация
                </Link>
            </button>
        </div>
    )
}