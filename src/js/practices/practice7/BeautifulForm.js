import React from 'react';
import styles from './BeautifulForm.module.css'

const BeautifulForm = () => {
    return (
        <form>
            <h2>Регистрация</h2>
            <div className="form-group">
                <label htmlFor="username">Имя пользователя:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Пароль:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default BeautifulForm;