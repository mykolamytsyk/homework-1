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

// очистка инпута

function clearInput() {
  document.getElementById("userInput").value = "";
}
