import React, {useState} from "react";
import '../../.././css/style.css'
import point from '../../../images/page_1/header-main/pointing.svg'
import likes from '../../../images/page_1/header-main/likes.svg'
import comparisons from '../../../images/page_1/header-main/comparisons.svg'
import search from '../../../images/page_1/header-main/search.svg'
import {Link} from "react-router-dom";

export const Catalogs = ()=>{

    const[likeState, setLikeState] = useState(false);


    return(
        <div className={"header-catalogs"}>
            <ul className="header-catalogs-list">
                <li className="header-catalogs-item">
                    <h4 className={"header-catalog-item-title"}>
                        Каталог авто
                    </h4>
                    <a className={"point-link"} href={"#"}><img className={"point-img"} src={point} alt={"Point"}/></a>
                </li>
                <li className="header-catalogs-item">
                    <h4 className={"header-catalog-item-title"}>
                        Авто с пробегом
                    </h4>
                    <a className={"point-link"} href={"#"}><img className={"point-img"} src={point} alt={"Point"}/></a>
                </li>
                <li className="header-catalogs-item">
                    <h4 className={"header-catalog-item-title"}>
                        Кредит и рассрочка
                    </h4>
                    <Link className={"point-link"} href={"#"} to={"/credit"}>
                        <img className={"point-img"} src={point} alt={"Point"}/>
                    </Link>
                </li>
                <li className="header-catalogs-item">
                    <h4 className={"header-catalog-item-title"}>
                        Спецпредложения
                    </h4>
                    <Link className={"point-link"} href={"#"} to={'/disposal'}>
                        <img className={"point-img"} src={point} alt={"Point"}/>
                    </Link>
                </li>
                <li className="header-catalogs-item">
                    <Link className={"header-catalog-item-title"} to={'/taxi'} href={"#"}>
                        Такси в кредит
                    </Link>
                </li>
            </ul>
            <ul className="interactive-list">
                <li className="interactive-item">
                    <a className={"interactive-item-link"} href={"#"}>
                        <img className={"interactive-item-img"} src={likes} onMouseOver={()=> setLikeState(!likeState)} onMouseOut={()=> setLikeState(!likeState)}/>
                    </a>
                    {
                        likeState ?
                            <>
                                <div className={"likesOpen"}>
                                    <h3 className={"likesOpenTitle"}>
                                        Likes
                                    </h3>
                                    <ul className={"likesList"}>
                                        <li className={"likesListItem"}>
                                            <span>1</span>
                                            <Link to={"#"}>
                                                Porsche
                                            </Link>
                                        </li>
                                        <li className={"likesListItem"}>
                                            <span>2</span>
                                            <Link to={"#"}>
                                                BMW
                                            </Link>
                                        </li>
                                        <li className={"likesListItem"}>
                                            <span>3</span>
                                            <Link to={"#"}>
                                                Mercedes-Benz
                                            </Link>
                                        </li>
                                        <li className={"likesListItem"}>
                                            <span>4</span>
                                            <Link to={"#"}>
                                                Audi
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </>
                            : null
                    }
                </li>
                <li className="interactive-item">
                    <a className={"interactive-item-link"} href={"#"}>
                        <img className={"interactive-item-img"} src={comparisons}/>
                    </a>
                </li>
                <li className="interactive-item">
                    <a className={"interactive-item-link"} href={"#"}>
                        <img className={"interactive-item-img"} src={search}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Catalogs