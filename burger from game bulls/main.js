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
const btnStart = document.createElement("button");

btnStart.textContent = "START GAME";

btnStart.style.backgroundColor = "red";
btnStart.style.cursor = "pointer";

document.body.append(btnStart);

const divHidden = document.createElement("div");
document.body.append(divHidden);

divHidden.classList.add("divHiddenClass");

divHidden.style.display = "none";
divHidden.style.height = "500px";
divHidden.style.width = "710px";
divHidden.style.backgroundColor = "green";

btnStart.addEventListener("click", function () {
  divHidden.style.display = "block";
});

const input0 = document.createElement("input");
const input1 = document.createElement("input");
const input2 = document.createElement("input");
const input3 = document.createElement("input");

divHidden.append(input0);
divHidden.append(input1);
divHidden.append(input2);
divHidden.append(input3);

const clearBtn = document.createElement("button");

divHidden.append(clearBtn);

clearBtn.textContent = "Clear input";

clearBtn.style.cursor = "pointer";
clearBtn.style.backgroundColor = "blue";
clearBtn.style.color = "white";

clearBtn.addEventListener("click", function () {
  input0.value = " ";
  input1.value = " ";
  input2.value = " ";
  input3.value = " ";
});

const generateBtn = document.createElement("button");

divHidden.append(generateBtn);

generateBtn.textContent = "GENERATE";

generateBtn.style.cursor = "pointer";
generateBtn.style.backgroundColor = "blue";
generateBtn.style.color = "white";
generateBtn.style.marginLeft = "50px";

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

  return [random1, random2, random3, random4];
}
let arrRandom = generateRandom();

generateBtn.addEventListener("click", generateRandom);

const checkBtn = document.createElement("button");

divHidden.append(checkBtn);
checkBtn.textContent = "CHECK";

const customStyles = {
  cursor: "pointer",
  backgroundColor: "blue",
  color: "white",
  marginLeft: "50px",
};

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
  let bulls = 0;
  let cows = 0;
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
