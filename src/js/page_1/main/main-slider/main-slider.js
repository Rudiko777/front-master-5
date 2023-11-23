import React from "react";
import styles from './slider.module.css'
import auto from '../../../../images/page_1/main/car3.png'
import '../../../../css/style.css'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {NavigationTen} from "./Navigation";



export const MainSlider = ()=>{
    return(
        <div className={styles.sliderContainer}>
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    loop={true}>
                <SwiperSlide>
                    <div className={styles.mainSliderCard}>
                        <img className={styles.mainSliderAuto} src={auto}/>
                        <div className="container">
                            <p className={styles.mainSliderRec}>
                                Осталось всего 10 авто!
                            </p>
                            <h1 className={styles.mainSliderTitle}>
                                Грандиозная распродажа<br/>тестового парка!
                            </h1>
                            <p className={styles.mainSliderTEXT}>
                                Узнай свою цену!
                            </p>
                        </div>

                        <NavigationTen />

                        <div className={"swiper-pagination"}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.mainSliderCard}>
                        <img className={styles.mainSliderAuto} src={auto}/>
                        <div className="container">
                            <p className={styles.mainSliderRec}>
                                Осталось всего 10 авто!
                            </p>
                            <h1 className={styles.mainSliderTitle}>
                                Грандиозная распродажа<br/>тестового парка!
                            </h1>
                            <p className={styles.mainSliderTEXT}>
                                Узнай свою цену!
                            </p>
                        </div>
                        <NavigationTen />
                        <div className={"swiper-pagination"}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.mainSliderCard}>
                        <img className={styles.mainSliderAuto} src={auto}/>
                        <div className="container">
                            <p className={styles.mainSliderRec}>
                                Осталось всего 10 авто!
                            </p>
                            <h1 className={styles.mainSliderTitle}>
                                Грандиозная распродажа<br/>тестового парка!
                            </h1>
                            <p className={styles.mainSliderTEXT}>
                                Узнай свою цену!
                            </p>
                        </div>

                        <NavigationTen />

                        <div className={"swiper-pagination"}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.mainSliderCard}>
                        <img className={styles.mainSliderAuto} src={auto}/>
                        <div className="container">
                            <p className={styles.mainSliderRec}>
                                Осталось всего 10 авто!
                            </p>
                            <h1 className={styles.mainSliderTitle}>
                                Грандиозная распродажа<br/>тестового парка!
                            </h1>
                            <p className={styles.mainSliderTEXT}>
                                Узнай свою цену!
                            </p>
                        </div>

                        <NavigationTen />

                        <div className={"swiper-pagination"}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.mainSliderCard}>
                        <img className={styles.mainSliderAuto} src={auto}/>
                        <div className="container">
                            <p className={styles.mainSliderRec}>
                                Осталось всего 10 авто!
                            </p>
                            <h1 className={styles.mainSliderTitle}>
                                Грандиозная распродажа<br/>тестового парка!
                            </h1>
                            <p className={styles.mainSliderTEXT}>
                                Узнай свою цену!
                            </p>
                        </div>
                        <NavigationTen />
                        <div className={"swiper-pagination"}></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}