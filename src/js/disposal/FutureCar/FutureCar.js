import React from 'react';
import styles from './FutureCar.module.css'
import CheckBox from "../../../components/CheckBox";

const FutureCar = () => {
    return (
        <section className={styles.futureCarBox}>
            <div className={styles.selectBox}>
                <div className={styles.selectBoxFirst}>
                    <h2 className={styles.futureCarTitle}>
                        Ваш будущий автомобиль
                    </h2>
                    <div className={styles.futureCarBoxBtns}>
                        <div className={styles.selectWrapper}>
                            <select className={styles.futureCarMarks} defaultValue={"Марка"}>
                                <option disabled>Марка</option>
                                <option >BMW</option>
                                <option >Mercedes-Benz</option>
                                <option >Audi</option>
                                <option >Porsche</option>
                            </select>
                        </div>
                        <div className={styles.selectWrapper}>
                            <select className={styles.futureCarModel} defaultValue={"Модель"}>
                                <option disabled>Модель</option>
                                <option >m5f90</option>
                                <option >e63s</option>
                                <option >rs7</option>
                                <option >911</option>
                            </select>
                        </div>
                        <div className={styles.selectWrapper}>
                            <select className={styles.futureCarKomplect} defaultValue={"Комплектация"}>
                                <option disabled>Комплектация</option>
                                <option >AM210</option>
                                <option >AM211</option>
                                <option >AM212</option>
                                <option >AM213</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={styles.selectBoxSecond}>
                    <h4 className={styles.selectBoxSecondTitle}>
                        Kia Comfort 1.4 100 л.с. 6MT 2WD (2020)
                    </h4>
                    <p className={styles.priceWithSale}>
                        Цена со скидками
                    </p>
                    <span className={styles.selectBoxSecondPrice}>
                        2 200 000 ₽
                    </span>
                    <p className={styles.basicPrice}>
                        Базовая цена
                    </p>
                    <span className={styles.selectBoxSecondBasicPrice}>
                        2 500 000 ₽
                    </span>
                    <div className={styles.selectBoxSecondRedBox}>
                        <p>Платеж</p>
                        <span>70 000 ₽/мес.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FutureCar;