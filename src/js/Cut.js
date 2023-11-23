import React from 'react';

const Cut = () => {

    function Accumulation(startValue){
        this.value = startValue;

        this.read = function (){
            let userInput = prompt('Введите число:');
            let number = parseFloat(userInput);
            if (!isNaN(number)){
                this.value += number;
            }
            else{
                alert('Вы ввели некорректное число. Попробуйте заново.')
            }
        }
    }

    const onHandleFunction = ()=>{
        const number = prompt('Введите начальное число: ')
        let accumulation = new Accumulation(Number(number));

        accumulation.read();
        alert(accumulation.value);
    }

    return (
        <button onClick={()=> onHandleFunction()}>
            Корзина
        </button>
    );
};

export default Cut;