# fetch(), событие onsubmit, async/await

## Задача

1) Сделать POST запрос по адресу `https://fakestoreapi.com/products` при отправке (submit) формы (в файле `index.html`) вместе с данными из формы. [Подробнее про запрос](https://fakestoreapi.com/docs#p-new).

## Материалы

1) [async/await](https://learn.javascript.ru/async-await)
2) [fetch](https://learn.javascript.ru/fetch)

## В кратце

### JSON

Формат данных в виде js - объекта (разбирали в sm3). Поддерживается почти всеми языками программирования.

### Асинхронное программирование

Часто, особенно при выполнении запросов к серверу мы точно не знаем, сколько займёт выполнение запроса и выполниться ли он вообще. Для этого в js существует множество инструментов. Нам нужны лишь async/await и fetch().

#### async/await

Async позволяет создавать асинхронные функции (`async funciton fnName() {}`, `async () => {}`), код в которых возвращает `Promise` (обещание - англ.). Если просто, `Promise` - это нечто вроде "подожди меня". Чтобы подождать выполнение кода, мы используем `await` (ок, я тебя подожду).

#### fetch()

Очень удобная обёртка для выполнения запросов к серверу.

```js
fetch(адрес по которому делаем запрос, {(опционально)объект с параметрами})
```

Ниже пример кода с асинхронной функцией и fetch().

```js
// Асинхронная функция
async function getProducts() {
  // Зарпос к серверу с помощью функции fetch()
  const response = await fetch('https://test.com/api/products');
  // Берём json ответ из результата запроса
  const products = await response.json(); 
  // Выводим результат
  console.log(await products);
}
```

### Браузерное событие onsubmit

Когда мы делаем отправку формы, то у элемента `<form>`, который мы отправили, происходит событие `onsubmit`. В этом событии мы можем сделать свою обработку (в т.ч. и без перезагрузки страницы).

```html
<form id="addProduct" onsubmit="createProduct(event)">
  <input type="text" name="title" placeholder="title">
  <input type="text" name="price" placeholder="price">
  <input type="text" name="description" placeholder="description">
  <button type="submit">Add product</button>
</form>

<script>
  // Находим элемент формы
  const createProductForm = document.querySelector('#addProduct');

  // Создаём асинхронную функцию событию onsubmit
  async function createProduct(event) {
    // Отключаем стандартное поведение, чтобы страница не обновлялась при отправке формы
    event.preventDefault();
    
    // Используем try {} catch() {}, чтобы отлавливать ошибки из try {} и обрабатывать их в catch{}
    try {
      // Делаем запрос
      const call = await fetch('https://fakestoreapi.com/products', {
        // Ставим метод POST
        method: "POST",
        // Добавляем тело запроса (JSON.stringify() превращает json объект в строку)
        body: JSON.stringify(
          {
            // Далее достаём значение из инпутов формы подобным образом, обращаемся к ним по имени
            title: createProductForm.title.value,
            price: createProductForm.price.value,
            description: createProductForm.description.value,
            image: 'https://i.pravatar.cc',
            category: 'electronic'
          }
        )
      });
      // Достаём json из ответа
      const response = await call.json();
    } catch (error) {
      // Если будет ошибка (все коды HTTP ответа, кроме 200 - 299)
      alert('🚨 Ошибка: ', error);
      // Преждевременный выход из функции
      return;
    } 
    // Выводим ответ от сервера если всё ок
    console.log(await response);
  } 
</script>
```