const openNav = document.querySelector(".open-nav");
const mobileNav = document.querySelector(".mobile-actual-nav");

openNav.addEventListener("click", () => {
  mobileNav.classList.remove("hide");
});
mobileNav.addEventListener("click", () => {
  mobileNav.classList.add("hide");
});
