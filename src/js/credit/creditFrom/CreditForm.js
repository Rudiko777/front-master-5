import React from "react";
import styles from './CreditForm.module.css'

export const CreditForm = ()=>{
    return(
        <>
            <div className={styles.creditForm}>
                <div className={styles.infoBox}>
                    <h1 className={styles.creditFormTitle}>
                        Получите<br/>специальную цену
                    </h1>
                    <span className={styles.date}>
                        Только до 10.10.21
                    </span>
                </div>
                <div className={styles.formBox}>
                    <div className={styles.inputBox}>
                        <input type={"text"} className={styles.formInputGeneral} placeholder={"Ваше имя"}/>
                        <input type={"tel"} className={styles.formInputGeneral} placeholder={"Ваш телефон"}/>
                        <button type={"submit"} className={styles.formButton}>
                            Получить предложение
                        </button>
                    </div>
                    <p className={styles.formTextMoreInfo}>
                        Нажимая кнопку “Получить предложение” Вы даете согласие на обработку своих <span>персональных данных</span>
                    </p>
                </div>
            </div>
        </>
    )
}