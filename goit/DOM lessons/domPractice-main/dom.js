// Создать div
const div = document.createElement("div");
// Добавить к нему класс wrapper
div.className = "wrapper";
// Поместить его внутрь тэга body
const body = document.querySelector("body");
// const body = document.body; простой доступ к елементу
// (можно использовать append or appendchild)
body.append(div);
// Создать заголовок H1 "DOM (Document Object Model)"
const header = document.createElement("h1");
header.textContent = "DOM (Document Object Model)";
// Добавить H1 перед DIV с классом wrapper
div.insertAdjacentElement("beforebegin", header);

// Создать список <ul></ul>
// Добавить в него 3 элемента с текстом "один, два, три"
const ul = `<ul>
<li>один</li>
<li>два</li>
<li>три</li>
</ul>`;
// Поместить список внутрь элемента с классом wrapper
div.innerHTML = ul;
// =================================================
// Создать изображение
const img = document.createElement("img");
// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
img.src = "http://picsum.photos/240";
// 2. Добавить атрибут width со значением 240
img.width = 240;
// 3. Добавить класс super
img.classList.add("super");
// 4. Добавить свойство alt со значением "Super Man"
img.alt = "Super man";
// Поместить изображение внутрь элемента с классом wrapper
div.append(img);
// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами

// Поместить этот DIV до элемента <ul></ul>

// Добавить для 2-го параграфа класс text

// Удалить 1-й параграф

// Создать функцию generateAutoCard,
// которая принимает 3 аргумента: brand, color, year

// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>

// Создать новый DIV с классом autos

// Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
  { brand: "Tesla", year: 2015, color: "Красный" },
  { brand: "Lexus", year: 2016, color: "Серебристый" },
  { brand: "Nissan", year: 2012, color: "Черный" },
];

// Поместить эти 3 карточки внутрь DIV с классом autos

// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper

// Добавить кнопку Удалить на каждую карточку авто

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
// 2. Создать функцию удаления
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
