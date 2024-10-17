// Тот самый массив
const developers = [
    { name: 'John', surname: 'Doe', age: 20, talk: () => { console.log('Hello world!') } },
    { name: 'Василий', surname: 'Иванов', age: 21 },
    { name: 'Екатерина', surname: 'Демидова', age: 21 },
    { name: 'Пётр', surname: 'Шереметьев', age: 19 },
];

const newDeveloper = {
    name: prompt('HR: Как Вас зовут?'),
    surname: prompt('HR: Какая у Вас фамилия?'),
    age: prompt('HR: Сколько Вам лет?'),
};

let exp;

// Проверка на то, что мы вводим именно число
while (!Number.isInteger(parseInt(exp))) {
    exp = prompt('HR: Сколько лет опыта в it?');
}

if (exp < 3) {
    alert('HR: Прости, но у тебя слишком мало опыта :(');
} else {
    alert("Lead: Добро пожаловать в команду!");
    alert("Lead: Поприветствуйте нового коллегу!");

    /**
     * Нужно переписать код ниже так, чтобы каждый сотрудник 
     * из массива developers поздоровался с Вами.
     * 
     * 💡 @ПОДСКАЗКА : используйте метод прототипа массивов
     * (т.е. метод, который есть у любого массива) - map()
     * 
     * Шаблон сообщения - ИМЯ: Привет!
     *  */
    developers.map((obj) => alert(`${obj.name}: hello!`));

    developers.push(newDeveloper);
    /**
     * Добавить объект newDeveloper в массив developers
     * (именно в этом месте кода)
     */
}

console.log(developers);