let menu = document.querySelector('.menu'), //cамо меню
vop = prompt("Что Вы думаете об эппл?"), // вопрос клиенту
prom = document.getElementById('prompt'), // запись ответа 
tras = document.querySelector('.adv'), // удалить блок
mlist = document.getElementsByTagName('li'),
col = document.querySelectorAll('.column'),
zag = document.getElementById('title'); //список в меню


// поменл каринку заднего фона
document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

// Сортировка меню 


// console.log(menu);
// console.log(mlist);


// Записал ответ пользователя
prom.innerText = vop;

let li = document.createElement('li');
    li.classList.add('menu-item');
    li.innerHTML = 'Пятая кнопка';

// Добавление кнопки к остальным. 

    menu.appendChild(li);
    menu.insertBefore(mlist[2], mlist[1]);
   
col[1].removeChild(tras);

zag.textContent = 'Мы продаем только подлинную технику Apple'

console.log(li);
console.log(col);