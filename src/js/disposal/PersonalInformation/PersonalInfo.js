import React from 'react';
import styles from './PersonalInfo.module.css'
import btnStyles from '../FutureCar/FutureCar.module.css'

const PersonalInfo = () => {
    return (
        <section className={styles.personalInfo}>
            <div className={styles.box1}>
                <h2 className={styles.personalInfoTitle}>
                    Персональные данные
                </h2>
                <div className={styles.btnsBox}>
                    <input className={styles.btnName} placeholder={"Ваше имя"} type={"text"}/>
                    <input className={styles.btnTel} placeholder={"Номер телефона"} type={"tel"}/>
                </div>
                <div className={styles.personalInfoCopyright}>
                    Нажимая кнопку “Получить лучшие условия” Вы даете согласие на обработку своих <span>персональных данных</span>
                </div>
            </div>
            <div className={styles.box2}>
                <div className={btnStyles.selectWrapper}>
                    <select className={btnStyles.futureCarKomplect} defaultValue={"Получить подарок"}>
                        <option disabled>Получить подарок</option>
                        <option >Техосмотр</option>
                        <option >Замена резины</option>
                        <option >Скидка на следующую покупку</option>
                        <option >Страховка</option>
                    </select>
                </div>
                <button className={styles.getBetterCondition}>
                    Получить лучшие условия
                </button>
            </div>
        </section>
    );
};

export default PersonalInfo;