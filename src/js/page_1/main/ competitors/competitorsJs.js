import React from "react";
import styles from './competitors.module.css'
import punch from '../../../../images/page_1/main/punch.png'
import {CompetitorsBtn} from "./competitorsBtn";

export const CompetitorsJs = ({sales})=>{
    return(
        <section className={styles.competitorsBox}>
            <img className={styles.competitorsPunch} src={punch} alt={"Punch"}/>
            <div className={styles.competitorsInteractiveBox}>
                <h3 className={styles.competitorsInteractiveTitle}>
                    Перебьем предложения от конкурентов!
                </h3>
                <p className={styles.competitorsInteractiveText}>
                    Скидки <span>от 10 до 25%</span> на стоимость автомобиля
                </p>
                <CompetitorsBtn getOffers="Получить предложения"/>
                <p className={styles.competitorsCopyright}>
                    Нажимая кнопку “Отправить” Вы даете согласие на обработку своих <span>персональных данных</span>
                </p>
            </div>
        </section>
    )
}