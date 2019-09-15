let startBtn = document.getElementById("start"),
    budgetValue = document.body.getElementsByClassName('budget-value')[0], 
    dayBudgetValue = document.body.getElementsByClassName('daybudget-value')[0],
    levelValue = document.body.getElementsByClassName('level-value')[0],
    expensesValue = document.body.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.body.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.body.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.body.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.body.getElementsByClassName('yearsavings-value')[0],
    


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    btn = document.body.querySelectorAll('button'),
    dayValue = document.querySelector('.day-value');

let money, time;

btn.forEach(function(item, i , btn){
    item.disabled = true;  
    startBtn.disabled = false;
    console.log(item);
});


// expensesBtn.disabled = true;
// optionalExpensesBtn.disabled = true;
// countBtn.disabled = true;

    startBtn.addEventListener('click', function() {
        btn.forEach(function(item, i , btn){
            item.disabled = false;  
            console.log(item);
        });
        
       
        time = prompt("Введите дату в формате YYYY-MM-DD", '');
        money = +prompt("ваш бюджет на месяц?", '');
        
        while (isNaN(money) || money == "" || money == null) {
            money = +prompt("ваш бюджет на месяц?", '');
        }
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDay();
        
        // expensesBtn.disabled = false;
        // optionalExpensesBtn.disabled = false;
        // countBtn.disabled = false;
    });

    expensesBtn.addEventListener('click', function(){
        let sum = 0;
        
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
            b = expensesItem[++i].value;
            
            if ( (typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length<50) {
                console.log("done");
                appData.expenses[a] = b;
                sum += +b;
                
                } else {
                    i = i - 1;
            }
        }
        expensesValue.textContent = sum;
    });

    optionalExpensesBtn.addEventListener('click', function(){
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let n = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = n;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    });

    countBtn.addEventListener('click', function(){

        if (appData.budget != undefined) {
            appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
            dayBudgetValue.textContent = appData.moneyPerDay;
        }
           
        if (appData.moneyPerDay < 100) {
                levelValue.textContent = "минимальный уровень достатка";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "Середнечок";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Богач";
            } else {
                levelValue.textContent = "Произошла какая то ошибка";
            }
    });

    incomeItem.addEventListener('input', function() {
        let items = incomeItem.value;
    
        // while (items == null || items == '' || (typeof(items)) !=='string') {
        //     items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
        // } 
        appData.income = items.split(", ");
        incomeValue.textContent = appData.income;
    });


    checkSavings.addEventListener('click', function (){
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sumValue.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;
            appData.monthIncome = (sum/100/12*percent);
            appData.yearIncome = (sum/100*percent);

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    percentValue.addEventListener('input', function(){
        if (appData.savings == true) {
            let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = (sum/100/12*percent);
        appData.yearIncome = (sum/100*percent);

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });
    
let appData = {
        budget : money, 
        timeData : time, 
        expenses : {}, 
        optionalExpenses : {}, 
        income : [], 
        savings : false,};
        // chooseExpenses: function(){
        //     for (let i = 0; i < 2; i++) {
        //         let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        //         b = prompt("Во сколько обойдется?", '');
                
        //         if ( (typeof(a)) ==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length<50) {
        //             console.log("done");
        //             appData.expenses[a] = b;
        //             } else {
        //                 i = i - 1;
        //             }
        //     }
        // },
        // detectDayBudget: function() {
        //     appData.moneyPerDay = (appData.budget / 30).toFixed();
        //     alert("бюджет на 1 день " + appData.moneyPerDay + " рублей");
        // },
        // chooseOptExpenses: function() {
        //     for (let i = 1; i <= 3; i++) {
        //         let n = prompt("Статья необязательных расходов?");
        //         appData.optionalExpenses[i] = n;
        //     }
        // },
        // detectLevel: function () {
        //     if (appData.moneyPerDay < 100) {
        //         console.log ("минимальный уровень достатка");
        //     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        //         console.log ("Середнечок");
        //     } else if (appData.moneyPerDay > 2000) {
        //         console.log ("Богач");
        //     } else {
        //         console.log ("Произошла какая то ошибка");
        //     }
        // }, 
    //     checkSavings: function () {
    //         if (appData.savings == true){
    //             let save = +prompt("Какова сумма накоплений?"),
    //                 percent = +prompt("Под какой %");
                
    //             appData.monthIncome = (save/100/12*percent).toFixed(2);
    //             alert("Доход в месяц с депозита: " + appData.monthIncome);
    //         }
    //     },
    //     chooseIncome: function () {
    //         let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
    
    //             while (items == null || items == '' || (typeof(items)) !=='string') {
    //                 items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
    //             } 
    //             appData.income = items.split(", ");
    //             appData.income.push(prompt('Может что то еще?'));
    //             appData.income.sort();
                          
    //       appData.income.forEach(function(item, i, mass) {
    //             console.log("Способы доп заработка: " + (i + 1) + ": " + item );
    //         });
    //     } 
    // };
    
    // for (let key in appData) {
    //     console.log("Наша программа включает в себя данные: " + key);
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
    
    

    