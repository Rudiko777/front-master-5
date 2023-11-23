import React, {useState} from 'react';
import styles from './SelectClassAuto.module.css'
import stylesBtn from '../../../disposal/FutureCar/FutureCar.module.css'
import btnStyles from "../../../disposal/FutureCar/FutureCar.module.css";
import TaxiCard from "../taxiGrid/TaxiCard";
import cn from 'classnames'



const SelectClassAuto = () => {
    const[selectClassEco, setSelectClassEco] = useState(false)
    const[selectClassComfort, setSelectClassComfort] = useState(false)
    const[selectClassComfortBetter, setSelectClassComfortBetter] = useState(false)

    return (
        <div className={styles.selectBoxAll}>
            <div className={styles.selectBox}>
                <div className={styles.selectClass}>
                    <p className={styles.selectClassText}>
                        Выберите класс автомобиля
                    </p>
                    <button className={cn(styles.selectEco, {[styles.buttonActive] : selectClassEco === true})} onClick={()=> setSelectClassEco(!selectClassEco)}>
                        Эконом
                    </button>
                    <button className={cn(styles.selectСomfort, {[styles.buttonActive] : selectClassComfort === true})} onClick={()=> setSelectClassComfort(!selectClassComfort)}>
                        Комфорт
                    </button>
                    <button className={cn(styles.selectСomfortBest, {[styles.buttonActive] : selectClassComfortBetter === true})} onClick={()=> setSelectClassComfortBetter(!selectClassComfortBetter)}>
                        Комфорт +
                    </button>
                </div>
                <div className={styles.selectConfig}>
                    <div className={stylesBtn.selectWrapper} style={{width: "206px"}}>
                        <select className={btnStyles.futureCarKomplect} defaultValue={"Марка"}>
                            <option disabled>Марка</option>
                            <option >Lada</option>
                            <option >Audi</option>
                            <option >Mercedes-Benz</option>
                            <option >Volvo</option>
                        </select>
                    </div>
                    <div className={stylesBtn.selectWrapper} style={{width: "206px"}}>
                        <select className={btnStyles.futureCarKomplect} defaultValue={"Модель"}>
                            <option disabled>Модель</option>
                            <option >AM210</option>
                            <option >AM211</option>
                            <option >AM212</option>
                            <option >AM213</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.gridTaxiCars}>
                <TaxiCard
                    classAuto={"Эконом"}
                    title={"Lada Granta Liftback New"}
                    config={"1.6 MT Comfort"}
                    primaryPrice={"221 100"}
                    creditDay={82}
                    adv1={"Установка ГБО для экономии прибыли"}
                    adv2={"Оклейка и брендирование такси"}
                    adv3={"Комплект резины в подарок"}
                    adv4={"Рассрочка 0%"}
                />
                <TaxiCard
                    classAuto={"Эконом"}
                    title={"Lada Granta Liftback New"}
                    config={"1.6 MT Comfort"}
                    primaryPrice={"221 100"}
                    creditDay={82}
                    adv1={"Установка ГБО для экономии прибыли"}
                    adv2={"Оклейка и брендирование такси"}
                    adv3={"Комплект резины в подарок"}
                    adv4={"Рассрочка 0%"}
                />
                <TaxiCard
                    classAuto={"Эконом"}
                    title={"Lada Granta Liftback New"}
                    config={"1.6 MT Comfort"}
                    primaryPrice={"221 100"}
                    creditDay={82}
                    adv1={"Установка ГБО для экономии прибыли"}
                    adv2={"Оклейка и брендирование такси"}
                    adv3={"Комплект резины в подарок"}
                    adv4={"Рассрочка 0%"}
                />
                <TaxiCard
                    classAuto={"Эконом"}
                    title={"Lada Granta Liftback New"}
                    config={"1.6 MT Comfort"}
                    primaryPrice={"221 100"}
                    creditDay={82}
                    adv1={"Установка ГБО для экономии прибыли"}
                    adv2={"Оклейка и брендирование такси"}
                    adv3={"Комплект резины в подарок"}
                    adv4={"Рассрочка 0%"}
                />
                <TaxiCard
                    classAuto={"Эконом"}
                    title={"Lada Granta Liftback New"}
                    config={"1.6 MT Comfort"}
                    primaryPrice={"221 100"}
                    creditDay={82}
                    adv1={"Установка ГБО для экономии прибыли"}
                    adv2={"Оклейка и брендирование такси"}
                    adv3={"Комплект резины в подарок"}
                    adv4={"Рассрочка 0%"}
                />
                <TaxiCard
                    classAuto={"Эконом"}
                    title={"Lada Granta Liftback New"}
                    config={"1.6 MT Comfort"}
                    primaryPrice={"221 100"}
                    creditDay={82}
                    adv1={"Установка ГБО для экономии прибыли"}
                    adv2={"Оклейка и брендирование такси"}
                    adv3={"Комплект резины в подарок"}
                    adv4={"Рассрочка 0%"}
                />
            </div>
            <button className={styles.showMore} type={"submit"}>
                Показать еще
            </button>
        </div>
    );
};

export default SelectClassAuto;