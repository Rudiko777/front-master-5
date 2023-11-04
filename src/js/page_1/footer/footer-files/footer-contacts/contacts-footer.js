import React from "react";
import logo from '../../../../../images/page_1/footer/tel.svg'
import clock from '../../../../../images/page_1/footer/clock.svg'
import loco from '../../../../../images/page_1/footer/loco.svg'
import styles from './footerCont.module.css'
import point from '../../../../../images/page_1/footer/point.svg'


export const FooterContacts = ()=>{
    return(
        <div className={styles.box}>
            <div className={styles.contacts}>
                <img className={styles.contactsLogo} src={logo}/>
                <div className={styles.contactsNumbers}>
                    <a className={styles.contactsNumberFirst} href={"tel:88005519431"}>+7 (800) 551-94-31</a>
                    <a className={styles.contactsNumberSecond} href={"tel:84952921867"}>+7 (495) 292-18-67</a>
                </div>
            </div>
            <div className={styles.clock}>
                <img className={styles.clockLogo} src={clock}/>
                <p className={styles.clockDesk}>Ежедневно с 08:00 до 21:00</p>
            </div>
            <div className={styles.location}>
                <img className={styles.locoLogo} src={loco}/>
                <div className={styles.locoDescBox}>
                    <a className={styles.locoDesc} href={"#"}>
                        Россия, Москва, 38КМ МКАД, 6Бс1
                    </a>
                    <a className={styles.locoScheme} href={"#"}>Схема проезда</a>
                </div>
            </div>
            <button className={styles.footerContactsBtn} type={"submit"}>
                <div className={styles.btnBox}>
                    <p className={styles.footerContactsBtnP}>Москва</p>
                    <img className={"footer-contacts-btn-point"} width={"11px"} height={"6px"} src={point}/>
                </div>
            </button>
        </div>
    )
}