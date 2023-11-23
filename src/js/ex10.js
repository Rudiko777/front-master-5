import React, {useEffect, useRef, useState} from 'react';
import Layout from "./Layout";
import styles from './Auth/MainAuth.module.css'
import google from '../../src/images/Auth/Google.png'
import apple from '../../src/images/Auth/Apple.svg'
import formName from '../../src/images/Auth/formName.svg'
import formEmail from '../../src/images/Auth/formEmail.svg'
import formPassword from '../../src/images/Auth/formPassword.svg'
import noSee from '../../src/images/Auth/formNosee.svg'
import Cut from "./Cut";


const Ex10 = () => {

    const [disabled, setDisabled] = useState(false)
    const [objectValue, setObjectValues] = useState({first: 0, second: 0})
    const [input, setInput] = useState('');

    useEffect(() => {
        setObjectValues(generateRandomValues);
    }, []);
    // const [yes, setYes] = useState(false)

    const fontSizes = [8, 11, 14, 16];
    const mySymbolsFirst = objectValue.first.toString().split('');
    const mySymbolsSecond = objectValue.second.toString().split('');
    const generateRandomValues = ()=>{
        const result = {
            first: 0,
            second: 0,
        };
        result.first = Math.floor(Math.random() * 10000);
        result.second = Math.floor(Math.random() * 10000);
        result.answer = result.first + result.second;
        return result;
    }

    const myInput = useRef(0);
    const firstValue = useRef(0);
    const secondValue = useRef(0);
    const myForm = useRef();

    // const checkAnswer = ()=>{
    //     const firstResult = firstValue.current.textContent;
    //     const secondResult = secondValue.current.textContent;
    //     if (Number(firstResult) + Number(secondResult) === Number(myInput.current.value)){
    //         setDisabled(true)
    //     }
    // }

    const checkForm = ()=>{
        let form = document.querySelector('.MainAuth_form__aFnCa');
        const firstResult = firstValue.current.textContent;
        const secondResult = secondValue.current.textContent;
        if (Number(firstResult) + Number(secondResult) !== Number(myInput.current.value)){
            form.addEventListener('submit', function(event) {
                event.preventDefault();
            });
        }
        else{
            form.removeEventListener('submit', function(event) {
                event.preventDefault();
            });
        }
    }


    const isTrue = ()=>{
        const firstResult = firstValue.current.textContent;
        const secondResult = secondValue.current.textContent;
        if (Number(firstResult) + Number(secondResult) !== Number(myInput.current.value)){
            setObjectValues(generateRandomValues)
            setDisabled(!disabled);
        }
        // else {
        //     setYes(true)
        // }
    }

    let isEmpty = ()=>{
        console.log(myInput.current.value);
        if (myInput.current.value === ''){
            alert("Пусто")
        }
    }

    let isTrueRight = ()=>{
        isTrue()
        if (objectValue.first + objectValue.second === Number(myInput.current.value)){
            alert("Результат верен")
        }
        else {
            alert("Неправильно!!!")
        }
    }

    return (
        <Layout>
            <div className="container">
                <div className={"kaptcha"}>
                    <div className="kaptchaContentBox">
                        <h1 className={"kaptchaTitle"}>
                            Необходимо пройти проверку для проверки пользователя
                        </h1>
                        <p>Перед вами пример, решите его:</p>
                        <div>
                            <span ref={firstValue}>
                                {mySymbolsFirst.map(el => {
                                    return <span style={{fontSize: `${fontSizes[Math.floor(Math.random() * fontSizes.length)]}px`}}>{Number(el)}</span>
                                })}
                            </span>
                            <span> + </span>
                            <span ref={secondValue}>
                                 {mySymbolsSecond.map(el => {
                                     return <span style={{fontSize: `${fontSizes[Math.floor(Math.random() * fontSizes.length)]}px`}}>{Number(el)}</span>
                                 })}
                            </span>
                            <span> = </span>
                            <input type={"number"} className={"kaptchaAnswer"} ref={myInput} onChange={(el) => console.log(el.target.value)}/>
                            <button style={{display: "block"}} onClick={() => isTrueRight()}>
                                Проверить на правдивость
                            </button>
                            <button style={{display: "block"}} onClick={() => isEmpty()}>
                                Проверить поле ввода
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.MainAuthInner}>
                    <h1 className={styles.authTitle}>
                        Регистрация на сайте
                    </h1>
                    <div className={styles.authSites}>
                        <button className={styles.authGoogle}>
                            <img className={styles.google} src={google} alt={"Google"}/>
                        </button>
                        <button className={styles.authApple}>
                            <img className={styles.apple} src={apple} alt={"Apple"}/>
                        </button>
                    </div>
                    <h2 className={styles.or}>
                        Or
                    </h2>
                    <form className={styles.form} ref={myForm}>
                        <div className={styles.formNameBox}>
                            <input type={"text"} className={styles.formName} placeholder={"Tom Hillson"}/>
                            <button className={styles.formNameBtn}>
                                <img className={styles.formNameImg} src={formName} alt={"Name"}/>
                            </button>
                        </div>

                        <div className={styles.formNameBox}>
                            <input type={"email"} className={styles.formEmail} placeholder={"TomHill@Mail.com"}/>
                            <button className={styles.formEmailBtn}>
                                <img className={styles.formEmailImg} src={formEmail} alt={"Email"}/>
                            </button>
                        </div>
                        <div className={styles.formNameBox}>
                            <input type={"password"} className={styles.formPassword}/>
                            <button className={styles.formPasswordBtn}>
                                <img className={styles.formPasswordImg} src={formPassword} alt={"Password"}/>
                            </button>
                            <button className={styles.formNoseeBtn}>
                                <img className={styles.formNoseeImg} src={noSee} alt={"noSee"}/>
                            </button>
                        </div>
                        <button className={styles.signUp} type={"submit"} onClick={()=>checkForm()}>
                            SIGN UP
                        </button>
                        <p className={styles.dopInfo}>
                            Already Have An Account?
                            <a href={"#"}>
                                Log In
                            </a>
                        </p>
                    </form>
                </div>
                <Cut />
            </div>
        </Layout>
    );
};

export default Ex10;

