import React from 'react';
import styles from './TaxiGrid.module.css'
import like from '../../../../images/taxi/taxiLike.svg'
import stat from '../../../../images/taxi/taxiStat.svg'
import taxiCar from '../../../../images/taxi/taxiCardCar.png'
import present from '../../../../images/taxi/present.svg'


const TaxiCard = ({classAuto, title, config, primaryPrice, creditDay, adv1, adv2, adv3, adv4}) => {
    return (
        <div className={styles.cardBox}>
            <div className={styles.cardBoxHeader}>
                <div className={styles.ImgBox}>
                    <img src={like} alt={"LikeCar"}/>
                    <img src={stat} alt={"StatCar"}/>
                </div>
                <button className={styles.cardButtonHeader} type={"submit"}>
                    {classAuto}
                </button>
            </div>
            <img src={taxiCar} alt={"TaxiCar"} className={styles.taxiCar}/>
            <h3 className={styles.taxiCarName}>
                {title}
            </h3>
            <h3 className={styles.taxiCarConfig}>
                {config}
            </h3>
            <p className={styles.primaryPrice}>
                от {primaryPrice} ₽
            </p>
            <h3 className={styles.creditDay}>
                от {creditDay} ₽/день
            </h3>
            <div className={styles.lastInfo}>
                <div className={styles.advantagesBox}>
                    <div className={styles.lastInfoItem}>
                        <img src={present} alt={"Present"}/>
                        <p className={styles.lastInfoItemText}>
                            {adv1}
                        </p>
                    </div>
                    <div className={styles.lastInfoItem}>
                        <img src={present} alt={"Present"}/>
                        <p className={styles.lastInfoItemText}>
                            {adv2}
                        </p>
                    </div>
                    <div className={styles.lastInfoItem}>
                        <img src={present} alt={"Present"}/>
                        <p className={styles.lastInfoItemText}>
                            {adv3}
                        </p>
                    </div>
                    <div className={styles.lastInfoItem}>
                        <img src={present} alt={"Present"}/>
                        <p className={styles.lastInfoItemText}>
                            {adv4}
                        </p>
                    </div>
                </div>
                <div className={styles.btnsBox}>
                    <button className={styles.btnMoreInfo} type={"submit"}>
                        Подробнее
                    </button>
                    <button className={styles.btnSubmitApp} type={"submit"}>
                        Оставить заявку
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaxiCard;