import React, {useState} from 'react';
import styles from './BTNNoti.module.css'

const BtnNoti = () => {
    const [showNotification, setShowNotification] = useState(false);

    const options = {
        content: 'Привет, это уведомление!'
    };

    const handleNotificationClick = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 1500);
    };

    return (
        <div>
            {showNotification && (
                <div className={styles.notification}>{options.content}</div>
            )}
            <button className={"show_slow_noti"} onClick={handleNotificationClick}>Показать уведомление</button>
        </div>
    );
};

export default BtnNoti;