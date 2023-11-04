import React, {useState} from "react";
import styles from './collections.module.css'
import '../../../../css/style.css'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {CollectionBtns} from "./navigationBtn";
import {A11y, Navigation, Scrollbar} from "swiper/modules";




export const CollectionsSlider = ()=>{
    const[value, setValue] = useState()
    return(
        <section className={styles.collectionSlider}>
            <div className="container">
                <div className={styles.sliderHeader}>
                    <div className={styles.sliderHeaderCollectionBox}>
                        <h1 className={styles.sliderHeaderTitle}>
                            Наши подборки
                        </h1>
                        <button className={styles.sliderHeaderAllCol}>
                            Все подборки
                        </button>
                    </div>
                    <div>
                        <CollectionBtns swiper = {value}/>
                    </div>
                </div>
                <Swiper modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={500}
                        slidesPerView={1}
                        navigation={{
                            prevEl: styles.collectionLeftBtn,
                            nextEl: styles.collectionRightBtn
                        }}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) =>{
                            setValue(swiper);
                        }}
                        onSlideChange={() => console.log('slide change')}
                        loop={true}

                >
                    <SwiperSlide>
                        <div className={styles.colSliderBox}>
                            <div className={styles.colSlide1}>
                                <div className={styles.animationBox}>
                                    <div className={styles.animationBoxContent}>
                                        <h4 className={styles.colSliderText1}>
                                            Семейные<br/>автомобили
                                        </h4>
                                        <button className={styles.colSliderBtn}>
                                            Посмотреть
                                        </button>
                                    </div>
                                    <p>
                                        По статистике для трети автовладельцев поиск бюджетного автомобиля для семьи — актуальная задача.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.colSlide2}>
                                <div className={styles.animationBox}>
                                    <div className={styles.animationBoxContent}>
                                        <h4 className={styles.colSliderText1}>
                                            Автомобили<br/>для путешествий
                                        </h4>
                                        <button className={styles.colSliderBtn}>
                                            Посмотреть
                                        </button>
                                    </div>
                                    <p>
                                        Если вам комфортно выплёскивать свои эмоции на автомобиль, избавьтесь от этой дурной привычки. Это ваш главный союзник, который при недолжном к нему отношении быстро станет вашим главным врагом.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.colSlide3}>
                                <div className={styles.animationBox}>
                                    <div className={styles.animationBoxContent}>
                                        <h4 className={styles.colSliderText1}>
                                            Городские автомобили
                                        </h4>
                                        <button className={styles.colSliderBtn}>
                                            Посмотреть
                                        </button>
                                    </div>
                                    <p>
                                        Быть автомобилистом в современном городе – значит, постоянно сталкиваться с вызовами, продиктованными спецификой городских условий. Сравнительно небольшая, но густонаселенная территория с тысячами жителей - это всегда плотный трафик.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.colSliderBox}>
                            <div className={styles.colSlide1}>
                                <div className={styles.animationBox}>
                                    <div className={styles.animationBoxContent}>
                                        <h4 className={styles.colSliderText1}>
                                            Семейные<br/>автомобили
                                        </h4>
                                        <button className={styles.colSliderBtn}>
                                            Посмотреть
                                        </button>
                                    </div>
                                    <p>
                                        По статистике для трети автовладельцев поиск бюджетного автомобиля для семьи — актуальная задача.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.colSlide2}>
                                <div className={styles.animationBox}>
                                    <div className={styles.animationBoxContent}>
                                        <h4 className={styles.colSliderText1}>
                                            Автомобили<br/>для путешествий
                                        </h4>
                                        <button className={styles.colSliderBtn}>
                                            Посмотреть
                                        </button>
                                    </div>
                                    <p>
                                        Если вам комфортно выплёскивать свои эмоции на автомобиль, избавьтесь от этой дурной привычки. Это ваш главный союзник, который при недолжном к нему отношении быстро станет вашим главным врагом.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.colSlide3}>
                                <div className={styles.animationBox}>
                                    <div className={styles.animationBoxContent}>
                                        <h4 className={styles.colSliderText1}>
                                            Городские автомобили
                                        </h4>
                                        <button className={styles.colSliderBtn}>
                                            Посмотреть
                                        </button>
                                    </div>
                                    <p>
                                        Быть автомобилистом в современном городе – значит, постоянно сталкиваться с вызовами, продиктованными спецификой городских условий. Сравнительно небольшая, но густонаселенная территория с тысячами жителей - это всегда плотный трафик.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}