// const titles = document.querySelectorAll(".accordion__title");
// const contents = document.querySelectorAll(".accordion__content");

// titles.forEach((item) =>
//   item.addEventListener("click", () => {
//     const activeContent = document.querySelector("#" + item.dataset.tab);

//     if (activeContent.classList.contains("active")) {
//       activeContent.classList.remove("active");
//       item.classList.remove("active");
//       activeContent.computedStyleMap.maxHeight = 0;
//     } else {
//       contents.forEach((element) => {
//         element.classList.remove("active");
//         element.style.maxHeight = 0;
//       });
//       titles.forEach((element) => element.classList.remove("active"));

//       item.classList.add("active");
//       activeContent.classList.add("active");
//       activeContent.style.maxHeight = activeContent.scrollHeight + "px";
//     }
//   })
// );

const titles = document.querySelectorAll(".accordion__title");
const contents = document.querySelectorAll(".accordion__content");

titles.forEach((title) => {
  title.addEventListener("click", (event) => {
    const currentContent = document.querySelector(
      "#" + event.currentTarget.dataset.tab
    );

    if (currentContent.classList.contains("active")) {
      currentContent.classList.remove("active");
    } else {
      contents.forEach((content) => {
        content.classList.remove("active");
      });

      titles.forEach((t) => t.classList.remove("active"));
      title.classList.add("active");

      currentContent.classList.add("active");
      currentContent.style.maxHeight = currentContent.scrollHeight + "px";

      currentContent.addEventListener(
        "transitionend",
        () => {
          if (currentContent.classList.contains("active")) {
            contents.forEach((content) => {
              if (content !== currentContent) {
                content.classList.remove("active");
                content.style.maxHeight = 0;
              }
            });
          }
        },
        { once: true }
      );
    }
  });
});
