let name = prompt('Как тебя зовут?');
let age = prompt('Сколько тебе лет?');

if (age < 20) {
    alert('Тебе меньше 20 лет!');
} else {
    for (let i = 0; i < 5; i++) {
        alert('Привет');
    }
}

if (confirm('Хочешь учить js?'))
    alert('Супер')