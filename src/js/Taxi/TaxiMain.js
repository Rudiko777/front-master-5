import React, {useState} from 'react';
import styles from './TaxiMain.module.css'
import {BreadCrumbs} from "../../components/breadCrumps";
import Accept from "./components/accept/Accept";
import {CreditForm} from "../credit/creditFrom/CreditForm";
import Advantage from "./components/advantage/Advantage";
import TaxiCreditHeader from "./components/taxiCredit/TaxiCreditHeader";
import SelectClassAuto from "./components/selectClassAuto/SelectClassAuto";
import TaxiCard from "./components/taxiGrid/TaxiCard";
import Better from "./components/+/Better";
import Disadvantages from "./components/-/Disadvantages";
import like from '../../images/page_1/header-main/likes.svg'
import DrawingButton from "./DrawingButton";

const TaxiMain = () => {
    // const [isDrawing, setIsDrawing] = useState(false);
    //
    // const handleDrawButtonClick = () => {
    //     setIsDrawing(!isDrawing);
    // };
    //
    // const handleMouseMove = (event) => {
    //     if (isDrawing) {
    //         // Получаем координаты курсора
    //         const x = event.clientX;
    //         const y = event.clientY;
    //
    //         // Устанавливаем позицию текста
    //         const textElement = document.getElementById('drawText');
    //         textElement.style.left = `${x}px`;
    //         textElement.style.top = `${y}px`;
    //     }
    // };

    return (
        <>
            <section className={styles.taxiMainSection}>
                <div className={styles.depend}>
                    <div className="container">
                        <BreadCrumbs/>
                        <h1 className={styles.taxiTitle}>
                            Специальное предложение<br/>на покупку авто под такси
                        </h1>
                        <div className={styles.acceptsBox}>
                            <Accept text={"Льготный автокредит от 1,9%"}/>
                            <Accept text={"Оклейка авто в подарок"}/>
                            <Accept text={"Акция действует до 13 сентября!"}/>
                            <Accept text={"Первоначальный взнос 0%"}/>
                        </div>
                    </div>
                </div>
            </section>
            <CreditForm/>
            <div className="container">
                <p className={styles.taxiSoloP}>
                    Хотите начать зарабатывать на себя? Приобретение собственного такси – один из самых доступных, простых, популярных и выгодных вариантов. А главное – в отличие от других видов бизнеса здесь не нужен большой стартовый капитал.
                </p>
                <div className={styles.advantageFirstRow}>
                    <Advantage itemNumber={1} title={"0% первый взнос"}/>
                    <Advantage itemNumber={2} title={<span>Одобрение кредита<br/>в течение 15-30 минут</span>}/>
                    <Advantage itemNumber={3} title={<span>Минимум документов<br/>для подачи заявки</span>}/>
                    <Advantage itemNumber={4} title={<span>Trade-in в качестве<br/>первоначального взноса</span>}/>
                    <Advantage itemNumber={5} title={<span>Оклейка и<br/>брендирование в подарок</span>}/>
                </div>
                <div className={styles.advantageSecondRow}>
                    <Advantage itemNumber={6} title={<span>Помощь в оформлении<br/>документов</span>}/>
                    <Advantage itemNumber={7} title={<span>Комплект резины<br/>в подарок</span>}/>
                    <Advantage itemNumber={8} title={<span>Оформление ОСАГО<br/>за 15 минут</span>}/>
                    <Advantage itemNumber={9} title={<span>Поможем оформить<br/>лицензию под такси</span>}/>
                </div>
            </div>
            <TaxiCreditHeader/>
            <div className="container">
                <SelectClassAuto/>
                <section className={styles.howMuchInTaxi}>
                    <h2 className={styles.howMuchInTaxiTitle}>
                        Сколько можно заработать на такси?
                    </h2>
                    <div className={styles.propertiesBox}>
                        <Better/>
                        <Disadvantages/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TaxiMain;