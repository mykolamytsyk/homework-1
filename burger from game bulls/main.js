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

// начало
const customStyles = {
  cursor: "pointer",
  backgroundColor: "blue",
  color: "white",
  marginLeft: "50px",
};
const btnStart = document.createElement("button");
btnStart.textContent = "START GAME";
Object.assign(btnStart.style, customStyles);
document.body.append(btnStart);

const divHidden = document.createElement("div");
document.body.append(divHidden);
const customStylesDiv = {
  display: "none",
  height: "500px",
  width: "710px",
  backgroundColor: "green",
};
Object.assign(divHidden.style, customStylesDiv);

btnStart.addEventListener("click", function () {
  divHidden.style.display = "block";
});

const input0 = document.createElement("input");
const input1 = document.createElement("input");
const input2 = document.createElement("input");
const input3 = document.createElement("input");

divHidden.append(input0, input1, input2, input3);

const clearBtn = document.createElement("button");
divHidden.append(clearBtn);
clearBtn.textContent = "Clear input";
Object.assign(clearBtn.style, customStyles);

const inputs = [input0, input1, input2, input3];

clearBtn.addEventListener("click", function () {
  inputs.forEach((input) => (input.value = ""));
});

const generateBtn = document.createElement("button");

divHidden.append(generateBtn);
generateBtn.textContent = "GENERATE";

Object.assign(generateBtn.style, customStyles);
let arrRandom;

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

  arrRandom = [random1, random2, random3, random4];
  return arrRandom;
}

generateBtn.addEventListener("click", generateRandom);

const checkBtn = document.createElement("button");
divHidden.append(checkBtn);
checkBtn.textContent = "CHECK";

Object.assign(checkBtn.style, customStyles);

let inputArray = [];

checkBtn.addEventListener("click", function () {
  let value0 = Number(input0.value);

  inputArray[0] = value0;
});

checkBtn.addEventListener("click", function () {
  let value1 = Number(input1.value);

  inputArray[1] = value1;
});

checkBtn.addEventListener("click", function () {
  let value2 = Number(input2.value);

  inputArray[2] = value2;
});

checkBtn.addEventListener("click", function () {
  let value3 = Number(input3.value);

  inputArray[3] = value3;
});

let bulls = 0;
let cows = 0;
function checkNumbers() {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === arrRandom[i]) {
      bulls++;
    } else if (arrRandom.includes(inputArray[i])) {
      cows++;
    }
  }
  let resultParagraf = document.createElement("p");
  divHidden.append(resultParagraf);
  resultParagraf.style.backgroundColor = "yellow";
  resultParagraf.textContent = `Cows: ${cows} and Bulls: ${bulls}`;
  if (bulls === 4) {
    alert("YOU WIN");
  }
}
checkBtn.addEventListener("click", checkNumbers);
