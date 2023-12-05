import React, { useEffect, useState } from 'react';
import styles from './Natification.module.css';

const NewNatification = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [notificationCount, setNotificationCount] = useState(0);
    const [notifications, setNotifications] = useState([]);

    function debounce(func, delay) {
        let timeoutId;
        return function () {
            if (!isPaused) {
                func();
            }
        };
    }

    function createNotification() {
        let texts = ['Новое уведомление!', 'Важная информация!', 'Привет мир!'];
        let randomText = texts[Math.floor(Math.random() * texts.length)];

        setNotificationCount((prevCount) => prevCount + 1);

        let notification = {
            id: notificationCount,
            text: randomText,
        };

        setNotifications((notifications) => [...notifications, notification]);
    }

    function removeNotification(id) {
        setNotifications((notifications) =>
            notifications.filter((notification) => notification.id !== id)
        );
    }

    function pauseCounter() {
        setIsPaused(true);

        setTimeout(function () {
            setIsPaused(false);
        }, 10000);
    }

    const debouncedCreateNotification = debounce(createNotification, 3000);

    useEffect(() => {
        const container = document.getElementById('notifications-container');

        container.addEventListener('click', function (event) {
            if (event.target.classList.contains(styles.notification)) {
                console.log('Clicked on notification:', event.target.textContent);
            } else if (event.target.classList.contains(styles.closeButton)) {
                const notificationId = parseInt(
                    event.target.getAttribute('data-id')
                );
                removeNotification(notificationId);
            }
        });

        const intervalId = setInterval(debouncedCreateNotification, 3000);

        return () => {
            container.removeEventListener('click', function (event) {
                if (event.target.classList.contains(styles.notification)) {
                    console.log('Clicked on notification:', event.target.textContent);
                } else if (event.target.classList.contains(styles.closeButton)) {
                    const notificationId = parseInt(
                        event.target.getAttribute('data-id')
                    );
                    removeNotification(notificationId);
                }
            });

            clearInterval(intervalId);
        };
    }, [debouncedCreateNotification]);

    return (
        <div>
            <h1>Уведомления</h1>
            <div id="notifications-container">
                {notifications.map((notification) => (
                    <div key={notification.id} className={styles.notification}>
                        {notification.text}
                        <button
                            className={styles.closeButton}
                            data-id={notification.id}
                        >
                            &#10006;
                        </button>
                    </div>
                ))}
            </div>
            <button id="pause-button" onClick={() => pauseCounter()}>
                Приостановить счетчик на 10 сек
            </button>
        </div>
    );
};

export default NewNatification;