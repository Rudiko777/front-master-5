import React from "react";
import styles from './BenefitCredit.module.css'
import accept from '../../../images/credit/accept.svg'

export const BenefitItem = ({content, maxWidth})=>{
    return(
        <>
            <div className={styles.benefitItemBox}>
                <img className={styles.benefitItemImg} src={accept} alt={"Accept"}/>
                <h4 style={{maxWidth: `${maxWidth}px`}}>
                    {content}
                </h4>
            </div>
        </>
    )
}