import React, {useEffect, useState} from 'react';
import styles from './Natification.module.css'

const Natification = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [notificationCount, setNotificationCount] = useState(0);
    const [notifications, setNotifications] = useState([]);

    function debounce(func, delay) {
        let timeoutId;

        return function() {
            if (!isPaused) {
                func()
            }
        };
    }

    function createNotification() {
        let texts = ["Новое уведомление!", "Важная информация!", "Привет мир!"];
        let randomText = texts[Math.floor(Math.random() * texts.length)];

        setNotificationCount(prevCount => prevCount + 1);

        let notification = (
            <div key={notificationCount} className={styles.natification}>
                {randomText}
            </div>
        );

        setNotifications(notifications => [...notifications, notification]);
    }


    function pauseCounter() {
        setIsPaused(true);

        setTimeout(function() {
            setIsPaused(false);
        }, 10000);
    }

    const debouncedCreateNotification = debounce(createNotification, 3000);


    useEffect(() => {
        const intervalId = setInterval(debouncedCreateNotification, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [debouncedCreateNotification]);

    return (
        <div>
            <h1>Уведомления</h1>
            <div id="notifications-container">
                {notifications.map(notification => notification)}
            </div>
            <button id="pause-button" onClick={() => pauseCounter()}>
                Приостановить счетчик на 10 сек
            </button>
        </div>
    );
};

export default Natification;