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
                                <a className={"reviews-item-push-link"} href={"https://youtu.be/uOn2mtQBx6E?si=uqUc5-gffAo5vVOY"} data-fancybox>
                                    <img className={"reviews-item-push"} src={push}/>
                                </a>
                            </div>
                            <div className="reviews-item-box-second">
                                <h4 className={"reviews-item-author"}>
                                    Ловчев Михаил Васильевич
                                </h4>
                                <p className="reviews-item-author-text">
                                    Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA...
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
                                <a className={"reviews-item-push-link"} href={"https://youtu.be/zvNweW0U3-o?si=GYEWvqAYWMCyERcE"} data-fancybox>
                                    <img className={"reviews-item-push"} src={push}/>
                                </a>
                            </div>
                            <div className="reviews-item-box-second">
                                <h4 className={"reviews-item-author"}>
                                    Саиков Константин Алексеевич
                                </h4>
                                <p className="reviews-item-author-text">
                                    После прогулки по автосалону и тест-драйва я чувствовал себя как ребенок в игрушечном магазине. Уверенность в качестве и надежности автомобилей Altera действительно окупается с первых метров на дороге.
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
                                <a className={"reviews-item-push-link"} href={"https://youtube.com/shorts/-PjG4ZNQMQM?si=GygKthLA05cBkEi5"} data-fancybox>
                                    <img className={"reviews-item-push"} src={push}/>
                                </a>
                            </div>
                            <div className="reviews-item-box-second">
                                <h4 className={"reviews-item-author"}>
                                    Михайлиди Александр Максимович
                                </h4>
                                <p className="reviews-item-author-text">
                                    Я просто не могу не поделиться своим восторгом о посещении автосалона Altera. Это был незабываемый опыт, который оставил во мне глубокое впечатление. Что поразило меня - широкий ассортимент автомобилей.
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