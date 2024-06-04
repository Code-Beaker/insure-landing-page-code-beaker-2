import "./scss/style.scss";
import "./typeScale.css";

const mobileNavlinks = document.querySelector(".mobile-nav");
const navigationToggle = document.querySelector(".navbar__toggle-btn");
const toggleIcon = document.querySelector(".toggle-icon");
let hidden = true;

navigationToggle.addEventListener("click", () => {
  if (hidden) {
    mobileNavlinks.classList.add("mobile-nav__show");
    toggleIcon.src = "assets/images/icon-close.svg";
    hidden = false;
  } else {
    mobileNavlinks.classList.remove("mobile-nav__show");
    toggleIcon.src = "assets/images/icon-hamburger.svg";
    hidden = true;
  }
});
