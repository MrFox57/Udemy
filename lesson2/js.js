let money = prompt("ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let arr = [money, time];
// console.log(arr[0], arr[1]);


let timeData = time;
let savings = false;
let expenses = [];
let optionalExpenses = [];
let income = [];
let appData = [money, timeData, expenses, optionalExpenses, income, savings];

alert("бюджет на 1 день " + money/30 + " рублей");
console.log(appData);