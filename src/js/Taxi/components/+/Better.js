import React from 'react';
import styles from './Better.module.css'
import bet from '../../../../images/taxi/bet.svg'

const Better = () => {
    return (
        <div className={styles.box}>
            <div className={styles.advantageBox}>
                <p className={styles.advantage}>
                    Преимущества
                </p>
            </div>
            <h2 className={styles.advantageTitle}>
                Своё такси
            </h2>
            <div className={styles.advantagesList}>
                <div className={styles.advantagesItem}>
                    <img src={bet} alt={"Better"}/>
                    <p className={styles.advantagesItemDescription} style={{color: "#737373"}}>
                        Авто в личной собственности по ПТС
                    </p>
                </div>
                <div className={styles.advantagesItem}>
                    <img src={bet} alt={"Better"}/>
                    <p className={styles.advantagesItemDescription} style={{color: "#737373"}}>
                        Платеж по кредиту от 90 руб. в день
                    </p>
                </div>
                <div className={styles.advantagesItem}>
                    <img src={bet} alt={"Better"}/>
                    <p className={styles.advantagesItemDescription} style={{color: "#737373"}}>
                        Рассрочка 0% без<br/>первоначального взноса
                    </p>
                </div>
                <div className={styles.advantagesItem}>
                    <img src={bet} alt={"Better"}/>
                    <p className={styles.advantagesItemDescription} style={{color: "#737373"}}>
                        Бесплатная установка ГБО для<br/>экономии топлива
                    </p>
                </div>
                <div className={styles.advantagesItem}>
                    <img src={bet} alt={"Better"}/>
                    <p className={styles.advantagesItemDescription} style={{color: "#737373"}}>
                        Оклейка автомобиля по ГОСТу
                    </p>
                </div>
                <div className={styles.advantagesItem}>
                    <img src={bet} alt={"Better"}/>
                    <p className={styles.advantagesItemDescription} style={{color: "#737373"}}>
                        Быстрое оформление всех<br/>документов под ключ

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Better;