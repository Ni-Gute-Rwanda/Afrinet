const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const readMore = document.querySelector(".read-more");
const hidden = document.querySelector(".hidden");

console.log(readMore, hidden);

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
navLinks.addEventListener("click", () => navLinks.classList.toggle("open"));

readMore.addEventListener("click", () => {
  hidden.classList.remove("hidden");
  readMore.classList.toggle("hidden");
});
