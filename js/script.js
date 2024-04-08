// Copyright Date
const rightNow = new Date();
document.querySelector("#year").textContent = rightNow.getFullYear();

const hamburgerBtn = document.querySelector("#hamburgerBtn");
const primaryNav = document.querySelector("#primaryNav");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  primaryNav.classList.toggle("open");
});
