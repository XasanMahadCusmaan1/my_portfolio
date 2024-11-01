const input = document.querySelector("#menu__input");
const body = document.querySelector("body");

//HIDING THE SCROLL BODY WHEN THE NAV IS CHECKED
const hideScrollBody = function () {
  input.addEventListener("change", () => {
    if (input.checked) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  });
};
hideScrollBody();