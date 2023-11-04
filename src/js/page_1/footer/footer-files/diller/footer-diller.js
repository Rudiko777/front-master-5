import React from "react";
import styles from './diller.module.css'


export const Diller = ()=>{
    return(
        <div className={styles.footerDillerBox}>
            <p className={styles.footerFillerCopy}>© 2021 Автосалон "ABC AUTO". Официальный дилер</p>
            <div className={styles.footerDillerLinkBox}>
                <a className={styles.footerDillerPolitic}>
                    Политика конфиденциальности
                </a>
                <a className={styles.footerDillerUsers}>
                    Пользовательское соглашение
                </a>
            </div>
        </div>
    )
}