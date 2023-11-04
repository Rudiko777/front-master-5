import React from 'react';
import styles from './TraideIn.module.css'
import btnStyles from '../FutureCar/FutureCar.module.css'
import {Diller} from "../../page_1/footer/footer-files/diller/footer-diller";
import CheckBox from "../../../components/CheckBox";
import cn from "classnames";

const TraideIn = () => {
    return (
        <section className={styles.tradeInBox}>
            <div className={styles.box1}>
                <h2 className={styles.title}>
                    Программа Trade-in
                </h2>
                <div className={btnStyles.selectWrapper} style={{marginTop: "28px"}}>
                    <select className={btnStyles.futureCarMarks} defaultValue={"Марка"}>
                        <option disabled>Марка</option>
                        <option >BMW</option>
                        <option >Mercedes-Benz</option>
                        <option >Audi</option>
                        <option >Porsche</option>
                    </select>
                </div>
                <div className={btnStyles.selectWrapper}>
                    <select className={btnStyles.futureCarModel} defaultValue={"Модель"}>
                        <option disabled>Модель</option>
                        <option >m5f90</option>
                        <option >e63s</option>
                        <option >rs7</option>
                        <option >911</option>
                    </select>
                </div>
            </div>
            <div className={styles.box2}>
                <CheckBox
                    label={<span style={{width: "300px"}}>Акция “Trade-in или Утилизация”<br/>скидка 75 000 ₽</span>}
                    name={"TradeIn"}
                    id={"TradeIn"}
                    htmlFor={"TradeIn"}
                />
                <div className={styles.smallBtnBox}>
                    <div className={cn(btnStyles.selectWrapper, styles.btnSmallWidth)}>
                        <select className={btnStyles.futureCarModel} defaultValue={"Год выпуска"}>
                            <option disabled>Год выпуска</option>
                            <option >2000</option>
                            <option >2001</option>
                            <option >2002</option>
                            <option >2003</option>
                            <option >2004</option>
                            <option >2005</option>
                            <option >2006</option>
                            <option >2007</option>
                            <option >2008</option>
                            <option >2009</option>
                            <option >2010</option>
                            <option >2011</option>
                            <option >2012</option>
                            <option >2013</option>
                            <option >2014</option>
                            <option >2015</option>
                            <option >2016</option>
                            <option >2017</option>
                            <option >2018</option>
                            <option >2019</option>
                            <option >2020</option>
                            <option >2021</option>
                            <option >2022</option>
                            <option >2023</option>
                        </select>
                    </div>
                    <div className={cn(btnStyles.selectWrapper, styles.btnSmallWidth)}>
                        <select className={btnStyles.futureCarModel} defaultValue={"Коробка передач"}>
                            <option disabled>Коробка передач</option>
                            <option >A210</option>
                            <option >B210</option>
                            <option >C210</option>
                            <option >D210</option>
                            <option >E210</option>
                            <option >F210</option>
                            <option >G210</option>
                        </select>
                    </div>
                </div>
                <div className={btnStyles.selectWrapper} style={{marginTop: "10px"}}>
                    <select className={btnStyles.futureCarKomplect} defaultValue={"Комплектация"}>
                        <option disabled>Комплектация</option>
                        <option >AM210</option>
                        <option >AM211</option>
                        <option >AM212</option>
                        <option >AM213</option>
                    </select>
                </div>
            </div>
        </section>
    );
};

export default TraideIn;