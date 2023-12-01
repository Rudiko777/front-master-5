import React, {useRef, useState} from "react";
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
import {Swiper, SwiperSlide} from "swiper/react";
import cn from 'classnames'
// import 'swiper/css/autoplay'
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import {A11y, Navigation, Pagination, Scrollbar, Autoplay, EffectFade} from "swiper/modules";
import {Link} from "react-router-dom";
// import SwiperCore from 'swiper';
//
// SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade]);

export const MainAuth = ({type})=>{
    const[passwordVisability, setPasswordVisability] = useState(false);

    return(
        <>
            <div className={cn(styles.container, "container")}>
                <div className={styles.MainAuthInner}>
                    {
                        type === 'login' ?
                            <h1 className={styles.authTitle}>
                                Авторизация
                            </h1> :
                            <h1 className={styles.authTitle}>
                                Регистрация
                            </h1>
                    }
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
                            <input type={passwordVisability ? "text" : "password"} className={styles.formPassword}/>
                            <button className={styles.formPasswordBtn}>
                                <img className={styles.formPasswordImg} src={formPassword} alt={"Password"}/>
                            </button>
                            <button type={"button"} className={styles.formNoseeBtn} onClick={() => setPasswordVisability(!passwordVisability)}>
                                <img className={styles.formNoseeImg} src={noSee} alt={"noSee"}/>
                            </button>
                        </div>
                        {
                            type === 'login' ?
                                <button className={styles.signUp}>
                                    SIGN IN
                                </button> :
                                <button className={styles.signUp}>
                                    SIGN UP
                                </button>
                        }
                        {
                            type === 'login' ? null :
                                <p className={styles.dopInfo}>
                                    Already Have An Account?
                                    <Link to={"/login"}>
                                        Log In
                                    </Link>
                                </p>
                        }
                    </form>
                    {/*<img className={styles.formNameImg} src={formName} alt={"Name"}/>*/}
                    {/*<img className={styles.formEmailImg} src={formEmail} alt={"Email"}/>*/}
                    {/*<img className={styles.formPasswordImg} src={formPassword} alt={"Password"}/>*/}
                </div>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false}}
                effect='fade'
                // slidesPerView={1}
                centeredSlides={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={styles.slide1}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide2}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide3}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slide4}></div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}