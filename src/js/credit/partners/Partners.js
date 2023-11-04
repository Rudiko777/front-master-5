import React from "react";
import styles from './Partners.module.css'
import part1 from '../../../images/credit/partner1.png'
import part2 from '../../../images/credit/partner2.png'
import part3 from '../../../images/credit/partner3.png'
import part4 from '../../../images/credit/partner4.svg'

export const Partners = ()=>{
    return(
        <>
            <section className={styles.ourPartners}>
                <h1 className={styles.ourPartnersTitle}>
                    Наши партнеры
                </h1>
                <div className={styles.PartnersBox}>
                    <div className={styles.PartnerItem}>
                        <img className={styles.PartnerImg} src={part1} alt={"Error"}/>
                    </div>
                    <div className={styles.PartnerItem}>
                        <img className={styles.PartnerImg} src={part2} alt={"Error"}/>
                    </div>
                    <div className={styles.PartnerItem}>
                        <img className={styles.PartnerImg} src={part3} alt={"Error"}/>
                    </div>
                    <div className={styles.PartnerItem}>
                        <img className={styles.PartnerImgInd} src={part4} alt={"Error"}/>
                    </div>
                </div>
            </section>
        </>
    )
}