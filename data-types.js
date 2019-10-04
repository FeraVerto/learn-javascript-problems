Типы данных
Что выведет этот скрипт

let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?*/ 

Решение

 1) 1;
 2) name;
 3) Ilya;

 ////////////////////////////////////////////////////////

Преобразование типов
Какой результат будет у выражений ниже?

"" + 1 + 0 ========= "1"            -неверно
//Сложение со строкой преобразует 1 к строке, так же и 0.
//Правильный ответ "10"

"" - 1 + 0 ========= -1             -верно
true + false ======= 1              -верно
6 / "3" ============ 2              -верно
"2" * "3" ========== 6              -верно

4 + 5 + "px" ======= '9+px'         -неверно
//Сначала произойдет сложение чисел, а потом сложение со строкой
//Все выражение станет строкой
//Правильный ответ '9px'

"$" + 4 + 5 ======== '$ + 9'        -неверно
//Сложение со строкой преобразует 4 к строке, так же и 5.
//Правильный ответ '$45'

"4" - 2 ============ 2              -верно

"4px" - 2 ========== '4px - 2'      -неверно
//Так как стоит оператор - , то второе число мы не можем привести к строке
//И первое число мы не можем привести к числу, так как там есть не числовые символы
//Правильный ответ NaN
7 / 0 ============== infinity       -верно

"  -9  " + 5 ======= -4             -неверно
//Так как стоит оператор +, то второе слагаемое приводдится к строке
//Правильный ответ ' -9 5'
"  -9  " - 5 ======= '-9-5'         -неверно
//Так как оператор -, значит приводим оба операнда к числам
//Правильный ответ -14

null + 1 =========== 1              -верно
undefined + 1 ====== NaN            -верно

" \t \n" - 2 ======= ' \t \n - 2'   -неверно
//Оператор -, значит приводим к числам.
//Оказывается, что пробельный символы игнорируются при преобразовании, 
//поэтому это выражение аналогично пустой строке
//Правильный ответ -2

true + false =============== 1             -верно
8 / "2" ==================== 4             -верно
"number" + 5 + 1 =========== number51      -верно
5 + 1 + "number" =========== 6number       -верно

7 && 2 ===================== true          -неверно
// Первый аргумент - true,
// Поэтому возвращается второй аргумент
// Правильный ответ 2

2 && 7 ===================== true          -неверно
// Первый аргумент - true,
// Поэтому возвращается второй аргумент
// Правильный ответ 7

null + 1 =================== 1             -верно
undefined + 1 ============== NaN           -верно

"five" + + "two" =========== fivenulltwo   -неверно
//("five" + (+"two"))=> "five" + NaN
//Правильный ответ fiveNaN

'true' == true ============= true          -неверно
//(NaN == 1 => false)
//Правильный ответ false

false == 'false' =========== false         -угадала
//(0 == NaN => false)
//Правильный ответ false

null == '' ================= false         -угадала
//null - это false
//пустая строка - это false

!!"false" == !!"true" ====== false         -неверно
//true == true
//Правильный ответ true

"4" - 3 ==================== 1             -верно
"4px" - 3 ================== NaN           -верно

0 || "0" && 1 ============== true          -неверно
//К выражениям добавлены соответствующие комментарии. Последнее выражение 
//рассмотрим отдельно: 0 || "0" && 1. Логические операторы || и && приводят
// значения операндов к логическому типу, но при этом возвращают исходные 
//операнды, которые имеют тип, отличный от логического. Значение 0 ложно, 
//а '0' – истинно, т. к. является строкой. 1 так же преобразуется в true:
//Правильный ответ 1