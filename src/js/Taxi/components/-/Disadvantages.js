import React from 'react';
import styles from './Disadvantages.module.css'
import minus from "../../../../images/taxi/minus.svg";

const Disadvantages = () => {
    return (
        <div className={styles.box}>
            <div className={styles.disAdvantageBox}>
                <p className={styles.disAdvantage}>
                    Недостатки
                </p>
            </div>
            <h2 className={styles.disAdvantageTitle}>
                Аренда такси
            </h2>
            <div className={styles.disAdvantagesList}>
                <div className={styles.disAdvantagesItem}>
                    <img src={minus} alt={"Minus"}/>
                    <p className={styles.disAdvantagesItemDescription} style={{color: "#737373"}}>
                        Авто в собственности автопарка
                    </p>
                </div>
                <div className={styles.disAdvantagesItem}>
                    <img src={minus} alt={"Minus"}/>
                    <p className={styles.disAdvantagesItemDescription} style={{color: "#737373"}}>
                        Платеж за арендованное такси от<br/>1200 руб. в день
                    </p>
                </div>
                <div className={styles.disAdvantagesItem}>
                    <img src={minus} alt={"Minus"}/>
                    <p className={styles.disAdvantagesItemDescription} style={{color: "#737373"}}>
                        Риск скрытых комиссий и переплат
                    </p>
                </div>
                <div className={styles.disAdvantagesItem}>
                    <img src={minus} alt={"Minus"}/>
                    <p className={styles.disAdvantagesItemDescription} style={{color: "#737373"}}>
                        Нельзя установить доп. оборудование
                    </p>
                </div>
                <div className={styles.disAdvantagesItem}>
                    <img src={minus} alt={"Minus"}/>
                    <p className={styles.disAdvantagesItemDescription} style={{color: "#737373"}}>
                        Возможно несоответствие<br/>нормам ГОСТ
                    </p>
                </div>
                <div className={styles.disAdvantagesItem}>
                    <img src={minus} alt={"Minus"}/>
                    <p className={styles.disAdvantagesItemDescription} style={{color: "#737373"}}>
                        Долгое оформление документов
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Disadvantages;