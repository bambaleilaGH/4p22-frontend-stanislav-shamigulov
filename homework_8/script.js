'use strict';

let calculate = document.getElementById('calculate');
calculate.onclick = () => {
    let getNum1 = document.getElementById('num1').value;
    let getNum2 = document.getElementById('num2').value;
    let operator = document.getElementById('operator').value;
    let num1 = Number(getNum1);
    let num2 = Number(getNum2);
    let result;
    let otvet = () => {
        if (!isNaN.result && typeof result !== 'undefined') {
            console.log(result);
        } else {
            console.log('Операция некорректна');
        }
    }
    if (getNum1.trim() === '') {
        console.log('Первое число не указано');
        num1 = null;
    }
    if (getNum2.trim() === '') {
        console.log('Второе число не указано');
        num2 = null;
    }
    if ((num1 !== null && num2 !== null) && (!isNaN(num1) && !isNaN(num2))) {
        switch (operator) {
            case '': {
                console.log('Не введен знак');
                break;
            }
            case '+': {
                result = num1 + num2;
                otvet();
                break;
            }
            case '-': {
                result = num1 - num2;
                otvet();
                break;
            }
            case '/': {
                if (num2 === 0) {
                    console.log('Некорректный ввод чисел (деление на 0)');
                } else {
                    result = num1 / num2;
                }
                otvet();
                break;
            }
            case '*': {
                result = num1 * num2;
                otvet();
                break;
            }
            default: {
                console.log('Программа не поддерживает такую операцию');
            }
        }
    } else {
        console.log('Некорректный ввод чисел');
    }
};
