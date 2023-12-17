// const tab = document.querySelectorAll(".tab");
// изначально было обращение querySelector без All к одному элементу
// querySelector - получение одного элемента
// querySelectorAll - получение всех по классу что указан(по квери селектору который есть в цсс)
// console.log(tab);
// tab.onclick = function (event) {
//   //   console.log("click");
//   const eventTab = event.target.closest(".tab");
//   //   console.dir(eventTab);
//   if (eventTab.classList.contains("active")) {
//     eventTab.classList.remove("active");
//   } else {
//     eventTab.classList.add("active");
//   }
// };

// const tabs = document.querySelectorAll(".tab");
// console.log(tabs);
// tabs[0].onclick = function (event) {
//     console.log(event.target);

// };

function handleClick(event) {
  const eventTab = event.target.closest(".tab");
  console.log(eventTab);
  if (eventTab.classList.contains("active")) {
    eventTab.classList.remove("active");
  } else {
    eventTab.classList.add("active");
  }
}

// for (let tab of tabs) {
//   tab.onclick = handleClick;
// }

// tabs[0].onclick = function (event) {
//   console.log(event.target);
// };

// tabs[1].onclick = function (event) {
//   console.log(event.target);
// };

// tabs[2].onclick = function (event) {
//   console.log(event.target);
// };

// add – добавление класса;
// remove – удаление класса;
// toggle – переключение класса;
// contains – проверка наличия класса у элемента.

const parent = document.querySelector("#parent");
console.log(parent);
parent.addEventListener("click", handleClick);
