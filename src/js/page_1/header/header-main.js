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
import sidebarLogo from '../../../images/page_1/header-main/sidebarLogo.svg'
import arrow from '../../../images/page_1/header-main/sidebarItemLink.svg'
import tel from '../../../images/page_1/header-main/sidebarContactsTel.svg'
import time from '../../../images/page_1/header-main/sidebarContactsTime.svg'
import loco from '../../../images/page_1/header-main/sidebarContactsLoco.svg'

export const HeaderMain = ()=>{

    const[value, setValue] = useState(false)

    return(
        <>
            <div className={"header-main-box"}>
                <a href={"#"} className={"header-main-sidebar-link"} onClick={()=>setValue(!value)}>
                    <img style={{width: "28px"}} className={"header-main-sidebar"} src={value ? logoClose : sidebar} alt={"Sidebar"}/>
                </a>
                <div className={value ? "leftsideMenu" : cn("leftsideMenuClose", "leftsideMenu")}>
                    <div className={"leftsideMenu-title-div"}>
                        <button className={"leftsideMenuCloseBtn"} onClick={()=>setValue(!value)}>
                            <img src={krest} alt={"Krestik"}/>
                        </button>
                        <Link to={'/'}>
                            <img src={sidebarLogo} style={{display: "block"}}/>
                        </Link>
                    </div>
                    <ul className={"leftsideMenuList"}>
                        <li className={"leftsideMenuItem"}>
                            <img src={arrow}/>
                            <a className={"leftsideMenuItem-title"} href={"#"}>
                                Каталог авто
                            </a>
                        </li>
                        <li className={"leftsideMenuItem"}>
                            <img src={arrow}/>
                            <a className={"leftsideMenuItem-title"} href={"#"}>
                                Авто с пробегом
                            </a>
                        </li>
                        <li className={"leftsideMenuItem"}>
                            <img src={arrow}/>
                            <Link className={"leftsideMenuItem-title"} to={"/credit"}>
                                Кредит и рассрочка
                            </Link>
                        </li>
                        <li className={"leftsideMenuItem"}>
                            <img src={arrow}/>
                            <Link className={"leftsideMenuItem-title"} to={"/disposal"}>
                                Спецпредложения
                            </Link>
                        </li>
                        <li className={"leftsideMenuItem"}>
                            <img src={arrow}/>
                            <Link className={"leftsideMenuItem-title"} to={"/taxi"}>
                                Такси в кредит
                            </Link>
                        </li>
                        <li className={"leftsideMenuItem"}>
                            <img src={arrow}/>
                            <Link className={"leftsideMenuItem-title"} to={"/Auth"}>
                                Регистрация
                            </Link>
                        </li>
                    </ul>
                    <div className={"leftsideMenu-otherInfo"}>
                        <a href={"#"} className={"leftsideMenu-otherInfo-link"}>Подбор авто</a>
                        <a href={"#"} className={"leftsideMenu-otherInfo-link"}>О компании</a>
                        <a href={"#"} className={"leftsideMenu-otherInfo-link"}>Техцентр</a>
                        <a href={"#"} className={"leftsideMenu-otherInfo-link"}>Отзывы</a>
                        <a href={"#"} className={"leftsideMenu-otherInfo-link"}>Контакты</a>
                    </div>
                    <div className={"leftsideMenu-contacts"}>
                        <div className={"leftsideMenu-contacts-tels"}>
                            <img style={{padding: '7px', background: "#CA0100", borderRadius: "50%"}} src={tel}/>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <a href={'tel:88005519431'}>+7 (800) 551-94-31</a>
                                <a href={'tel:84952921867'}>+7 (495) 292-18-67</a>
                            </div>
                        </div>
                        <div className={"leftsideMenu-contacts-time"}>
                            <img style={{padding: '7px', background: "#CA0100", borderRadius: "50%"}} src={time}/>
                            <p>с 08:00 до 21:00</p>
                        </div>
                        <div className={"leftsideMenu-contacts-loco"}>
                            <img style={{padding: '7px', background: "#CA0100", borderRadius: "50%"}} src={loco}/>
                            <p>Россия, Москва, 38КМ МКАД, 6Бс1</p>
                        </div>
                    </div>
                </div>
                <div className={value ? "header-sidebar-full-page" : "header-sidebar-full-page-close"}>
                    <div className={"header-sidebar-div"}>
                        <input className={"header-sidebar-full-page-input"} type={"text"} placeholder={"Поиск"}/>
                        <button className={"header-sidebar-full-page-button"}>
                            Найти
                        </button>
                    </div>
                    <div className={"header-sidebar-full-page-links"}>
                        <div className={"header-sidebar-full-page-credit-taxi-offers"}>
                            <div className={"header-sidebar-full-page-credit"}>
                                <Link to={'/credit'}>
                                    <h1 className={"header-sidebar-full-page-links-title"}>
                                        Кредит и рассрочка
                                    </h1>
                                </Link>
                                <div className={"header-sidebar-full-page-credit-links"}>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Первый автомобиль
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Семейный автомобиль
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Экспресс-кредит
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Работникам медицины
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Рассрочка
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Госпрограмма Trade-in
                                    </a>
                                </div>
                            </div>
                            <div className={"header-sidebar-full-page-offers"}>
                                <Link to={'/disposal'}>
                                    <h1 className={"header-sidebar-full-page-links-title"}>
                                        Спецпредложения
                                    </h1>
                                </Link>
                                <div className={"header-sidebar-full-page-credit-links"}>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Trade-in
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Рассрочка
                                    </a>
                                </div>
                            </div>
                            <div className={"header-sidebar-full-page-offers"}>
                                <Link to={'/taxi'}>
                                    <h1 className={"header-sidebar-full-page-links-title"}>
                                        Такси в кредит
                                    </h1>
                                </Link>
                            </div>
                        </div>
                        <div className={"header-sidebar-full-page-catalogs"}>
                            <h1 className={"header-sidebar-full-page-links-title"}>
                                Каталог автомобилей
                            </h1>
                            <div className={"header-sidebar-full-page-catalogs-divs"}>
                                <div className={"header-sidebar-full-page-catalogs-item"}>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Kia
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Hyundai
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Skoda
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Volkswagen
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Toyota
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Brilliance
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Changan
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Chery
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        CheryExeed
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Chevrolet
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Citroen
                                    </a>
                                </div>
                                <div className={"header-sidebar-full-page-catalogs-item"}>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Datsun
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Dongfeng
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        DW Hower
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        FAW
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Ford
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Foton
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Geely
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Great Wall
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Haima
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Haval
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Honda
                                    </a>
                                </div>
                                <div className={"header-sidebar-full-page-catalogs-item"}>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        JAC
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Lada
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Lifan
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Mazda
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Mitsubishi
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Nissan
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Opel
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Peugeot
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Ravon
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Renault
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        SsangYong
                                    </a>
                                </div>
                                <div className={"header-sidebar-full-page-catalogs-item"}>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Suzuki
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        UAZ
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Zotye
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={"header-sidebar-full-page-auto"}>
                            <h1 className={"header-sidebar-full-page-links-title"}>
                                Авто с пробегом
                            </h1>
                            <div className={"header-sidebar-full-page-auto-divs"}>
                                <div className={"header-sidebar-full-page-auto-item"}>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Audi
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        BMW
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Brilliance
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Changan
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Chery
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Chevrolet
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Citroen
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Daewoo
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Datsun
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Dongfeng
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        FAW
                                    </a>
                                </div>
                                <div className={"header-sidebar-full-page-auto-item"}>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Ford
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Geely
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Genesis
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Great Wall
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Haval
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Honda
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Hyundai
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Jeep
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Kia
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Lada
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Land Rover
                                    </a>
                                </div>
                                <div className={"header-sidebar-full-page-auto-item"}>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Lexus
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Lifan
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Mazda
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Mercedes-Benz
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Mitsubishi
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Nissan
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Opel
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Peugeot
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Ravon
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Renault
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Skoda
                                    </a>
                                </div>
                                <div className={"header-sidebar-full-page-auto-item"}>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        SsangYong
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Suzuki
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Toyota
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Volkswagen
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Volvo
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Vortex
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        Zotye
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        ЗАЗ
                                    </a>
                                    <a href={"#"} className={"header-sidebar-full-page-credit-item"}>
                                        ТагАЗ
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
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