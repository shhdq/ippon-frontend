let ham = document.getElementById("hamburger");
let nav = document.getElementById("mob-nav");
let close = document.getElementById("close");

ham.addEventListener("click", () => {
  ham.style.display = "none";
  nav.classList.remove("hidden");
});

close.addEventListener("click", () => {
  nav.classList.add('hidden');
  ham.style.display = "flex";	
})
