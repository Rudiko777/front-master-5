import React, {useRef, useState} from 'react';
import styles from './BuyInCredit.module.css'
import CheckBox from "../../../components/CheckBox";
import sber from '../../../images/disposal/sber.svg'
import vtb from '../../../images/disposal/vtb.svg'
import alpha from '../../../images/disposal/alpha.svg'
import cn from 'classnames'


const BuyInCredit = () => {
    const[number, setNumber] = useState('6 мес.')
    const inputRangeRef = useRef(null)
    const[sberBankSelect, setSberBankSelect] = useState(false)
    const[vtbBankSelect, setVTBBankSelect] = useState(false)
    const[alphaBankSelect, setAlphaBankSelect] = useState(false)

    // console.log(inputRangeRef.current.value)

    const handleClick = ()=>{
        setNumber(`${inputRangeRef.current.value} мес.`)
    }

    return (
        <section className={styles.buyInCredit}>
            <div className={styles.box}>
                <div className={styles.boxItemFirst}>
                    <h2 className={styles.inputBoxTitle}>
                        Купить в кредит
                    </h2>
                    <div className={styles.inputBoxContent}>
                        <div className={styles.inputBoxContentInfo}>
                            <p className={styles.months}>
                                Cрок кредита, месяцев
                            </p>
                            <div className={styles.number}>
                                {number}
                            </div>
                        </div>
                        <div className={styles.inputBox}>
                            <input
                                ref={inputRangeRef}
                                type={"range"}
                                min={6}
                                defaultValue={6}
                                max={84}
                                step={1}
                                id={"inputRange"}
                                onInput={()=> handleClick()}
                                className={styles.inputReal}/>
                            <span className={styles.input1}>6</span>
                            <span className={styles.input2}>12</span>
                            <span className={styles.input3}>24</span>
                            <span className={styles.input4}>36</span>
                            <span className={styles.input5}>48</span>
                            <span className={styles.input6}>60</span>
                            <span className={styles.input7}>72</span>
                            <span className={styles.input8}>84</span>
                        </div>
                    </div>
                </div>
                <div className={styles.boxItemSecond}>
                    <div className={styles.checkboxBox}>
                        <CheckBox label={
                            <span>
                                Скидка от руководителя -10% от цены авто
                            </span>}
                                  id={"DisposalCheck1"}
                                  name={"DisposalCheck1"}
                                  htmlFor={"DisposalCheck1"}
                        />
                        <CheckBox label={
                            <span>
                                Акция “Выгодный кредит” Скидка 30 000 ₽
                            </span>}
                                  id={"DisposalCheck2"}
                                  name={"DisposalCheck2"}
                                  htmlFor={"DisposalCheck2"}
                        />
                    </div>
                    <input type={"text"} className={styles.PrimaryCase} placeholder={"Первоначальный взнос"}/>
                </div>
            </div>
            <div className={styles.selectBank}>
                <span className={styles.selectBankTitle}>
                    Выберите банк
                </span>
                <div
                    className={sberBankSelect ? cn(styles.bankBox1, styles.bankBoxActive) : styles.bankBox1}
                    onClick={()=> setSberBankSelect(!sberBankSelect)}
                >
                    <img src={sber} alt={"Сбербанк"}/>
                </div>
                <div
                    className={vtbBankSelect ? cn(styles.bankBox2, styles.bankBoxActive) : styles.bankBox2}
                    onClick={()=> setVTBBankSelect(!vtbBankSelect)}>
                    <img src={vtb} alt={"ВТБ"}/>
                </div>
                <div
                    className={alphaBankSelect ? cn(styles.bankBox3, styles.bankBoxActive) : styles.bankBox3}
                    onClick={()=> setAlphaBankSelect(!alphaBankSelect)}>
                    <img src={alpha} alt={"Альфа Банк"}/>
                </div>
            </div>
        </section>
    );
};

export default BuyInCredit;