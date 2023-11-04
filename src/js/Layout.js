import React from 'react';
import HeaderTop from "./page_1/header/header";
import {HeaderMain} from "./page_1/header/header-main";
import DisposalMain from "./disposal/DisposalMain";
import FooterMain from "./page_1/footer/footerGeneral";

const Layout = ({children}) => {
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
                {children}
            </main>
            <footer className={"footer"}>
                <FooterMain />
            </footer>
        </div>
    );
};

export default Layout;