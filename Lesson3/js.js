// function showFirstMessage (text) {
//     alert(text);
// } 

// showFirstMessage("hello world");
// Возвращает результат операции
// function calc(a, b) {
// return (a + b);
// }

let calc = (a,b) => a+b;

console.log(calc(3,4));
console.log(calc(5,8));

// возвращает переменную во вне
function retVar () {
    let num = 50;
    return num;
}

// Использование переменной из функции
let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));
