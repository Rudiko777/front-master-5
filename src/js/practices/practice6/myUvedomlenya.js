import React from 'react';
import styles from './myUvedomlenya.module.css'

const MyUvedomlenya = () => {
    return (
        <div className="notifications">
            <button className="notifications__toggle">Уведомления</button>
            <ul className="notifications__list">
                <li>Уведомление 1</li>
                <li>Уведомление 2</li>
                <li>Уведомление 3</li>
            </ul>
        </div>
    );
};

export default MyUvedomlenya;