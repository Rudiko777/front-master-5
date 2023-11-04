import React from 'react';
import styles from './Accept.module.css'
import accept from '../../../../images/taxi/accept.png'

const Accept = ({text}) => {
    return (
        <div className={styles.advantageBox}>
            <img className={styles.advantageImg} src={accept} alt={'Error'}/>
            <p className={styles.advantageText}>
                {text}
            </p>
        </div>
    );
};

export default Accept;