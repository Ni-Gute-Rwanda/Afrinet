const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const line = document.getElementsByClassName("line");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
