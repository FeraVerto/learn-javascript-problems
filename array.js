Что выведет следующий код ?

    let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); // ?

//Ответ 4




Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок - н - ролл» в конец.
Замените значение в середине на «Классика».Ваш код для поиска значения
в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
    Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок - н - ролл
Джаз, Классика, Рок - н - ролл
Классика, Рок - н - ролл
Рэп, Регги, Классика, Рок - н - ролл

let styles = [];
styles[0] = 'Джаз';
styles[1] = 'Блюз';
styles.push = 'Рок-н-ролл';
styles[Math.floor(styles.length - 1 / 2)] = 'Классика';
styles.shift();
styles.unshift('Рэп', 'Регги');

console.log(styles);





Каков результат ? Почему ?

    let arr = ["a", "b"];

arr.push(function () {
    alert(this);
})

arr[2](); // ?

//Ответ: [a, b, function];









Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое
значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
    P.S.Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

//Решение

function sumInput() {
    // let value = prompt('Введите значение', '');
    let arrayValue = [];
    let sumValue = 0;

    for (let i = 0; ; i++) {
        let value = +prompt('Введите значение', '');

        if (value === '' || value === null || isNaN(value) === true) {
            break;
        } else if (typeof (value) === 'number') {
            arrayValue.push(value);
        }
    }

    for (let i = 0; i < arrayValue.length; i++) {
        sumValue += arrayValue[i];
    }

    return sumValue;
}

sumInput();

На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.

arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        let arrSlice = arr.slice(i, arr.length);
        console.log(arrSlice);
        for (let j of arrSlice) {
            sum += arrSlice[j];
        }
    
    }
    return sum;
}

getMaxSubSum(arr);