import React from "react";
import backReview from '../../../../images/page_1/main/back-review.svg'
import push from '../../../../images/page_1/main/push-youtube.svg'
import { Fancybox } from "@fancyapps/ui";
import point from '../../../../images/page_1/header-main/pointing.svg'

class Reviews extends React.Component{


    render() {
        return(
            <article className={"reviews"}>
                <h2 className={"reviews-title"}>
                    Отзывы
                </h2>
                <ul className={"reviews-list"}>
                    <li className="reviews-item">
                        <div className={"reviews-item-box"}>
                            <div className="reviews-item-box-first">
                                <img className={"reviews-item-back"} src={backReview}/>
                                <a className={"reviews-item-push-link"} href={"https://youtu.be/PhkSouRdcSo?si=-SepfQqnp9ns_ZNt"} data-fancybox>
                                    <img className={"reviews-item-push"} src={push}/>
                                </a>
                            </div>
                            <div className="reviews-item-box-second">
                                <h4 className={"reviews-item-author"}>
                                    Чакрян Рудольф
                                </h4>
                                <p className="reviews-item-author-text">
                                    «Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA...
                                </p>
                                <button className={"reviews-item-moreInfo"} type={"submit"}>
                                    <p>Подробнее</p>
                                    <img src={point}/>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="reviews-item">
                        <div className={"reviews-item-box"}>
                            <div className="reviews-item-box-first">
                                <img className={"reviews-item-back"} src={backReview}/>
                                <a className={"reviews-item-push-link"} href={"https://youtu.be/k35Jt-VnzO8?si=Hw0bHRBe-0tq9haX"} data-fancybox>
                                    <img className={"reviews-item-push"} src={push}/>
                                </a>
                            </div>
                            <div className="reviews-item-box-second">
                                <h4 className={"reviews-item-author"}>
                                    Николай Жариков
                                </h4>
                                <p className="reviews-item-author-text">
                                    «Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA...
                                </p>
                                <button className={"reviews-item-moreInfo"} type={"submit"}>
                                    <p>Подробнее</p>
                                    <img src={point}/>
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="reviews-item">
                        <div className={"reviews-item-box"}>
                            <div className="reviews-item-box-first">
                                <img className={"reviews-item-back"} src={backReview}/>
                                <a className={"reviews-item-push-link"} href={"https://youtu.be/56jyyb8Qyso?si=Rlq6J5R2CaZkQ9_q"} data-fancybox>
                                    <img className={"reviews-item-push"} src={push}/>
                                </a>
                            </div>
                            <div className="reviews-item-box-second">
                                <h4 className={"reviews-item-author"}>
                                    Степан Казаков
                                </h4>
                                <p className="reviews-item-author-text">
                                    «Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA...
                                </p>
                                <button className={"reviews-item-moreInfo"} type={"submit"}>
                                    <p>Подробнее</p>
                                    <img src={point} alt={"point"}/>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </article>
        )
    }
}

Fancybox.bind("[data-fancybox]", {

});

export default Reviews