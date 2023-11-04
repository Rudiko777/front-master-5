import React from 'react';
import styles from './DisposalTitle.module.css'

const DisposalTitle = ({percent}) => {
    return (
        <div className={styles.mainBox}>
            <h1 className={styles.mainTitle}>
                Утилизация авто
            </h1>
            <p className={styles.mainText}>
                Стать участником программы «Утилизации авто» может любой клиент без ограничений по возрасту, основное условие - покупка автомобиля впервые.
            </p>
            <div className={styles.mainInterestRate}>
                <div className={styles.mainRateContentBox}>
                    <h1 className={styles.mainInterestRateTitle}>
                        от {percent}%
                    </h1>
                    <span>
                        По льготной<br/>ставке
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DisposalTitle;