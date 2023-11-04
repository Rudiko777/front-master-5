import React from 'react';
import styles from './Advantage.module.css'
import adv1 from '../../../../images/taxi/ad1.svg'
import adv2 from '../../../../images/taxi/ad2.svg'
import adv3 from '../../../../images/taxi/ad3.svg'
import adv4 from '../../../../images/taxi/ad4.svg'
import adv5 from '../../../../images/taxi/ad5.svg'
import adv6 from '../../../../images/taxi/ad6.svg'
import adv7 from '../../../../images/taxi/ad7.svg'
import adv8 from '../../../../images/taxi/ad8.svg'
import adv9 from '../../../../images/taxi/ad9.svg'
import cn from 'classnames'

const Advantage = ({itemNumber, title}) => {
    let advantageImg;
    switch (itemNumber){
        case 1:
            advantageImg = adv1;
    }
    return (
        <div className={styles.advantageBox}>
            <div className={styles.imgBox}>
                <img className={styles.advantageImg} src={
                    itemNumber === 1 ? adv1 : itemNumber === 2 ? adv2 : itemNumber === 3 ? adv3 : itemNumber === 4 ? adv4 : itemNumber === 5 ? adv5 : itemNumber === 6 ? adv6 : itemNumber === 7 ? adv7 : itemNumber === 8 ? adv8 : itemNumber === 9 ? adv9 : null}
                />
            </div>
            <h4 className={itemNumber !== 5 && itemNumber !== 9 ? cn(styles.advantageTitle, styles.advantageTitleAfter) : styles.advantageTitle}>
                {title}
            </h4>
        </div>
    );
};

export default Advantage;