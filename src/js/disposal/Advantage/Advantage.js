import React from 'react';
import styles from './Advantage.module.css'
import cond1 from '../../../images/disposal/cond1.png'
import cond2 from '../../../images/disposal/cond2.png'
import cond3 from '../../../images/disposal/cond3.png'
import cond4 from '../../../images/disposal/cond4.png'
import cond5 from '../../../images/disposal/cond5.png'
import cond6 from '../../../images/disposal/cond6.png'
import cond7 from '../../../images/disposal/cond7.png'
import cond8 from '../../../images/disposal/cond8.png'

const Advantage = () => {
    return (
        <section className={styles.advantegeSection}>
            <h1 className={styles.title}>
                Преимущества автокредита
            </h1>
            <div className={styles.gridBox}>
                <div className={styles.item}>
                    <img src={cond1} alt={"Error"}/>
                    <p className={styles.itemContext}>
                        40 кредитных программ на выбор
                    </p>
                </div>
                <div className={styles.item}>
                    <img src={cond2} alt={"Error"}/>
                    <p className={styles.itemContext}>
                        40 кредитных программ на выбор
                    </p>
                </div>
                <div className={styles.item}>
                    <img src={cond3} alt={"Error"}/>
                    <p className={styles.itemContext}>
                        40 кредитных программ на выбор
                    </p>
                </div>
                <div className={styles.item}>
                    <img src={cond4} alt={"Error"}/>
                    <p className={styles.itemContext}>
                        40 кредитных программ на выбор
                    </p>
                </div>
                <div className={styles.item}>
                    <img src={cond5} alt={"Error"}/>
                    <p className={styles.itemContext}>
                        40 кредитных программ на выбор
                    </p>
                </div>
                <div className={styles.item}>
                    <img src={cond6} alt={"Error"}/>
                    <p className={styles.itemContext}>
                        40 кредитных программ на выбор
                    </p>
                </div>
                <div className={styles.item}>
                    <img src={cond7} alt={"Error"}/>
                    <p className={styles.itemContext}>
                        40 кредитных программ на выбор
                    </p>
                </div>
                <div className={styles.item}>
                    <img src={cond8} alt={"Error"}/>
                    <p className={styles.itemContext}>
                        40 кредитных программ на выбор
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Advantage;