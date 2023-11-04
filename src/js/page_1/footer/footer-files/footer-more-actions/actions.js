import React from "react";
import styles from './actions.module.css'

export const ActionsList = ()=>{
    return(
        <div className={styles.box}>
            <ul className={styles.actionsList}>
                <li className={styles.actionsListItem}>
                    <a className={styles.actionsListItemLink} href={"#"}>
                        Экспресс-кредит
                    </a>
                </li>
                <li className={styles.actionsListItem}>
                    <a className={styles.actionsListItemLink} href={"#"}>
                        Семейный автомобиль
                    </a>
                </li>
                <li className={styles.actionsListItem}>
                    <a className={styles.actionsListItemLink} href={"#"}>
                        Первый автомобиль
                    </a>
                </li>
                <li className={styles.actionsListItem}>
                    <a className={styles.actionsListItemLink} href={"#"}>
                        Работникам медицины
                    </a>
                </li>
                <li className={styles.actionsListItem}>
                    <a className={styles.actionsListItemLink} href={"#"}>
                        Рассрочка
                    </a>
                </li>
                <li className={styles.actionsListItem}>
                    <a className={styles.actionsListItemLink} href={"#"}>
                        Trade-in
                    </a>
                </li>
            </ul>
        </div>
    )
}