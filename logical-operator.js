alert( null || 2 || undefined );
//2 - это первый true

alert( alert(1) || 2 || alert(3) );
// Сначала выведет 1, так как сначала вычисляется выражение
// Потом Выведет 2, так как alert(1) - не вычисляется,
// это undefined == false

alert( 1 && null && 2 );
//null - это первый false

alert( alert(1) && alert(2) );
// Сначала выведет 1, а потом undefined

alert( null || 2 && 3 || 4 );
//3, так как прироритет у && выше, он вычисляется первым
// и в этом случае выведет 3, так как вычисления идут до первого 
//false, но его нет, значит выведет последний операнд 3.
//Далее идет вычисление до первого true, а это 3.

Напишите условие if для проверки, что переменная age
 находится в диапазоне между 14 и 90 включительно.

«Включительно» означает, что значение переменной age 
может быть равно 14 или 90.

Решение:

let age;

if (age >= 14 && age <= 90) {
    alert ("Принадлежит интервалу");
}




Напишите условие if для проверки, что значение переменной
 age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора
 НЕ !, второй – без этого оператора.

 Решение:

 let age;

 if (age < 14 && age > 90) {
     alert ("Не принадлежит интервалу");
 }

 if (!(age >= 14 && age <= 90)) {
    alert ("Не принадлежит интервалу");
}




if (-1 || 0) alert( 'first' );
//Выполнится first
if (-1 && 0) alert( 'second' );
//Не выполнится
if (null || -1 && 1) alert( 'third' );
//Выполнится third




Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».

let login = prompt('who s there?', '');

if (login == 'Админ') {

    let password = prompt('password', '');
    if(password === 'Я главный') {
        alert('Здравствуйте!');
    } else if (password == null || password == '') {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (login == null || login == '') { 
    alert('Отменено');
} else {
    alert('I dont know you');
}