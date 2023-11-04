import React from "react";
import {useSwiper} from "swiper/react";
import styles from "./slider.module.css";
import arrowLeft from "../../../../images/page_1/main/arrowleft.svg";
import arrowRight from "../../../../images/page_1/main/arrowRight.svg";

export const NavigationTen = ()=>{
    const swiper = useSwiper();
    return(
        <div>
            <button  className={styles.mainSliderLeftBoxBTN} onClick={() => swiper.slidePrev()}>
                <div>
                    <img className={styles.mainSliderLeft} src={arrowLeft}/>
                </div>
            </button>
            <button  className={styles.mainSliderRightBoxBTN} onClick={() => swiper.slideNext()}>
                <div>
                    <img className={styles.mainSliderLeft} src={arrowRight}/>
                </div>
            </button>
        </div>
    )
}