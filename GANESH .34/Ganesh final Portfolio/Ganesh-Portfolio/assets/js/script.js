"use strict";

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

/**
 * Typing effect
 */

const positions = ["Full Stack Developer"];
let currentIndex = 0;

function typeEffect(element, text, i = 0, delay = 200) {
  if (i < text.length) {
    element.innerHTML = text.substring(0, i + 1);
    setTimeout(
      () => typeEffect(element, text, i + 1, delay),
      i === 0 ? delay * 2 : delay
    );
  } else {
    setTimeout(() => deleteEffect(element, text), 1000);
  }
}

function deleteEffect(element, text, i = null) {
  if (i === null) i = text.length;
  if (i > 0) {
    element.innerHTML = text.substring(0, i - 1);
    setTimeout(() => deleteEffect(element, text, i - 1), 100);
  } else {
    setTimeout(() => updatePosition(), 500);
  }
}

function updatePosition() {
  const positionElement = document.getElementById("position");
  positionElement.innerHTML = "";
  typeEffect(positionElement, positions[currentIndex++ % positions.length]);
}

// Adjust the interval to account for typing and deleting
// Removed setInterval as the timing is now handled within the typeEffect and deleteEffect functions
updatePosition();



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  });
}

/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }
});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}
