import React from "react";
import styles from './Insurance.module.css'
import zont from '../../../images/credit/zont.png'
import blueCar from '../../../images/credit/blueCar.png'
import osago from '../../../images/credit/osago.png'
import radCar from '../../../images/credit/redCar.png'

export const Insurance = ()=>{
    return(
        <>
            <div className={styles.InsuranceBox}>
                <div className={styles.Kasko}>
                    <img className={styles.zont} src={zont} alt={"Error"}/>
                    <img className={styles.blueCar} src={blueCar} alt={"Error"}/>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactInfoText}>
                            <h3>
                                Каско
                            </h3>
                            <p>
                                Страхование транспортного средства от ущерба, хищения и угона
                            </p>
                        </div>
                        <button className={styles.count}>
                            Рассчитать
                        </button>
                    </div>
                </div>
                <div className={styles.Osago}>
                    <img className={styles.osago} src={osago} alt={"Error"}/>
                    <img className={styles.radCar} src={radCar} alt={"Error"}/>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactInfoText}>
                            <h3>
                                Осаго
                            </h3>
                            <p>
                                Обязательное страхование автогражданской ответственности
                            </p>
                        </div>
                        <button className={styles.count}>
                            Рассчитать
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}