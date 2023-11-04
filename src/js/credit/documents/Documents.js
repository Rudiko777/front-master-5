import React from "react";
import styles from './Documents.module.css'
import arrow from '../../../images/credit/arrowRed.svg'
import documents from '../../../images/credit/documents.png'

export const Documents = ()=>{
    return(
        <>
            <section className={styles.documentsBox}>
                <div className={styles.documentsText}>
                    <h1 className={styles.documentsTitle}>
                        Оформить ОСАГО легко и удобно
                    </h1>
                    <p className={styles.documentsInfo}>
                        Полис ОСАГО - это обязательное страхование автогражданской ответственности за причинение вреда жизни, здоровью и имуществу третьих лиц при эксплуатации автомобиля.
                    </p>
                    <h3 className={styles.documentsAdvantages}>
                        Преимущества электронного полиса
                    </h3>
                    <div className={styles.advantagesBox}>
                        <div className={styles.advantagesItem}>
                            <img className={styles.arrowImg} src={arrow} alt={"Arrow"}/>
                            <p className={styles.advantageText}>
                                Нет необходимости посещать офис для оформления или проделения полиса ОСАГО
                            </p>
                        </div>
                        <div className={styles.advantagesItem}>
                            <img className={styles.arrowImg} src={arrow} alt={"Arrow"}/>
                            <p className={styles.advantageText}>
                                Отсутствуют риски потерять бумажный эксземпляр страховки. Полис всегда в почтовом ящике клиента
                            </p>
                        </div>
                        <div className={styles.advantagesItem}>
                            <img className={styles.arrowImg} src={arrow} alt={"Arrow"}/>
                            <p className={styles.advantageText}>
                                100% гарантия достоверности полиса (аналог бумажного экземпляра)
                            </p>
                        </div>
                        <div className={styles.advantagesItem}>
                            <img className={styles.arrowImg} src={arrow} alt={"Arrow"}/>
                            <p className={styles.advantageText}>
                                Надежная защита сведений клиента и его операций по оформлению и оплате страховки. Отсутствует риск мошенничества (только отобранные страховщики)
                            </p>
                        </div>
                    </div>
                    <button className={styles.acceptPolis}>
                        Оформить полис
                    </button>
                </div>
                <img className={styles.documentsImg} src={documents} alt={"Documents"}/>
            </section>
        </>
    )
}