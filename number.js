Создайте скрипт, который запрашивает ввод двух чисел(используйте prompt)
и после показывает их сумму.

//Решение

function sum() {
    let num1 = +prompt('Число1', '');
    let num2 = +prompt('Число2', '');
    if (num1 > 0 && num1 < 1 && num2 > 0 && num2 < 1) {
        let sum = num1 + num2;
        alert(+sum.toFixed(2));
    }
    alert(num1 + num2);
}

sum();




Методы Math.round и toFixed, согласно документации, округляют до ближайшего
целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

    Например:

alert(1.35.toFixed(1)); // 1.4
Но почему в примере ниже 6.35 округляется до 6.3 ?

    alert(6.35.toFixed(1)); // 6.3
Как правильно округлить 6.35 ?


    //Решение
    alert(6.35.toFixed(20)); 4
        //Потому что на самом деле 6.35 - это 6.3499999...964473
        //От 0 до 4 округляется в меньшую сторону, поэтому 6.3

        //Приблизим число 6.35 к целому.
        (6.35 * 10).toFixed(20); - потери точности нет

//Округляем число
alert(Math.round(6.35 * 10) / 10);





Создайте функцию readNumber, которая будет запрашивать ввод числового значения
до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку
или нажав «Отмена».В этом случае функция должна вернуть null.

//Решение


function readNumber() {
    let number;

    for (; ;) {
        number = prompt('Введите число', '');

        if (number === null || number === '') return null;

        if (isNaN(+number)) {
            continue;
        } else {
            break;
        }
    }
    return +number;
}
readNumber();

let number = prompt('Введите число', '');
console.log(+number);
console.log(typeof (+number));
console.log(typeof (+number) === 'number');




Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
  i += 0.2;
}

//Ответ: из-за потери точности


Встроенный метод Math.random() возвращает случайное число от 
0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число
 с плавающей точкой от min до max (но не включая max).

Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525

Если мы умножим случайное число от 0…1 на max-min, тогда интервал
возможных значений от 0..1 увеличивается до 0..max-min.
И, если мы прибавим min, то интервал станет от min до max.

function random(min, max) {
    return min + Math.random() * (max - min);
  }

random(1, 5);






Напишите функцию randomInteger(min, max), которая генерирует случайное целое
(integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }

  randomInteger(1, 5);