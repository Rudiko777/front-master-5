import React from 'react';
import styles from './AnyPageMain.module.css'
import {Link} from "react-router-dom";
import {FooterContacts} from "../page_1/footer/footer-files/footer-contacts/contacts-footer";

const AnyPageFooter = () => {
    return (
        <div className={styles.footerBox}>
            <div className={styles.itemFooter}>
                <h2>
                    О нас
                </h2>
                <div className={styles.infoText}>
                    Мы молодая компания которая занимается пррдажей автомобилей
                </div>
            </div>
            <div className={styles.itemFooter}>
                <h2>
                    Ссылки на разделы
                </h2>
                <Link to={"/"}>
                    Главная
                </Link>
                <Link to={"/credit"}>
                    Кредит
                </Link>
                <Link to={"/disposal"}>
                    Утилизация
                </Link>
                <Link to={"/Auth"}>
                    Авторизация
                </Link>
            </div>
            <div className={styles.itemFooter}>
                <h2>
                    Магазин
                </h2>
                <Link to={"/bmw"}>
                    BMW
                </Link>
                <Link to={"/mercedes"}>
                    Mercedes-Benz
                </Link>
                <Link to={"/audi"}>
                    Audi
                </Link>
                <Link to={"/porsche"}>
                    Porsche
                </Link>
            </div>
            <div className={styles.itemFooter}>
                <h2>
                    Контакты
                </h2>
                <FooterContacts/>
            </div>
        </div>
    );
};

export default AnyPageFooter;