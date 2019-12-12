const button = document.querySelector(".btn");

button.addEventListener("click", e => {
  e.target.classList.toggle("btn-initial");
  e.target.classList.toggle("btn-done");
});
