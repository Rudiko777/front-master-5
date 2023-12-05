import React, {useEffect} from "react";
import HeaderTop from "./page_1/header/header";
import {HeaderMain} from "./page_1/header/header-main";
import FooterMain from "./page_1/footer/footerGeneral";
import AnyPageMain from "./AnyPageMain/AnyPageMain";
import AnyPageFooter from "./AnyPageMain/AnyPageFooter";
import DrawingButton from "./Taxi/DrawingButton";
import toyota from '../images/AnyPage/toyota.jpeg'


export const AnyPage = ()=>{
    document.addEventListener("click", function(event) {
        let centerX = event.clientX;
        let centerY = event.clientY;
        alert("Coordinates: " + centerX + ", " + centerY);
    });

    useEffect(() => {
        const div = document.getElementById('centered-element')
        div.style.position='fixed'
        div.style.top = '50%'
        div.style.left = '50%'
        div.style.transform = 'translate(-50%, -50%)'
    }, []);

    return (
        <div id="centered-element">
            <img id="centered-image" src={toyota} alt="Centered Image"/>
        </div>
    )
}