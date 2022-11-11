'use strict';

async function fetchData() {
    let result = null;
    try {
        const response = await fetch('https://reqres.in/api/users?per_page=12');
        result = await response.json();
    } catch(e) {
        console.log(e);
    }
    //1. Получить данные всех пользователей из https://reqres.in/api/users
    console.log(result);

    //2. Вывести в консоль фамилии всех пользователей в цикле
    for (let i = 0; i < result.data.length; i++ ) {
        console.log(result.data[i].last_name);
    }

    //3. Вывести все данные всех пользователей, фамилия которых начинается на F
    for (let i = 0; i < result.data.length; i++ ) {
        if (result.data[i].last_name[0] === 'F') {
            console.log(result.data[i]);
        }
    }

    //4. Вывести следующее предложение: Наша база содержит данные следующих пользователей: и далее в этой же строке через запятую имена и фамилии всехпользователей. Использовать метод reduce
    let reduceResult = result.data.reduce((accumm, item, index) => {
        accumm += `${item.first_name} ${item.last_name}, `;
        return accumm;
    }, '');
    console.log('Наша база содержит данные следующих пользователей:', reduceResult);

    //5. Вывести названия всех ключей в объекте пользователя
    for (let i = 0; i < result.data.length; i++ ) {
        console.log(Object.keys(result.data[0]));
    }   
}

fetchData();
