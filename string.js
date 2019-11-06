Напишите функцию ucFirst(str), возвращающую строку str с
заглавным первым символом.Например:

ucFirst("вася") == "Вася";

function ucFirst(string) {
    if (!str) return str;

    let first = string[0];
    let firstUp = first.toUpperCase();

    return first.toUpperCase() + string.slice(1);
}

ucFirst('привет');





Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra'
или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false


function checkSpam(str) {
    let spam = str.toLowerCase();
    let substring1 = spam.includes('viagra');
    let substring2 = spam.includes('xxx');

    if (substring1 || substring2) {
        return true;
    } else {
        return false;
    }
}





Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
    если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина
стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо,
    если необходимо, усечённая строка.

        truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
truncate("Всем привет!", 20) = "Всем привет!"

//Решение


function truncate(str, maxlength) {
    if(str.length > maxlength) {
        return str.slice(0, maxlength-1) + '…';
    } else {
        return str;
    }
    
}

truncate('Приветприветпривет', 21);






Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты,
а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки
выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true

//Решение

function extractCurrencyValue(str) {
  return Number(str.substr(1, str.length));
}

extractCurrencyValue('$10251454545');

