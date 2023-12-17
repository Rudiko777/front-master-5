import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styles from './Ex14All.module.css';
import './Ex14All.module.css';

const Ex14First = () => {
    const [showModal, setShowModal] = useState(false);
    const [clickedLink, setClickedLink] = useState(null);

    useEffect(() => {
        const handleClick = (event) => {
            let target = event.target;
            let isLinkClicked = false;

            while (target && target !== event.currentTarget) {
                if (target.tagName === 'A') {
                    isLinkClicked = true;
                    break;
                }
                target = target.parentNode;
            }

            if (isLinkClicked) {
                setClickedLink(target.getAttribute('href'));
                setShowModal(true);
                event.preventDefault();
            }
        };

        document.getElementById('contents').addEventListener('click', handleClick);

        return () => {
            document.getElementById('contents').removeEventListener('click', handleClick);
        };
    }, []);

    const handleModalConfirm = () => {
        setShowModal(false);
        if (clickedLink) {
            window.location.href = clickedLink; // Выполнить перенаправление по кликнутой ссылке
        }
    };

    const handleModalCancel = () => {
        setShowModal(false);
    };

    return (
        <>
            <div id="contents">
                <h1 style={{textAlign: 'center', fontSize: '24px', marginTop: '50px'}}>Ex14_1</h1>
                <div className={styles.box}>
                    <a href={'/aboutMe'}>О нас</a>
                    <a href={'/cars'}>Машины</a>
                    <a href={'/description'}>Описание</a>
                </div>
                <Modal
                    isOpen={showModal}
                    onRequestClose={handleModalCancel}
                    contentLabel="Leaving Confirmation"
                >
                    <h3>Вы действительно хотите покинуть страницу?</h3>
                    <button onClick={handleModalConfirm}>Да</button>
                    <button onClick={handleModalCancel}>Отмена</button>
                </Modal>
            </div>
        </>
    );
};

export default Ex14First;