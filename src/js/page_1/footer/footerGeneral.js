import React from "react";
import MyContacts from "./footer-files/my_contacts";
import {FooterA} from "./footer-files/footer-hki/fotter-h";
import {ActionsList} from "./footer-files/footer-more-actions/actions";
import {FooterContacts} from "./footer-files/footer-contacts/contacts-footer";
import {Diller} from "./footer-files/diller/footer-diller";
import yandex from '../../../images/page_1/footer/yandex.jpg'
import {Link} from "react-router-dom";
import styles from './footerGeneral.module.css'
import {CarList} from "./footer-files/footer-cars-link-box/footer-cars-link";
import {FooterInteractive} from "./footer-files/footer-interactive/footer-blogs";


class FooterMain extends React.Component{
    render() {
        return(
            <div className={"footer-containerFluid"}>
                <div className="footer-head-line">
                    <div className="container">
                        <nav className="footer-navigation">
                            <ul className="footer-nav-list">
                                <li className="footer-nav-item">
                                    <a className={"footer-nav-item-link"} href={"#"}>
                                        Каталог авто
                                    </a>
                                </li>
                                <li className="footer-nav-item">
                                    <a className={"footer-nav-item-link"} href={"#"}>
                                        Авто с пробегом
                                    </a>
                                </li>
                                <li className="footer-nav-item">
                                    <a className={"footer-nav-item-link"} href={"#"}>
                                        Кредит и рассрочка
                                    </a>
                                </li>
                                <li className="footer-nav-item">
                                    <a className={"footer-nav-item-link"} href={"#"}>
                                        Спецпредложения
                                    </a>
                                </li>
                                <li className="footer-nav-item">
                                    <a className={"footer-nav-item-link"} href={"#"}>
                                        Такси в кредит
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className="container">
                        <ul className={styles.footerListLinks}>
                            <li className={styles.footerListLinkItem1}>
                                <FooterA name={"Каталог авто"} />
                                <CarList />
                            </li>
                            <li className={styles.footerListLinkItem}>
                                <FooterA name={"Кредит и рассрочка"} />
                                <ActionsList />
                            </li>
                            <li className={styles.footerListLinkItem}>
                                <FooterA name={"Контакты"} />
                                <FooterContacts />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerOffDiller}>
                    <div className="container">
                        <div className={styles.footerOffDillerFlex}>
                            <Diller />
                            <div className={styles.footerDillerTXT}>
                                <p>Обращаем Ваше внимание на то, что данный интернет-сайт
                                носит исключительно информационный характер и ни при
                                каких условиях не является публичной офертой, определяемой
                                положениями Статьи 437 Гражданского кодекса
                                    Российской Федерации.</p>
                            </div>
                            <img className={"footer-img-yandex"} src={yandex}/>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBlogs}>
                    <div className={'container'}>
                        <FooterInteractive />
                    </div>
                </div>
                <MyContacts />
            </div>
        )
    }
}

export default FooterMain