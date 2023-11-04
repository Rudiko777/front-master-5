import React from 'react';
import styles from './PurchaseTerms.module.css'
import accept from '../../../images/disposal/accept.svg'

const PurchaseTerms = () => {
    return (
        <section className={styles.purchaseTermsSection}>
            <div className={styles.purchaseTermsBox}>
                <h2 className={styles.purchaseTermsTitle}>
                    Условия покупки
                </h2>
                <div className={styles.purchaseTermsBoxInside}>
                    <div className={styles.purchaseTermsProperties}>
                        <img src={accept} alt={"Accept"}/>
                        <p className={styles.purchaseTermsPropertiesText}>
                            Взнос 0 ₽
                        </p>
                    </div>
                    <div className={styles.purchaseTermsProperties}>
                        <img src={accept} alt={"Accept"}/>
                        <p className={styles.purchaseTermsPropertiesText}>
                            Автокредит для медицинских работников
                        </p>
                    </div>
                    <div className={styles.purchaseTermsProperties}>
                        <img src={accept} alt={"Accept"}/>
                        <p className={styles.purchaseTermsPropertiesText}>
                            Срок кредита до 7 лет
                        </p>
                    </div>
                    <div className={styles.purchaseTermsProperties}>
                        <img src={accept} alt={"Accept"}/>
                        <p className={styles.purchaseTermsPropertiesText}>
                            Скидка 60 000 на покупку нового авто
                        </p>
                    </div>
                    <div className={styles.purchaseTermsProperties}>
                        <img src={accept} alt={"Accept"}/>
                        <p className={styles.purchaseTermsPropertiesText}>
                            Госпрограмма первое авто
                        </p>
                    </div>
                    <div className={styles.purchaseTermsProperties}>
                        <img src={accept} alt={"Accept"}/>
                        <p className={styles.purchaseTermsPropertiesText}>
                            10% скидки по Trade-in на покупку нового авто
                        </p>
                    </div>
                    <div className={styles.purchaseTermsProperties}>
                        <img src={accept} alt={"Accept"}/>
                        <p className={styles.purchaseTermsPropertiesText}>
                            Семейный автомобиль
                        </p>
                    </div>
                    <div className={styles.purchaseTermsProperties}>
                        <img src={accept} alt={"Accept"}/>
                        <p className={styles.purchaseTermsPropertiesText}>
                            Более 30 банков партнеров
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.necessaryDoc}>
                <h2 className={styles.necessaryDocTitle}>
                    Необходимые документы
                </h2>
                <div className={styles.necessaryDocBox}>
                    <div className={styles.purchaseTermsProperties}>
                        <img src={accept} alt={"Accept"}/>
                        <p className={styles.purchaseTermsPropertiesText}>
                            Паспорт
                        </p>
                    </div>
                    <div className={styles.purchaseTermsProperties}>
                        <img src={accept} alt={"Accept"}/>
                        <p className={styles.purchaseTermsPropertiesText}>
                            Водительское удостоверение
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PurchaseTerms;