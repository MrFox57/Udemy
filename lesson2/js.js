let money, time;

function start(){
    money = +prompt("ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("ваш бюджет на месяц?");
    }
}

start();


let appData = {
    budjet : money, 
    timeData : time, 
    expenses : {}, 
    optionalExpenses : {}, 
    income : [], 
    savings : true
};

detectDayBudget();

function detectDayBudget () {
   appData.moneyPerDay = (appData.budjet / 30).toFixed();
   alert("бюджет на 1 день " + appData.moneyPerDay + " рублей");
}


function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
       
        if ( (typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length<50) {
            console.log("done");
            appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
    }
}

chooseExpenses();




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




// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ( (typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length<50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     }
//     i++;
// } while (i < 2);


function chooseOptExpenses () {
    for (let i = 1; i <= 3; i++) {
        let n = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = n;
    }
}

// appData.moneyPerDay = appData.budjet / 30;
// alert("бюджет на 1 день " + appData.moneyPerDay + " рублей");

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log ("минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Середнечок");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Богач");
    } else {
        console.log ("Произошла какая то ошибка");
    }
}


chooseOptExpenses();
console.log(appData.optionalExpenses);

function checkSavings() {
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой %");
        
        appData.monthIncome = (save/100/12*percent).toFixed(2);
        alert("Доход в месяц с депозита: " + appData.monthIncome);
    }
}

checkSavings();