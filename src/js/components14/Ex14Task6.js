import React, {useEffect} from 'react';
import cn from "classnames";

const Ex14Task6 = () => {

    useEffect(() => {
        const container = document.querySelector('.popup-container');
        const popup = container.querySelector('.popup-animation');
        const btn = document.querySelector('.pulse-animation')



        setInterval(() => {
            btn.classList.toggle('pulsating');
        }, 1000);





        container.addEventListener('mouseenter', () => {
            popup.style.opacity = '1';
            popup.style.transform = 'translateY(0)';
            popup.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out'
        });

        container.addEventListener('mouseleave', () => {
            popup.style.opacity = '0';
            popup.style.transform = 'translateY(-50%)';
        });

    }, []);



    return (
        <>
            <div className="popup-container">
                <button className={'header-main-connection-btn'}>Доведи до меня</button>
                <div className="popup-animation"><h1>Всплывающее сообщение!</h1></div>
            </div>
            <div>
                <button className={cn('header-main-connection-btn', "pulse-animation")}>Пульсом бьёт</button>
            </div>
        </>
    );
};

export default Ex14Task6;