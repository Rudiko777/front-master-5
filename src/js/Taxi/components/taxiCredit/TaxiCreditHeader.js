import React from 'react';
import styles from './TaxiCredit.module.css'
import taxiLogo from '../../../../images/taxi/taxiLogo.svg'

const TaxiCreditHeader = () => {
    return (
        <div className={styles.taxiHeader}>
            <div className={styles.leftSide}>
                <img src={taxiLogo} alt={"taxiLogo"}/>
                <img src={taxiLogo} alt={"taxiLogo"}/>
                <img src={taxiLogo} alt={"taxiLogo"}/>
                <img src={taxiLogo} alt={"taxiLogo"}/>
                <img src={taxiLogo} alt={"taxiLogo"}/>
                <img src={taxiLogo} alt={"taxiLogo"}/>
                <img src={taxiLogo} alt={"taxiLogo"}/>
                <img src={taxiLogo} alt={"taxiLogo"}/>
            </div>
            <h2 className={styles.taxiHeaderTitle}>
                Автомобили для такси в наличии
            </h2>
            <div className={styles.rightSide}>
                <img src={taxiLogo} alt={"taxiLogo"}/>
                <img src={taxiLogo} alt={"taxiLogo"}/>
                <img src={taxiLogo} alt={"taxiLogo"}/>
                <img src={taxiLogo} alt={"taxiLogo"}/>
                <img src={taxiLogo} alt={"taxiLogo"}/>
                <img src={taxiLogo} alt={"taxiLogo"}/>
                <img src={taxiLogo} alt={"taxiLogo"}/>
                <img src={taxiLogo} alt={"taxiLogo"}/>
            </div>
        </div>
    );
};

export default TaxiCreditHeader;