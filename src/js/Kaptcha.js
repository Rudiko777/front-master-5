import React, {useRef, useState} from 'react';

const Kaptcha = () => {

    const [disabled, setDisabled] = useState(false)
    const generateRandomValues = ()=>{
        const result = {
            first: 0,
            second: 0,
        };
        result.first = Math.floor(Math.random() * 10000);
        result.second = Math.floor(Math.random() * 10000);
        result.answer = result.first + result.second;
        return result;
    }

    const myInput = useRef(0);
    const firstValue = useRef(0);
    const secondValue = useRef(0);
    const myForm = useRef();

    const isTrue = ()=>{
        const firstResult = firstValue.current.textContent;
        const secondResult = secondValue.current.textContent;
        if (Number(firstResult) + Number(secondResult) !== Number(myInput.current.value)){
            setDisabled(!disabled);
        }
    }

    const isTrueRight = ()=>{
        const firstResult = firstValue.current.textContent;
        const secondResult = secondValue.current.textContent;
        if (Number(firstResult) + Number(secondResult) === Number(myInput.current.value)){
            return true
        }
        return false
    }

    return (
        <div>
            <span ref={firstValue}>{generateRandomValues().first}</span>
            <span> + </span>
            <span ref={secondValue}>{generateRandomValues().second}</span>
            <span> = </span>
            <input type={"number"} className={"kaptchaAnswer"} ref={myInput}/>
            <button style={{display: "block"}} onClick={() => isTrue()}>
                Проверить результат
            </button>
            {
                isTrueRight() ? <>Верно</> : <>Пока не верно</>
            }
        </div>
    );
};

export default Kaptcha;