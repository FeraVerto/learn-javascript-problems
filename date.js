Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
Временная зона – местная.

Для вывода используйте alert.

//Решение

let now = new Date(2012, 1, 20, 3, 12);
alert(now);





Напишите функцию getWeekDay(date), показывающую день недели в коротком формате:
«ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
// нужно вывести "ВТ"

function getWeekDay(date) {
    let dayWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    let day = date.getDay();

    return dayWeek[day];
}

alert(getWeekDay(date));








В Европейских странах неделя начинается с понедельника(день номер 1), затем идёт
вторник(номер 2) и так до воскресенья(номер 7).Напишите функцию getLocalDay(date),
    которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getLocalDay(date) {
    let dayWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    let day = date.getDay();

    return dayWeek[day - 1];
}

alert(getLocalDay(date));       // вторник, нужно показать 2


//Решение на learn.javascript

function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
        day = 7;
    }

    return day;
}








Создайте функцию getDateAgo(date, days), возвращающую число, 
которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то 
getDateAgo(new Date(), 1) вернёт девятнадцатое и 
getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших 
значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.



//Решение

