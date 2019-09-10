// Объекты
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log (options.name);
options.bool = false // добавили новую переменную в объект
options.colors = {
    border: "black",
    bg: "red"
}; // добавили в новую перменную новый объект

delete options.bool; // удалили переменную из объекта

console.log(options);

// цикл перебора переменных объекта

for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);