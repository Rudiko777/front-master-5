import React from "react";
import styles from './CardCredit.module.css'
import accept from '../../../images/credit/acceptSmall.svg'

export const CardCredit = ()=>{
    return(
        <>
            <section className={styles.creditCardsBox}>
                <h1 className={styles.cardCreditTitle}>
                    Выбрать свое КАСКО просто и выгодно
                </h1>
                <div className={styles.cardsList}>
                    <div className={styles.cardItem}>
                        <h4 className={styles.cardTitle}>
                            Доступное КАСКО
                        </h4>
                        <ul className={styles.cardAdvantageList}>
                            <li className={styles.cardAdvantageItem}>
                                <img className={styles.acceptImg} src={accept} alt={"Error"}/>
                                <p className={styles.cardAdvantageItemText}>
                                    Единый тариф независимо от стажа и возраста - 1,9%
                                </p>
                            </li>
                            <li className={styles.cardAdvantageItem}>
                                <img className={styles.acceptImg} src={accept} alt={"Error"}/>
                                <p className={styles.cardAdvantageItemText}>
                                    Защита по основным рискам: угон, полная гибель, ДТП с участием третьих лиц, в котором установлена вина клиента
                                </p>
                            </li>
                            <li className={styles.cardAdvantageItem}>
                                <img className={styles.acceptImg} src={accept} alt={"Error"}/>
                                <p className={styles.cardAdvantageItemText}>
                                    Необходимый уровень защиты по доступной цене
                                </p>
                            </li>
                            <li className={styles.cardAdvantageItem}>
                                <img className={styles.acceptImg} src={accept} alt={"Error"}/>
                                <p className={styles.cardAdvantageItemText}>
                                    Нет ограничения по допущенным к управлению
                                </p>
                            </li>
                        </ul>
                        <button className={styles.cardBtn} type={"submit"}>
                            Получить полис
                        </button>
                    </div>
                    <div className={styles.cardItem}>
                        <h4 className={styles.cardTitle}>
                            Оптимальное КАСКО
                        </h4>
                        <ul className={styles.cardAdvantageList2}>
                            <li className={styles.cardAdvantageItem}>
                                <img className={styles.acceptImg} src={accept} alt={"Error"}/>
                                <p className={styles.cardAdvantageItemText}>
                                    Выгода до 20% от стоимости полного КАСКО
                                </p>
                            </li>
                            <li className={styles.cardAdvantageItem}>
                                <img className={styles.acceptImg} src={accept} alt={"Error"}/>
                                <p className={styles.cardAdvantageItemText}>
                                    Полная страховая защита по рискам "Угон" и "Ущерб"
                                </p>
                            </li>
                            <li className={styles.cardAdvantageItem}>
                                <img className={styles.acceptImg} src={accept} alt={"Error"}/>
                                <p className={styles.cardAdvantageItemText}>
                                    Первый страховой случай покрывается без ограничений
                                </p>
                            </li>
                            <li className={styles.cardAdvantageItem}>
                                <img className={styles.acceptImg} src={accept} alt={"Error"}/>
                                <p className={styles.cardAdvantageItemText}>
                                    Со 2-го страхового случая применяется безусловная франшиза
                                </p>
                            </li>
                            <li className={styles.cardAdvantageItem}>
                                <img className={styles.acceptImg} src={accept} alt={"Error"}/>
                                <p className={styles.cardAdvantageItemText}>
                                    Индивидуальный выгодный тариф для каждого клиента
                                </p>
                            </li>
                        </ul>
                        <button className={styles.cardBtn} type={"submit"}>
                            Получить полис
                        </button>
                    </div>
                    <div className={styles.cardItem}>
                        <h4 className={styles.cardTitle}>
                            Полное КАСКО
                        </h4>
                        <ul className={styles.cardAdvantageList3}>
                            <li className={styles.cardAdvantageItem}>
                                <img className={styles.acceptImg} src={accept} alt={"Error"}/>
                                <p className={styles.cardAdvantageItemText}>
                                    Полная защита по рискам "Угон" и "Ущерб"
                                </p>
                            </li>
                            <li className={styles.cardAdvantageItem}>
                                <img className={styles.acceptImg} src={accept} alt={"Error"}/>
                                <p className={styles.cardAdvantageItemText}>
                                    Возможность выбора франшизы при покупке за наличные
                                </p>
                            </li>
                            <li className={styles.cardAdvantageItem}>
                                <img className={styles.acceptImg} src={accept} alt={"Error"}/>
                                <p className={styles.cardAdvantageItemText}>
                                    Индивидуальный выгодный тариф для каждого клиента
                                </p>
                            </li>
                        </ul>
                        <button className={styles.cardBtn} type={"submit"}>
                            Получить полис
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}