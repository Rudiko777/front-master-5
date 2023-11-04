import React from "react";
import HeaderTop from "./page_1/header/header";
import {HeaderMain} from "./page_1/header/header-main";
import FooterMain from "./page_1/footer/footerGeneral";
import AnyPageMain from "./AnyPageMain/AnyPageMain";
import AnyPageFooter from "./AnyPageMain/AnyPageFooter";


export const AnyPage = ()=>{
    return (
        <div className={"wrapper"}>
            <header className={"header"}>
                <div className="header-top-color">
                    <div className="container">
                        <HeaderTop />
                    </div>
                </div>
                <div className="header-main">
                    <div className="container">
                        <HeaderMain />
                    </div>
                </div>
            </header>
            <main className={"main"}>
                <AnyPageMain/>
            </main>
            <footer className={"footer"}>
                <AnyPageFooter />
            </footer>
        </div>
    )
}