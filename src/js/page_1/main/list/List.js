import React, { useState } from 'react';

const ListCreator = () => {
    const [items, setItems] = useState([]);

    const createListItem = () => {
        while (true) {
            const item = prompt('Введите содержимое пункта');
            if (item === null || item === '') {
                break;
            }
            setItems(prevItems => [...prevItems, item]);
            showNotification(options);
        }
    };

    // const handleKeyPressed = (event) => {
    //     if (event.key === 'Escape') {
    //         event.preventDefault();
    //         createListItem();
    //     }
    // };

    function showNotification(options) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = options.content;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 1500);
    }

    const options = {
        content: 'Привет, мир!'
    };

    return (
        <div>
            <h1>Создание списка</h1>
            <button onClick={createListItem} className="header-main-connection-btn">
                Добавить пункт
            </button>

            <ul style={{ padding: '20px 0' }}>
                {items.map((item, index) => (
                    <li key={index} style={{ fontSize: '20px', fontWeight: '600' }}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListCreator;