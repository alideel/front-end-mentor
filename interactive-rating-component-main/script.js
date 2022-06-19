"use stric";
let states = document.querySelectorAll(".state");
let submit = document.getElementById("submit");
let card = document.querySelector(".card");
let modal = document.querySelector(".modal");
let selected = document.querySelector(".selected");
let stateValue = null;
states.forEach((state) => {
  state.addEventListener("click", () => {
    states.forEach((state) => {
      state.classList.remove("active");
    });
    state.classList.add("active");
    stateValue = state.innerText;
  });
});
submit.addEventListener("click", () => {
  card.style.display = "none";
  modal.style.display = "block";
  selected.innerText = stateValue;
});
