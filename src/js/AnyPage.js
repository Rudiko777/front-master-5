import React, {useEffect} from "react";
import HeaderTop from "./page_1/header/header";
import {HeaderMain} from "./page_1/header/header-main";
import FooterMain from "./page_1/footer/footerGeneral";
import AnyPageMain from "./AnyPageMain/AnyPageMain";
import AnyPageFooter from "./AnyPageMain/AnyPageFooter";
import DrawingButton from "./Taxi/DrawingButton";
import toyota from '../images/AnyPage/toyota.jpeg'


export const AnyPage = ()=>{
    useEffect(() => {
        let jinja = document.querySelector('.sliderMainNew')
        let btn = document.querySelector('.slider-btn')
        btn.onmousedown = function (e){
            e.preventDefault();
            let shiftX = e.clientX - btn.getBoundingClientRect().left

            document.addEventListener('mousemove', onMouseMove)
            document.addEventListener('mouseup', onMouseUp)

            function onMouseMove(e){
                let newLeft = e.clientX - shiftX - jinja.getBoundingClientRect().left
                if (newLeft<0){
                    newLeft=0;
                }
                let rightEdge = jinja.offsetWidth - btn.offsetWidth
                if(newLeft > rightEdge)
                    newLeft=rightEdge
                btn.style.left = newLeft+'px'
            }
            function onMouseUp(){
                document.removeEventListener('mouseup', onMouseUp)
                document.removeEventListener('mousemove', onMouseMove)
            }
        }
        btn.ondragstart = function (){
            return false;
        }
    });



    return (
        <>
            <div style={{margin: '50px 0'}}>
                <div className={'sliderMainNew'} id={'jinja'}>
                    <div className={'slider-btn'}></div>
                </div>
            </div>
        </>
    )
}