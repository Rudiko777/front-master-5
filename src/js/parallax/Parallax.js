import React, {useEffect} from 'react';
import Layout from "../Layout";
import styles from './parallax.module.css'

const Parallax = () => {

    useEffect(() => {
        window.addEventListener('scroll', function() {
            let parallax = document.getElementById('divParallax')
            let scrollPosition = window.pageYOffset;

            // Изменение позиции фона с использованием коэффициента параллакса
            parallax.style.backgroundPositionY = (scrollPosition * 0.7) + 'px';
        });
    }, []);

    return (
        <div className={styles.back}>
            <div id={'divParallax'} className={styles.parallax}>
                <h1>Parallax Effect</h1>
            </div>
        </div>
    );
};

export default Parallax;