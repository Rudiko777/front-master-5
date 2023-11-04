import React from 'react';
import styles from './ParticipationProgramme.module.css'
import accept from '../../../images/disposal/acceptBig.svg'

const ParticipationProgramme = () => {
    return (
        <section className={styles.participationBox}>
            <div className="container">
                <h1 className={styles.participationTitle}>
                    Условия участия<br/>в программе
                </h1>
                <div className={styles.advantagesBox}>
                    <div className={styles.item}>
                        <div className={styles.itemMainBox}>
                            <img src={accept} alt={"Error"}/>
                            <h3 className={styles.advantagesContextTitle}>
                                Без подтверждения дохода
                            </h3>
                        </div>
                        <p className={styles.advantagesContextText}>
                            Чтобы получить кредит, вам нужны паспорт и водительское удостоверение. Банк не требует подтверждение дохода, информацию о продавце и оформление КАСКО.
                        </p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemMainBox}>
                            <img src={accept} alt={"Error"}/>
                            <h3 className={styles.advantagesContextTitle}>
                                Без первоначального взноса
                            </h3>
                        </div>
                        <p className={styles.advantagesContextText}>
                            Кредит выдаётся без первоначального взноса на карту, с которой без процентов можно снять наличные. Банк доставит карту бесплатно.
                        </p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemMainBox}>
                            <img src={accept} alt={"Error"}/>
                            <h3 className={styles.advantagesContextTitle}>
                                Без сложностей с регистрацией
                            </h3>
                        </div>
                        <p className={styles.advantagesContextText}>
                            Для регистрации автомобиля после покупки нужны только копии договора купли-продажи и паспорта транспортного средства. Да, это всё.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParticipationProgramme;