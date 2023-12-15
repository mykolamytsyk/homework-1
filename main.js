const newWord = "Java Script";
console.log(newWord.length - 1);

var items = ["shoes", "shirts", "socks", "sweaters"];
items.length;
console.log(newWord.length - 1);
// возвращает 4

// 1. Задача на фильтрацию:
// Создайте массив строк с именами пользователей. Отфильтруйте этот массив так, чтобы в нем остались только имена, начинающиеся с определенной буквы, которую вы выберете. Выведите полученный массив.

// 2. Задача на объединение массивов:
// Создайте два массива с числами. Объедините их в один новый массив и выведите его.

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = array1.concat(array2);
// console.log(array3);

// 3. Задача на поиск элемента:
// Создайте массив объектов, где каждый объект содержит имя и возраст. Напишите функцию, которая принимает имя и возвращает возраст этой особы. Если человек не найден, возвращайте сообщение об отсутствии.

// Создаем массив объектов
// const peopleArray = [
//   { name: 'Анна', age: 25 },
//   { name: 'Иван', age: 30 },
//   { name: 'Мария', age: 22 },
//   { name: 'Алексей', age: 28 },
// ];

// // Функция для поиска возраста по имени
// function findAgeByName() {
//   // Получаем имя с помощью ввода
//   const inputName = prompt('Введите имя:');

//   // Проходим по массиву объектов
//   for (const person of peopleArray) {
//     // Если имя совпадает, возвращаем возраст
//     if (person.name === inputName) {
//       return person.age;
//     }
//   }

//   // Если человек не найден, возвращаем сообщение об отсутствии
//   return 'Человек с таким именем не найден';
// }

// // Вызываем функцию и выводим результат в консоль
// const result = findAgeByName();
// console.log(result);

// 4. Задача на реверс массива:
// Создайте массив из слов. Разверните порядок элементов в массиве и выведите его.

// const array = ["java", "script"];
// array.reverse()
// console.log(array)

// 5. Задача на знаходження найбільшого числа:
// Напишіть функцію, яка приймає два числа і повертає більше з них

function знайтиБільше(число1, число2) {
  return число1 > число2 ? число1 : число2;
}

// Приклад використання функції
const результат = знайтиБільше(10, 5);
console.log(результат); // Виведе 10, оскільки 10 більше за 5

// 6. Задача на створення об'єкту користувача:
// Напишіть функцію, яка приймає ім'я та вік користувача і повертає об'єкт з цими даними.

// 7. Задача на створення об'єкту книги:
// Напишіть функцію, яка приймає назву книги, автора та рік видання, і повертає об'єкт, що містить ці дані.

// 8. Задача на суму чисел:
// Напишіть цикл, який обчислює суму всіх чисел від 1 до 10 і виводить результат.

// 9. Задача на виведення парних чисел:
// Напишіть цикл, який виводить всі парні числа від 1 до 20.
