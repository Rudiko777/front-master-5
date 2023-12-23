import React, {useEffect, useState} from 'react';

const CaptchaForm = () => {
    const [captchaText, setCaptchaText] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaSum, setCaptchaSum] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // Генерация случайного текста для капчи
    const generateCaptchaText = () => {
        const text = Math.random().toString(36).slice(2, 8).toUpperCase();
        setCaptchaText(text);
    };

    // Генерация случайной суммы для капчи с числами
    const generateCaptchaSum = () => {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        const sum = num1 + num2;
        setCaptchaSum(sum);
    };

    // Обновление значения поля ввода капчи
    const handleCaptchaInput = (event) => {
        setCaptchaInput(event.target.value);
    };

    // Проверка капчи
    const checkCaptcha = () => {
        if (captchaText === captchaInput || captchaSum === parseInt(captchaInput)) {
            setIsFormSubmitted(true);
        } else {
            setErrorMessage('Неверное значение капчи');
            setCaptchaInput('');
            generateCaptchaText();
            generateCaptchaSum();
        }
    };

    // Проверка на пустой ввод
    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    };

    // Установка начальных значений капчи и суммы при загрузке компонента
    useEffect(() => {
        generateCaptchaText();
        generateCaptchaSum();
    }, []);

    function Accumulator(startingValue) {
        this.value = startingValue;

        this.read = function() {
            var userInput = parseFloat(prompt("Введите число", ""));
            if (!isNaN(userInput)) {
                this.value += userInput;
            } else {
                alert("Ошибка! Введено некорректное значение.");
            }
        };
    }

    var accumulator = new Accumulator(10);

    accumulator.read();
    accumulator.read();

    console.log(accumulator.value);

    //функция truncate написана в компоненте collections

    return (
        <div>
            {isFormSubmitted ? (
                <p>Форма отправлена!</p>
            ) : (
                <div>
                    <p>Введите значение капчи:</p>
                    <div>{captchaText}</div>
                    <input type="text" value={captchaInput} onChange={handleCaptchaInput} />
                    {errorMessage && <p>{errorMessage}</p>}
                    <button onClick={checkCaptcha}>Отправить</button>
                </div>
            )}

            {isEmpty(captchaText) && (
                <div>
                    <p>Введите сумму чисел:</p>
                    <div>
                        {captchaSum} + {captchaSum} =
                    </div>
                    <input type="text" value={captchaInput} onChange={handleCaptchaInput} />
                    {errorMessage && <p>{errorMessage}</p>}
                    <button onClick={checkCaptcha}>Отправить</button>
                </div>
            )}
        </div>
    );
};

export default CaptchaForm;