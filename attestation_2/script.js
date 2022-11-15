'use strict';

const submitButton = document.getElementById('submit');
submitButton.onclick = function() {
    let emailError = document.getElementById('error_email');
    let passError = document.getElementById('error_pass');
    let confirmError = document.getElementById('error_confirm');
    let emailInput = document.getElementById('input_email');
    let passInput = document.getElementById('input_pass');
    let confirmInput = document.getElementById('input_confirm');
    
    let correctEmail;
    let status;
    let person;
    let email;
    let pass;
    let gender;
    let resume = document.getElementById('input_resume').value;
    let agree;

    function check() {
        if (emailInput.value === '') {
            emailError.innerHTML = 'Поле обязательно для заполнения';
            emailInput.style.borderColor = 'red';
        } else {
            emailError.innerHTML = null;
            emailInput.style.borderColor = null;
            email = emailInput.value;
            function validateEmail() {  
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
                return re.test(String(email).toLowerCase());
            }
            correctEmail = validateEmail();
            if (correctEmail === false) {
                emailInput.style.borderColor = 'red';
                emailError.innerHTML = 'Email введён некорректно';
            }
        }

        if (passInput.value === '') {
            passError.innerHTML = 'Поле обязательно для заполнения';
            passInput.style.borderColor = 'red';
            status = false;
        } else {
            passInput.innerHTML = null;
            if (passInput.value.length < 8) {
                passError.innerHTML = 'Пароль должен содержать не менее 8 символов';
                passInput.style.borderColor = 'red';
                status = false;
            } else {
                passError.innerHTML = null;
                passInput.style.borderColor = null;
                status = true;
            }
        }

        if (confirmInput.value === '' || passInput.value != confirmInput.value) {
            confirmError.innerHTML = 'Пароли не совпадают';
            confirmInput.style.borderColor = 'red';
            status = false;
        } else {
            confirmError.innerHTML = null;
            confirmInput.style.borderColor = null;
            pass = passInput.value;
        }

        function getGender() {
            if (document.getElementById('male').checked) {
                gender = 'мужчина';
            } else {
                gender = 'женщина';
            }
        }
        getGender();

        function getAgree() {
            if (document.getElementById('agree').checked) {
                agree = 'yes';
            } else {
                agree = 'no';
            }
        }
        getAgree();

    }
    check();

    if (status === true && correctEmail === true) {
        person = {
            email: email,
            pass: pass,
            gender: gender,
            resume: resume,
            agree: agree
        }
        console.log(person);
    } 
}

