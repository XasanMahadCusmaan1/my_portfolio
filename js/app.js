const input = document.querySelector("#menu__toggle");
const body = document.querySelector("body");

// HIDING THE SCROLL BODY WHEN THE NAV IS OPPEN
const hideScrollBody = function () {
  input.addEventListener("change", () => {
    if (input.checked) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "scroll";
    }
  });
};
hideScrollBody();

console.log("Screen Width: " + screen.width + "px");
console.log("Screen Height: " + screen.height + "px");

