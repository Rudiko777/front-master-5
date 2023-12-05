import React, { useEffect, useState } from 'react';
import styles from './update.module.css';

const Update = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');

            sections.forEach((section) => {
                const position = section.getBoundingClientRect().top;

                if (position < window.scrollY) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.back}>
            <div className={`section ${activeSection === 'section1' ? 'active' : ''}`} id="section1">
                <h1>Section 1</h1>
            </div>

            <div className={`section ${activeSection === 'section2' ? 'active' : ''}`} id="section2">
                <h1>Section 2</h1>
            </div>

            <div className={`section ${activeSection === 'section3' ? 'active' : ''}`} id="section3">
                <h1>Section 3</h1>
            </div>
        </div>
    );
};

export default Update;