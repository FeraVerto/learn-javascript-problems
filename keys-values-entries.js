Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с 
помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
    let sum = 0;
    
    for (let value of Object.values(salaries)) {
        sum += value;
    }

    return sum;
}

alert( sumSalaries(salaries) ); // 650

//2 способ решения

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}









Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

//Решение

let user = {
    name: 'John',
    age: 30
  };
  
  function count(obj) {
    return Object.keys(obj).length;
}

  alert( count(user) );
