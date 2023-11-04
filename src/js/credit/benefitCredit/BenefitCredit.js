import React from "react";
import styles from './BenefitCredit.module.css'
import {BenefitItem} from "./BenefitItem";

export const BenefitCredit = ()=>{
    return(
        <>
            <div className={styles.benefitBox}>
                <div className={styles.benefitCol}>
                    <BenefitItem content={"Осаго для такси"} maxWidth={93}/>
                    <BenefitItem content={"Оплата после проверки"} maxWidth={108}/>
                </div>
                <div className={styles.benefitCol}>
                    <BenefitItem content={"Гарантия самой низкой цены полиса"} maxWidth={142}/>
                    <BenefitItem content={"На все категории A B C D E"} maxWidth={142}/>
                </div>
                <div className={styles.benefitCol}>
                    <BenefitItem content={"Официальные полисы"} maxWidth={142}/>
                    <BenefitItem content={"Возможен безналичный расчет"} maxWidth={174}/>
                </div>
            </div>
        </>
    )
}