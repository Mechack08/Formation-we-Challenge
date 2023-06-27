const body = document.querySelector("body");
const btn = document.querySelector(".lbl-btn");

let btnChecked = false;
btn.addEventListener("click", function () {
  btnChecked = !btnChecked;

  if (btnChecked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});
