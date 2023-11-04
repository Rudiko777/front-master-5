import React from "react";
import styles from './credit.module.css'
import {BreadCrumbs} from "../../components/breadCrumps";
import {BenefitCredit} from "./benefitCredit/BenefitCredit";
import {CreditForm} from "./creditFrom/CreditForm";
import {Insurance} from "./insurance/Insurance";
import {Documents} from "./documents/Documents";
import {CardCredit} from "./cardCredit/CardCredit";
import {Partners} from "./partners/Partners";

export const CreditPageMain = ()=>{
    return(
        <>
            <div className={styles.creditBackgroundBox}>
                <div className="container">
                    <BreadCrumbs/>
                    <h1 className={styles.creditTitle}>
                        Страховые полисы<br/>без комиссий и надбавок
                    </h1>
                    <div className={styles.creditTitleMore}>
                        <h3>
                            Расчет сразу в нескольких компаниях и официальное оформление страхового полиса
                        </h3>
                    </div>
                    <BenefitCredit/>
                </div>
            </div>
            <section className={styles.creditFormSection}>
                <div className="container">
                    <CreditForm/>
                    <Insurance/>
                    <Documents/>
                    <CardCredit/>
                    <Partners/>
                </div>
            </section>
        </>
    )
}