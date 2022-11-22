let ham = document.getElementById("hamburger");
let nav = document.getElementById("mob-nav");
let close = document.getElementById("close");

ham.addEventListener("click", () => {
  nav.classList.remove("hidden");
});
