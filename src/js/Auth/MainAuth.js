import React, {useRef} from "react";
import styles from './MainAuth.module.css'
import google from '../../../src/images/Auth/Google.png'
import apple from '../../../src/images/Auth/Apple.svg'
import formName from '../../../src/images/Auth/formName.svg'
import formEmail from '../../../src/images/Auth/formEmail.svg'
import formPassword from '../../../src/images/Auth/formPassword.svg'
import noSee from '../../../src/images/Auth/formNosee.svg'
import car1 from '../../images/Auth/pint1.png'
import car2 from '../../images/Auth/pint2.png'
import {CarCards} from "../page_1/main/carCards/carCards";


export const MainAuth = ()=>{

    const inputRef = useRef(null);

    const handleInputRef = ()=>{
        alert(inputRef.current.value);
    }

    return(
        <>
            <div className="container">
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
                    <form className={styles.form}>
                        <div className={styles.form1Box}></div>
                        <div className={styles.form2Box}></div>
                        <div className={styles.form3Box}></div>
                        <div className={styles.form4Box}></div>
                        <div className={styles.formNameBox}>
                            <input type={"text"} className={styles.formName} placeholder={"Tom Hillson"} ref={inputRef}/>
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
                        <button className={styles.signUp} type={"submit"} onClick={handleInputRef}>
                            SIGN UP
                        </button>
                        <p className={styles.dopInfo}>
                            Already Have An Account?
                            <a href={"#"}>
                                Log In
                            </a>
                        </p>
                    </form>
                    {/*<img className={styles.formNameImg} src={formName} alt={"Name"}/>*/}
                    {/*<img className={styles.formEmailImg} src={formEmail} alt={"Email"}/>*/}
                    {/*<img className={styles.formPasswordImg} src={formPassword} alt={"Password"}/>*/}
                </div>
            </div>
        </>
    )
}