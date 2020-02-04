1) Переведите текст вида border - left - width в borderLeftWidth

Напишите функцию camelize(str), которая преобразует строки вида «my - short - string»
в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.

    Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

P.S.Подсказка: используйте split, чтобы разбить строку на массив символов,
    потом переделайте всё как нужно и методом join соедините обратно.

//Мое решение

function camelize(str) {
    let arrStr = str.split('');
    //Разделяет строку на символы

    arrStr.map(function (item, index, arrStr) {
        //Прверяет: если символ '-', то следующий за ним символ
        //переводит в верхний регистр, удаляет дефис вместе со следующим символом 
        //и вставляет символ переведенный в верхний регистр
        if (item == '-') {
            let itemUp = arrStr[index + 1].toUpperCase();
            arrStr.splice(index, 2, itemUp);
        }
    })
    //Склеивает все символы в одну строку
    return arrStr.join('');
}

//Решение из учебника

function camelize(str) {
    return str
        .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
        .map(
            // Переводит в верхний регистр первые буквы всех элементом массива за
            //исключением первого
            // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

//Более быстрый и компактный способ








2) Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в
нём элементы между a и b и отдаёт массив этих элементов.
Функция должна возвращать новый массив и не изменять исходный.

    Например:

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (совпадающие значения)
alert(arr); // 5,3,8,1 (без изменений)



//Решение

function filterRange(arr, a, b) {
    return arr.filter(c => c >= a && c <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 5);
alert(filtered);
alert(arr);






3) Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr
и удаляет из него все значения кроме тех, которые находятся между a и b.То есть,
    проверка имеет вид a ≤ arr[i]≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

    Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert(arr); // [3, 1]


//Решение

//function filterRangeInPlace(arr, a, b) {
//    arr.map((item, index) => (a <= item && item <= b) ? item : arr.splice(index, 1) && index--);
//    return;
//}


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            continue;
        }
        arr.splice(i, 1);
        i--;
    }
    return;
}


let arr = [5, 3, 8, 8, 1, 3, 9, 9];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert(arr); // [3, 1]








4) Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

function compareNumeric(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
}

arr.sort(compareNumeric);

alert(arr); // 8, 5, 2, 1, -10

//Решение из учебника
arr.sort((a, b) => b - a);







5) У нас есть массив строк arr.Нужно получить отсортированную копию,
    но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

function copySorted(arr) {
    return arr.concat().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)

//В учебнике использован slice вместо concat






6) Создайте функцию конструктор Calculator, которая создаёт «расширяемые»
объекты калькулятора.



function Calculator(str) {

    this.calculate = function (str) {
        let arrStr = str.split('');
        if (arrStr[2] === '+') {
            return Number(arrStr[0]) + Number(arrStr[4]);
        }
        return Number(arrStr[0]) - Number(arrStr[4]);
        //arrStr.map(item => Number(item));
        //return arrStr.reduce((sum, current) => sum + current, 0);

    };

    this.addMethod = function (name, func) {
        
        if (name == '*') {
            return (func = (a, b) => a * b);
        } if (name == '/') {
            return (func = (a, b) => a / b);
        } if (name == '**') {
            return (func = (a, b) => Math.pow(a, b));
        }
        
    }
};


let calc = new Calculator;
alert(calc.calculate("3 + 7")); // 10
alert(calc.calculate("3 - 7"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("8 / 2");
alert( result ); // 8


//Решение
//Задачу сама не решила, ответ есть на learn.javascript






7) У вас есть массив объектов user, и в каждом из них есть user.name. 
Напишите код, который преобразует их в массив имён.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); // Вася, Петя, Маша





8) У вас есть массив объектов user, и у каждого из объектов есть name, surname
и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
где fullName – состоит из name и surname.

Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map((item) => ({
    fullName: `${item.name} ${item.surname}`,
    id: item.id
}));


/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
Итак, на самом деле вам нужно трансформировать один массив объектов в другой.
Попробуйте использовать =>. Это небольшая уловка.







9) Напишите функцию sortByAge(users), которая принимает массив объектов со 
свойством age и сортирует их по нему.

Например:

function sortByAge(arr) {
     
    arr.sort( function (a, b) {
        if (a.age > b.age) return 1;
        if (a.age == b.age) return 0;
        if (a.age < b.age) return -1;
    });
};


/*
Решение от learn.javascript

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}*/


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя






10) Напишите функцию shuffle(array), которая перемешивает (переупорядочивает 
случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям 
элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
Все последовательности элементов должны иметь одинаковую вероятность. Например, 
[1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., 
с равной вероятностью каждого случая.

//Решение learn.javascript Тасование Фишера-Йетса
//Суть заключается в том, чтобы проходить по массиву в обратном порядке и менять 
//местами каждый элемент со случайным элементом, который находится перед ним.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

// подсчёт вероятности для всех возможных вариантов
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // показать количество всех возможных вариантов
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
  }




  11) Напишите функцию getAverageAge(users), которая принимает массив 
  объектов со свойством age и возвращает средний возраст.

  Формула вычисления среднего арифметического значения: 
  (age1 + age2 + ... + ageN) / N.
  
  Например:
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 29 };
  
  let arr = [ vasya, petya, masha ];

  function getAverageAge(users) {
    let result = users.reduce((sum, current) => sum + current.age, 0);

    return result/users.length;
  }
  
  alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28







  12) Пусть arr – массив строк.

  Напишите функцию unique(arr), которая возвращает массив, содержащий только 
  уникальные элементы arr.
  
  Например:
  
  function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O