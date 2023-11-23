import React from "react";
import '../../.././css/style.css'
import logo from '../../../images/page_1/header-main/logo.svg'
import logoClose from '../../../images/page_1/header-main/sidebarClose.svg'
import sidebar from '../../../images/page_1/header-main/sidebar.svg'
import NavigationMain from "./navigation";
import {ConnectionMain} from "./connection";
import {Catalogs} from "./catalogs";
import krest from '../../../images/Auth/krest.svg'
import {useState} from "react";
import cn from "classnames";
import {Link} from "react-router-dom";

export const HeaderMain = ()=>{

    const[value, setValue] = useState(false)

    return(
        <>
            <div className={"header-main-box"}>
                <a href={"#"} className={"header-main-sidebar-link"} onClick={()=>setValue(!value)}>
                    <img style={{width: "28px"}} className={"header-main-sidebar"} src={sidebar} alt={"Sidebar"}/>
                </a>
                <div className={value ? "leftsideMenu" : cn("leftsideMenuClose", "leftsideMenu")}>
                    <button className={"leftsideMenuCloseBtn"} onClick={()=>setValue(!value)}>
                        <img src={krest} alt={"Krestik"}/>
                    </button>
                    <ul className={"leftsideMenuList"}>
                        <li className={"leftsideMenuItem"}>
                            <a href={"#"}>
                                Подбор авто
                            </a>
                        </li>
                        <li className={"leftsideMenuItem"}>
                            <a href={"#"}>
                                О компании
                            </a>
                        </li>
                        <li className={"leftsideMenuItem"}>
                            <a href={"#"}>
                                Техцентр
                            </a>
                        </li>
                        <li className={"leftsideMenuItem"}>
                            <a href={"#"}>
                                Отзывы
                            </a>
                        </li>
                        <li className={"leftsideMenuItem"}>
                            <a href={"#"}>
                                Контакты
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="header-main-logo-container">
                    <Link to={"/"} className={"header-main-logo-link"}>
                        <img className={"header-main-logo"} src={logo} alt={"Logo"}/>
                    </Link>
                </div>
                <h4 className={"header-main-advertisement"}><span className={"header-main-advertisement-time"}>10 лет</span> превосходим ваши ожидания</h4>
                <NavigationMain />
                <ConnectionMain />
            </div>
            <Catalogs />
        </>
    )
}