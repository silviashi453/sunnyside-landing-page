const navLinks = document.getElementById("nav-links");
const humberger = document.getElementById("humberger");

humberger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
