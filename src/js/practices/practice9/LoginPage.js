import React, { useState } from 'react';

function LoginPage() {
    const [registration, setRegistration] = useState('');

    const handleInputChange = (event) => {
        setRegistration(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (registration.toLowerCase() === 'да') {
            // Вместо alert используем prompt
            const username = prompt('Введите ваш логин:');
            if (username === 'Админ') {
                const password = prompt('Введите ваш пароль:');
                if (password === 'Я главный') {
                    alert('Здравствуйте!');
                } else if (password === null) {
                    alert('Отменено');
                } else {
                    alert('Неверный пароль');
                }
            } else if (username === null) {
                alert('Отменено');
            } else {
                alert('Я вас не знаю');
            }
        } else {
            alert('Попробуй ещё раз');
        }
    };

    return (
        <div>
            <h1>Вход в панель управления</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Желаете пройти регистрацию на сайте? (Введите "Да" или "Нет"):
                    <input
                        type="text"
                        value={registration}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}

export default LoginPage;