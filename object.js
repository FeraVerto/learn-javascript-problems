/* Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

let user = {}

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

/* Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет
свойств, иначе false.
Должно работать так:

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false */

let name = {}

function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }

  isEmpty(name);

  //цикл for in не запускается в случае отсутствия свойств.



//Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";

//Да, так как мы работаетм внутри объекста, а не перезаписываем саму клнстанту




//У нас есть объект, в котором хранятся зарплаты нашей команды:
//Напишите код для суммирования всех зарплат и сохраните результат
//в переменной sum. Должно получиться 390.
//Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalaries (obj) {
    let sum = 0;
    for(let prop in obj) {
        sum += obj[prop];
    }
    return sum;
}

sumSalaries(salaries);





/* Создайте функцию multiplyNumeric(obj), 
которая умножает все числовые свойства объекта obj на 2.
 */

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function changeObject(obj) {
    for(let prop in obj) {
        if(typeof(obj[prop]) == 'number') {
            obj[prop] *= 2;
        } 
    }
}

changeObject(menu);

