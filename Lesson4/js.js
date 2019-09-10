function first () {
    // что то делаем
    setTimeout ( function(){
        console.log(1);
    }, 1100);
}

function second () {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log("Я учу "+lang);
    callback();
}

function done () {
    console.log("Я ничего не понимаю из третьего урока");
}

learnJS("JavaScript", done);