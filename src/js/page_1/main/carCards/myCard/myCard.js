import React from "react";
import car from '../../../../../images/page_1/main/carBack.png'
import styles from './myCard.module.css'
import like from '../../../../../images/page_1/header-main/likes.svg'
import stats from '../../../../../images/page_1/header-main/comparisons.svg'
import back from "../../../../../images/page_1/main/cardBack.png"
import offerBack from "../../../../../images/page_1/main/offerBack.png"
import gift from '../../../../../images/page_1/main/gift.svg'
import engine from '../../../../../images/page_1/main/engine.svg'
import gas from '../../../../../images/page_1/main/gas.svg'
import speed from '../../../../../images/page_1/main/speed.svg'
import time from '../../../../../images/page_1/main/time.svg'
import {Stat} from "./stat";
import info1 from "../../../../../images/page_1/main/reserv.svg"
import info2 from "../../../../../images/page_1/main/buy.svg"
import info3 from "../../../../../images/page_1/main/moreInfo.svg"
import parentStyles from '../carCards.module.css'
import cn from "classnames";

export const MyCard = ({title, char, price, credit, isStyles})=>{
    return(
        <div className={cn(styles.cardBox, isStyles)}>
            <img className={styles.cardBack} src={back} alt={"backGround"}/>
            <img className={styles.carBack} src={car} alt={"carBackGround"}/>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardHeaderTitle}>
                    {title}<br/>{char}
                </h3>
                <div className={styles.cardHeaderLogos}>
                    <img className={styles.cardHeaderLike} src={like}/>
                    <img className={styles.cardHeaderStats} src={stats}/>
                </div>
            </div>
            <div className={styles.offer}>
                <div className={styles.offerBackImgBox}>
                    <img className={styles.offerBack} src={offerBack} alt={"offerBack"}/>
                    <p className={styles.offerBackText}>Предложение дня</p>
                </div>
                <p className={styles.offerBenefit}>
                    Выгода<br/>до 300 000 ₽
                </p>
            </div>
            <div className={styles.equipmentBox}>
                <div className={styles.giftBox}>
                    <img className={styles.giftImg} src={gift} alt={"Equipment"}/>
                </div>
                <p className={styles.equipmentTxt}>
                    Оборудование<br/><span className={styles.inGift}>в подарок</span>
                </p>
            </div>
            <div className={styles.equipmentBox}>
                <div className={styles.giftBox}>
                    <img className={styles.giftImg} src={gift} alt={"Equipment"}/>
                </div>
                <p className={styles.equipmentTxt}>
                    Каско<br/><span className={styles.inGift}>в подарок</span>
                </p>
            </div>
            <div className={styles.equipmentBox}>
                <div className={styles.giftBox}>
                    <img className={styles.giftImg} src={gift} alt={"Equipment"}/>
                </div>
                <p className={styles.equipmentTxt}>
                    Комплект<br/>резины<br/><span className={styles.inGift}>в подарок</span>
                </p>
            </div>

            <div className={styles.infoPrice}>
                <p className={styles.price}>
                    от {price}
                </p>
                <p className={styles.credit}>
                    <span>Кредит </span>
                    <span className={styles.creditValue}>
                        от {credit}/мес.
                    </span>
                </p>
            </div>

            <div className={styles.Stats}>
                <Stat logo={engine} text={"115 л.с."}/>
                <Stat logo={gas} text={"5.3 л/км"}/>
                <Stat logo={speed} text={"189 км/ч"}/>
                <Stat logo={time} text={"10,3 c."}/>
            </div>


            <div className={styles.footerInfo}>
                <div className={styles.box1}>
                    <a href={"#"}>
                        <div className={styles.footerInfo1}>
                            <img className={styles.footerInfoImg} src={info1} alt={"Error"}/>
                            <p className={styles.footerInfoText1}>
                                Резерв онлайн
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles.box2}>
                    <a href={"#"}>
                        <div className={styles.footerInfo2}>
                            <img className={styles.footerInfoImg} src={info2} alt={"Error"}/>
                            <p className={styles.footerInfoText2}>
                                Купить
                            </p>
                        </div>
                    </a>
                </div>
                <div className={styles.box3}>
                    <a href={"#"}>
                        <div className={styles.footerInfo3}>
                            <img className={styles.footerInfoImg} src={info3} alt={"Error"}/>
                            <p className={styles.footerInfoText3}>
                                Подробнее
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div className={styles.border}></div>
        </div>
    )
}