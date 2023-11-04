import React from 'react';
import styles from './AnyPageMain.module.css'
import car from '../../images/taxi/ad5.svg'
import TaxiCard from "../Taxi/components/taxiGrid/TaxiCard";

const AnyPageMain = () => {
    return (
        <>
            <div className={"container"}>
                <div className={styles.gridBox}>
                    <div className={styles.gridItem1}>
                        <img src={car} alt={"Error"}/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, commodi eveniet incidunt ipsam itaque laborum, libero molestias nobis, quidem quo sapiente sunt tempore temporibus totam ullam voluptatem voluptatum! Doloremque, non.
                    </div>
                    <div className={styles.gridItem2}>
                        <img src={car} alt={"Error"}/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, commodi eveniet incidunt ipsam itaque laborum, libero molestias nobis, quidem quo sapiente sunt tempore temporibus totam ullam voluptatem voluptatum! Doloremque, non.
                    </div>
                    <div className={styles.gridItem3}>
                        <img src={car} alt={"Error"}/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, commodi eveniet incidunt ipsam itaque laborum, libero molestias nobis, quidem quo sapiente sunt tempore temporibus totam ullam voluptatem voluptatum! Doloremque, non.
                    </div>
                    <div className={styles.gridItem4}>
                        <img src={car} alt={"Error"}/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, commodi eveniet incidunt ipsam itaque laborum, libero molestias nobis, quidem quo sapiente sunt tempore temporibus totam ullam voluptatem voluptatum! Doloremque, non.
                    </div>
                    <div className={styles.gridItem5}>
                        <img src={car} alt={"Error"}/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, commodi eveniet incidunt ipsam itaque laborum, libero molestias nobis, quidem quo sapiente sunt tempore temporibus totam ullam voluptatem voluptatum! Doloremque, non.
                    </div>
                    <div className={styles.gridItem6}>
                        <img src={car} alt={"Error"}/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, commodi eveniet incidunt ipsam itaque laborum, libero molestias nobis, quidem quo sapiente sunt tempore temporibus totam ullam voluptatem voluptatum! Doloremque, non.
                    </div>
                    <div className={styles.gridItem7}>
                        <img src={car} alt={"Error"}/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, commodi eveniet incidunt ipsam itaque laborum, libero molestias nobis, quidem quo sapiente sunt tempore temporibus totam ullam voluptatem voluptatum! Doloremque, non.
                    </div>
                </div>
                <div className={styles.gridCars} style={{marginTop: "100px"}}>
                    <div className={styles.itemCar}>

                    </div>
                    <div className={styles.itemCar2}>

                    </div>
                    <div className={styles.itemCar3}>

                    </div>
                    <div className={styles.itemCar4}>

                    </div>
                    <div className={styles.itemCar5}>

                    </div>
                    <div className={styles.itemCar6}>

                    </div>
                    <div className={styles.itemCar7}>

                    </div>
                    <div className={styles.itemCar8}>

                    </div>
                </div>
                <div className={styles.contact}>
                    <h1 className={styles.contactTitle}>
                        Contact
                    </h1>
                    <form action={"#"} className={styles.form}>
                        <input className={styles.contactName} placeholder={"Имя"} type={"text"}/>
                        <input className={styles.contactLastName} placeholder={"Фамилия"} type={"text"}/>
                        <input className={styles.contactEmail} placeholder={"Почта"} type={"mailto"}/>
                        <input className={styles.contactTel} placeholder={"Телефон"} type={"tel"}/>
                        <input className={styles.contactMessage} placeholder={"Напишите ваше сообщение здесь"} type={"text"}/>
                        <button className={styles.submitBtn} type={"submit"}>
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AnyPageMain;