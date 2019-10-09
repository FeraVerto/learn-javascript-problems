//Задание 1
let name = prompt('Какое «официальное» название JavaScript?', '');
let ecma = (name == 'ECMAScript') ? alert('Правильно!') : 
                                    alert('You don t know? “ECMAScript”!');

//Или
let name = prompt('Какое «официальное» название JavaScript?', '');
if (name == 'ECMAScript') {
    alert('Правильно!');
} else {
    alert('You don t know? “ECMAScript”!');
}


//Задание 2
//Используя конструкцию if..else, напишите код, 
//который получает число через prompt, а затем выводит в alert

let number = prompt('Напишите число', '');

if(number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

//Задание 3
//Перепишите if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

let result = (a + b < 4) ? 'Мало' : 'Много';

//Задание 4
//Перепишите if..else с использованием нескольких операторов '?'

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

let massage = (login == 'Сотрудник') ?
            'Привет' : (login == 'Директор') ?
            'Здравствуйте' : (login == '') ?
            'Нет логина' : '';
