'use strict'


let calculate = document.getElementById('calculate');

calculate.onclick = () => {
    let getNum1 = document.getElementById('num1').value;
    let getNum2 = document.getElementById('num2').value;
    let operator = document.getElementById('operator').value;

    let num1 = Number(getNum1);
    let num2 = Number(getNum2);
    let result;

    if (getNum1 == '') {
        console.log('Первое число не указано');
    };
    if (getNum2 == '') {
        console.log('Второе число не указано');
    };
    if (isNaN(num1) == false && isNaN(num2) == false) {
        switch (operator) {
            case '': console.log('Не введен знак'); break;
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '/': result = num1 / num2; break;
            case '*': result = num1 * num2; break;
            default: {console.log('Программа не поддерживает такую операцию')};
        }
        if ((result != Infinity || result != -Infinity) && typeof result != "undefined") {
            console.log(result);
        } else {
            console.log('Операция некорректна')
        }
    } else {
        console.log('Некорректный ввод чисел');
    };
};
