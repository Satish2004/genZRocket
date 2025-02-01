// Light and dark mode
// const themeToggle = document.getElementById("themeToggle");
// const root = document.documentElement;

// themeToggle.addEventListener("click", () => {
//   if (root.style.getPropertyValue(" --bg-light: hsla(0, 0%, 100%, 1)")) {
//     // Switch to dark mode
//     root.style.setProperty("--bg-dark: hsla(0, 0%, 0%, 1)");
//     root.style.setProperty(" --text-light: hsla(0, 0%, 0%, 1)");
//     // themeToggle.textContent = ""; // Change to Sun icon
//   } else {
//     // Switch to light mode
//     root.style.setProperty(" --bg-light: hsla(0, 0%, 100%, 1)");
//     root.style.setProperty("--text-dark: hsla(0, 0%, 100%, 1)");
//     themeToggle.textContent = ""; // Change to Moon icon
//   }
// });
// const themeToggle = document.getElementById("themeToggle");
// const root = document.documentElement;

// themeToggle.addEventListener("click", () => {
//   if (body.classList.contains("dark-mode")) {
//     body.classList.remove("dark-mode");
//     body.classList.add("light-mode");
//       themeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`; // Moon icon
//   } else {
//     body.classList.remove("light-mode");
//     body.classList.add("dark-mode");
//      themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`; // Sun icon
//   }
// });

// const themeToggle = document.getElementById("themeToggle");
// const root = document.documentElement;

// // Check for saved theme in localStorage
// if (localStorage.getItem("theme") === "dark") {
//   enableDarkMode();
// } else {
//   enableLightMode();
// }

// // Theme Toggle Button Click Event
// themeToggle.addEventListener("click", () => {
//   if (localStorage.getItem("theme") === "dark") {
//     enableLightMode();
//   } else {
//     enableDarkMode();
//   }
// });

//-------------------------------------------------------------------------------------------->

// function enableDarkMode() {
//   root.style.setProperty("--bg-color", "var(--bg-black)");
//   root.style.setProperty("--text-color", "var(--text-white)");
//   root.style.setProperty("--gradient-bg", "var(--gradient-1)");

//   localStorage.setItem("theme", "dark");
// }

// function enableLightMode() {
//   root.style.setProperty("--bg-color", "var(--bg-light)");
//   root.style.setProperty("--text-color", "var(--text-black)");
//   root.style.setProperty("--gradient-bg", "var(--gradient-2)");

//   localStorage.setItem("theme", "light");
// }

/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * Mobile navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

addEventOnElements(navTogglers, "click", function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
});

addEventOnElements(navLinks, "click", function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-active");
});

/**
 * Header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});

/**
 * Element tilt effect
 */

const tiltElements = document.querySelectorAll("[data-tilt]");

const initTilt = function (event) {
  /** get tilt element center position */
  const centerX = this.offsetWidth / 2;
  const centerY = this.offsetHeight / 2;

  const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
  const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;

  this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${
    tiltPosY - tiltPosY * 2
  }deg)`;
};

addEventOnElements(tiltElements, "mousemove", initTilt);

addEventOnElements(tiltElements, "mouseout", function () {
  this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});

/**
 * Tab content
 */

const tabBtns = document.querySelectorAll("[data-tab-btn]");
const tabContents = document.querySelectorAll("[data-tab-content]");

let lastActiveTabBtn = tabBtns[0];
let lastActiveTabContent = tabContents[0];

const filterContent = function () {
  if (!(lastActiveTabBtn === this)) {
    lastActiveTabBtn.classList.remove("active");
    lastActiveTabContent.classList.remove("active");

    this.classList.add("active");
    lastActiveTabBtn = this;

    const currentTabContent = document.querySelector(
      `[data-tab-content="${this.dataset.tabBtn}"]`
    );

    currentTabContent.classList.add("active");
    lastActiveTabContent = currentTabContent;
  }
};

addEventOnElements(tabBtns, "click", filterContent);

// FAQ section drop down
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", function () {
    const faqItem = this.parentElement;

    // Close other open FAQs
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });

    // Toggle current FAQ
    faqItem.classList.toggle("active");
  });
});
// Footer dynamic year
document.getElementById("year").textContent = new Date().getFullYear();
