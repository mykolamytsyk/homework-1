// 1.Создаем аккордеон с правилами
const titles = document.querySelectorAll(".accordion__title");
const contents = document.querySelectorAll(".accordion__content");

titles.forEach((item) =>
  item.addEventListener("click", () => {
    const activeContent = document.querySelector("#" + item.dataset.tab);

    if (activeContent.classList.contains("active")) {
      activeContent.classList.remove("active");
      item.classList.remove("active");
      activeContent.style.maxHeight = 0;
    } else {
      contents.forEach((element) => {
        element.classList.remove("active");
        element.style.maxHeight = 0;
      });
      titles.forEach((element) => element.classList.remove("active"));

      item.classList.add("active");
      activeContent.classList.add("active");
      activeContent.style.maxHeight = activeContent.scrollHeight + "px";
    }
  })
);

// проверка на отработку скрипта и async, defer
// const images = document.querySelectorAll("img");
console.warn("ЧТО ИСПОЛЬЗОВАТЬ АСИНК ИЛИ ДЕФЕР, ДИНАМИЧСЕСКИЙ JS?");

// 2. Создать кнопку старт в js
const btnStart = document.createElement("button");
// 2.1 Дать кнопке текст
btnStart.textContent = "START GAME";
// 2.1 Дать кнопке стиль
btnStart.style.backgroundColor = "red";
btnStart.style.cursor = "pointer";
console.warn("КАК оБЬЕДИНИТЬ СТИЛИ");
//  3 Закинуть кнопку в боди
//  3.1 Определить боди в переменной, можно использовать простой доступ без querySelector
// const body = document.body; либо просто document.body....
document.body.append(btnStart);
//  4. Создать и добавить в ДОМ div для элементов которые будут появляться при нажатии кнопки START GAME
const divHidden = document.createElement("div");
document.body.append(divHidden);
// 4.1 Дать класс диву
divHidden.classList.add("divHiddenClass");
// 4.2 Дать диву свойство display.none, ширина высота и бэкграунд колор
divHidden.style.display = "none";
divHidden.style.height = "500px";
divHidden.style.width = "710px";
divHidden.style.backgroundColor = "green";
// 5. Повесить на кнопку START GAME  функцию показывать див по клику
btnStart.addEventListener("click", function () {
  divHidden.style.display = "block";
});
// ЭТО было ранее (почему в аргументах дом контент лоадед)
console.warn("почему в аргументах дом контент лоадед");
// document.addEventListener("DOMContentLoaded", function () {
//   const showContentButton = document.getElementById("showContentButton");
//   const contentBlock = document.getElementById("contentBlock");

//   showContentButton.addEventListener("click", function () {
//     contentBlock.style.display = "block";
//   });
// });

//  6. Создать и добавить в divHidden: 4 инпута
const input0 = document.createElement("input");
const input1 = document.createElement("input");
const input2 = document.createElement("input");
const input3 = document.createElement("input");
// 6.1 Вставляем в див
divHidden.append(input0);
divHidden.append(input1);
divHidden.append(input2);
divHidden.append(input3);

// Проверка значений из инпута
// setTimeout(function () {
//   const inputArray = [
//     Number(input0.value),
//     Number(input1.value),
//     Number(input2.value),
//     Number(input3.value),
//   ];
//   console.log(inputArray);
//   console.log(typeof inputArray[0]);
// }, 8000);
// console.warn("КАК СДЕЛАТЬ РЕТУРН массива");

// let inputArray;
// function updateArray(index, value) {
//   inputArray[index] = value;
// }
// input0.addEventListener("input", function () {
//   updateArray(0, this.value);
// });

// let inputArray = [
//   Number(input0.value),
//   Number(input1.value),
//   Number(input2.value),
//   Number(input3.value),
// ];
// setTimeout(function () {
//   let inputArray = [
//     Number(input0.value),
//     Number(input0.value),
//     Number(input0.value),
//     Number(input0.value),
//   ];
// }, 8000);

