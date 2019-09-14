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
    savings : true,
    chooseExpenses: function(){
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        alert("бюджет на 1 день " + appData.moneyPerDay + " рублей");
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let n = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = n;
        }
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log ("минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Середнечок");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Богач");
        } else {
            console.log ("Произошла какая то ошибка");
        }
    }, 
    checkSavings: function () {
        if (appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой %");
            
            appData.monthIncome = (save/100/12*percent).toFixed(2);
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');

            while (items == null || items == '' || (typeof(items)) !=='string') {
                items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
            } 
            appData.income = items.split(", ");
            appData.income.push(prompt('Может что то еще?'));
            appData.income.sort();
                      
      appData.income.forEach(function(item, i, mass) {
            console.log("Способы доп заработка: " + (i + 1) + ": " + item );
        });
    } 
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}




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




// appData.moneyPerDay = appData.budjet / 30;
// alert("бюджет на 1 день " + appData.moneyPerDay + " рублей");




