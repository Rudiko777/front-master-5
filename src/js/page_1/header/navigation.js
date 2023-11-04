import React from "react";
import '../../.././css/style.css'


class NavigationMain extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            carSelection: "Подбор авто",
            aboutCompany: "О компании",
            technicalCenter: "Техцентр",
            reviews: "Отзывы",
            contacts: "Контакты"
        }
    }
    render(){
        return(
            <nav className={"header-main-navigation"}>
                <ul className="header-main-navigation-list">
                    <a className={"header-main-navigation-item-link"} href={"#"}>
                        <li className="header-main-navigation-item">{this.state.carSelection}</li>
                    </a>
                    <a className={"header-main-navigation-item-link"} href={"#"}>
                        <li className="header-main-navigation-item">{this.state.aboutCompany}</li>
                    </a>
                    <a className={"header-main-navigation-item-link"} href={"#"}>
                        <li className="header-main-navigation-item">{this.state.technicalCenter}</li>
                    </a>
                    <a className={"header-main-navigation-item-link"} href={"#"}>
                        <li className="header-main-navigation-item">{this.state.reviews}</li>
                    </a>
                    <a className={"header-main-navigation-item-link"} href={"#"}>
                        <li className="header-main-navigation-item">{this.state.contacts}</li>
                    </a>
                </ul>
            </nav>
        )
    }
}

export default NavigationMain