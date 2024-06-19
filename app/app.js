// Imports
import "bootstrap-icons/font/bootstrap-icons.css";
import "./scss/style.scss";
import "./typeScale.css";

const mobileNavlinks = document.querySelector(".mobile-nav");
const navigationToggle = document.querySelector(".navbar__toggle-btn");
const toggleIcon = document.querySelector("#toggleIcon");

navigationToggle.addEventListener("click", () => {
  mobileNavlinks.classList.toggle("mobile-nav__show");

  if (mobileNavlinks.classList.contains("mobile-nav__show")) {
    toggleIcon.classList.add("bi-x");
    toggleIcon.classList.remove("bi-list");
  } else {
    toggleIcon.classList.remove("bi-x");
    toggleIcon.classList.add("bi-list");
  }
});
