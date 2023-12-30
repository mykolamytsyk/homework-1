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

// для отрытия по кнопке старт

document.addEventListener("DOMContentLoaded", function () {
  const showContentButton = document.getElementById("showContentButton");
  const contentBlock = document.getElementById("contentBlock");

  showContentButton.addEventListener("click", function () {
    contentBlock.style.display = "block";
  });
});

function checkAndReturn() {
  let userInput = document.getElementById("userInput").value;

  if (userInput.length === 4 && !hasRepeatedDigits(userInput)) {
  } else {
    alert("Будь ласка, введіть коректне чотиризначне число без повторень.");
  }
}

// проверка четырехзначного и повторов от пользователя

function hasRepeatedDigits(number) {
  let digitCount = {};
  for (let i = 0; i < number.length; i++) {
    let digit = number[i];
    if (digitCount[digit]) {
      return true;
    } else {
      digitCount[digit] = true;
    }
  }
  return false;
}

// очистка инпута

function clearInput() {
  document.getElementById("userInput").value = "";
}

// function generateNumber() {
//   // Згенерувати випадкове чотиризначне число
//   var randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

//   console.log(randomNumber);
// }

function generateUniqueNumber() {
  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Перемішуємо масив цифр
  for (let i = digits.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  // Вибираємо перші чотири цифри
  let generatedNumber = digits.slice(0, 4).join("");

  return generatedNumber;
}

// Приклад використання:
let randomNumber = generateUniqueNumber();
// console.log(randomNumber);

function generateAndCompare() {
  var userInput = document.getElementById("userInput").value;

  // Перевірка чотиризначності та відсутності повторюючихся цифр у введеному числі
  if (userInput.length === 4 && !hasRepeatedDigits(userInput)) {
    var generatedNumber = generateUniqueNumber();
    return generatedNumber;
    // Порівнюємо числа
    if (userInput === generatedNumber) {
      document.getElementById("result").textContent =
        "Вітаємо! Ви вгадали число!";
    } else {
      document.getElementById("result").textContent =
        "Спробуйте ще раз. Згенероване число: " + generatedNumber;
    }
  } else {
    document.getElementById("result").textContent =
      "Будь ласка, введіть коректне чотиризначне число без повторень.";
  }
}
