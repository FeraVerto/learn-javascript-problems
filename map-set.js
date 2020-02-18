Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся
значений массива arr.

  Например:



function unique(arr) {
  /* ваш код */
  let set = Array.from(new Set(arr));
  return set;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare, Krishna, :-O
P.S.Здесь мы используем строки, но значения могут быть любого типа.

  P.P.S.Используйте Set для хранения уникальных значений.







    Анаграммы – это слова, у которых те же буквы в том же количестве, но они
располагаются в другом порядке.

  Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от
анаграмм.

  Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//Решение 1

function aclean(arr) {
  // 1* Запускаем цикл в массиве arr
  // 2* Каждый элемент цикла превращаем в массив Array.from();
  // 3* Сортируем элементы нового массива от большего к меньшему
  // 4* Превращаем arr в Set, убираются похожие элементы
  // 5* Те слова, что остались надо как-то вернуть в исходное состояние

  // 3а* Использовать Map, где ключ - исходное слово, значение - отсортированное
  // 4а* Сравнить все значения. Если есть совпадения, удалить повторяющиеся
  //     значения вместе с ключом.
  // 5а* Все ключи, что остались как-то обьединить в массив)))) 


//Оказалось, что ключи в Map  не могут повторяться


  for (let a of arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }

    return Object.values(obj);

  }
}

// Решение 2
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.










Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с 
ними, например, применить метод .push.

Но это не выходит:


let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?


//Ответ Array.from(map.keys);