// 6.2 Создать кнопку для очистки инпутов
const clearBtn = document.createElement("button");
// 6.3 Вложить кнопку в див
divHidden.append(clearBtn);
// 6.4 Создать текст кнопки
clearBtn.textContent = "Clear input";
// 6.5 Дать свойства кнопке
clearBtn.style.cursor = "pointer";
clearBtn.style.backgroundColor = "blue";
clearBtn.style.color = "white";
//  6.6 Повесить на кнопку функцию очистки инпута
clearBtn.addEventListener("click", function () {
  input0.value = " ";
  input1.value = " ";
  input2.value = " ";
  input3.value = " ";
});
// 7. Создать кнопку генератор чисел
const generateBtn = document.createElement("button");
// 7.1 Вложить кнопку в див
divHidden.append(generateBtn);
// 7.2 Создать текст кнопки
generateBtn.textContent = "GENERATE";
// 7.3 Дать свойства кнопке
generateBtn.style.cursor = "pointer";
generateBtn.style.backgroundColor = "blue";
generateBtn.style.color = "white";
generateBtn.style.marginLeft = "50px";
// 7.4 Повесить функцию генерации числа
// 7.5 Создать функцию генерирующую число
function generateRandom() {
  let random1, random2, random3, random4;

  do {
    random1 = Math.round(Math.random() * (10 - 1));
    random2 = Math.round(Math.random() * (10 - 1));
    random3 = Math.round(Math.random() * (10 - 1));
    random4 = Math.round(Math.random() * (10 - 1));
  } while (
    random1 === random2 ||
    random1 === random3 ||
    random1 === random4 ||
    random2 === random3 ||
    random2 === random4 ||
    random3 === random4
  );
  console.log(random1, random2, random3, random4);

  return [random1, random2, random3, random4];
}
let arrRandom = generateRandom();

generateBtn.addEventListener("click", generateRandom);

// 8. Создаем кнопку CHECK
const checkBtn = document.createElement("button");
// 8.1 Помещаем в див
divHidden.append(checkBtn);
// 8.2 Создать текст кнопки
checkBtn.textContent = "CHECK";
// 8.3 Дать свойства кнопке
checkBtn.style.cursor = "pointer";
checkBtn.style.backgroundColor = "blue";
checkBtn.style.color = "white";
checkBtn.style.marginLeft = "50px";

// 9. Получаем введенные значения из инпута, вешаем обработку событий на кнопку checkBtn
let inputArray = [];

checkBtn.addEventListener("click", function () {
  let value0 = Number(input0.value);
  // console.log(value0);
  inputArray[0] = value0;
});

checkBtn.addEventListener("click", function () {
  let value1 = Number(input1.value);
  // console.log(value1);
  inputArray[1] = value1;
});

checkBtn.addEventListener("click", function () {
  let value2 = Number(input2.value);
  // console.log(value2);
  inputArray[2] = value2;
});

checkBtn.addEventListener("click", function () {
  let value3 = Number(input3.value);
  // console.log(value3);
  inputArray[3] = value3;
});

// function myClick() {
//   input0.value;
// }
// myClick();

// console.log(value0, value1, value2, value3);
// 10. Создать функцию для проверки номеров по каждой позиции и вцелом в масиве
let bulls = 0;
let cows = 0;
function checkNumbers() {
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === arrRandom[i]) {
      bulls++;
    } else if (arrRandom.includes(inputArray[i])) {
      cows++;
    }
  }
  // 10. 1 Выводим в параграф результат
  let resultParagraf = document.createElement("p");
  divHidden.append(resultParagraf);
  resultParagraf.style.backgroundColor = "yellow";
  resultParagraf.textContent = `Cows: ${cows} and Bulls: ${bulls}`;
}
// checkNumbers();

// 10.1 Также вешаем функцию проверки номеров по клику на кнопку checkBtn
checkBtn.addEventListener("click", checkNumbers);
