import React from "react";
import HeaderTop from "./page_1/header/header";
import {HeaderMain} from "./page_1/header/header-main";
import FooterMain from "./page_1/footer/footerGeneral";
import DisposalMain from "./disposal/DisposalMain";
import Layout from "./Layout";



export const DisposalPage = ()=>{
    return (
        <Layout>
            <DisposalMain/>
        </Layout>
    )
}