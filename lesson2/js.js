let money = +prompt("ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let arr = [money, time];
// console.log(arr[0], arr[1]);

let appData = {
    budjet : money, 
    timeData : time, 
    expenses : {}, 
    optionalExpenses : {}, 
    income : [], 
    savings : false
};



// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = prompt("Во сколько обойдется?", '');
   
    // if ( (typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length<50) {
    //     console.log("done");
    //     appData.expenses[a] = b;
//         } else {
            
//         }
// }




// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = prompt("Во сколько обойдется?", '');

//     if ( (typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length<50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     }
//     i++;
// // }




let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length<50) {
        console.log("done");
        appData.expenses[a] = b;
    }
    i++;
} while (i < 2);

appData.moneyPerDay = appData.budjet / 30;
alert("бюджет на 1 день " + appData.moneyPerDay + " рублей");

if (appData.moneyPerDay < 100) {
    console.log ("минимальный уровень доставтка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Середнечок");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Богач");
} else {
    console.log ("Произошла какая то ошибка");
}