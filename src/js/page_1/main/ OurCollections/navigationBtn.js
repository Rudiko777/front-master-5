import React from "react";
import styles from './collections.module.css'
import {useSwiper} from "swiper/react";
import arrowLeft from "../../../../images/page_1/main/arrowColLeft.svg";
import arrowRight from "../../../../images/page_1/main/arraowColRight.svg";


export const CollectionBtns = (props)=>{
    const swiper = props.swiper
    return(
        <div className={styles.collectionDivBtn}>
            <button  className={styles.collectionLeftBtn} onClick={() => swiper.slidePrev()}>
                <div>
                    <img className={styles.collectionLeftBtnImg} src={arrowLeft}/>
                </div>
            </button>
            <button  className={styles.collectionRightBtn} onClick={() => swiper.slideNext()}>
                <div>
                    <img className={styles.collectionRightBtnImg} src={arrowRight}/>
                </div>
            </button>
        </div>
    )
}