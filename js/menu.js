const aboutBtn = document.querySelector("#aboutBtn");
const contactBtn = document.querySelector("#contactBtn");
const launchBtn = document.querySelector("#launchesBtn");
const homeBtn = document.querySelector(".logo-img");
const menuBtn = document.querySelector(".menu");
const menuAppear = document.querySelector(".menu-appear");
const navBar = document.querySelector(".nav-bar");
const x = document.querySelector(".x");

aboutBtn.addEventListener("click", () => {
  location.href = "about.html";
});
contactBtn.addEventListener("click", () => {
  location.href = "contact.html";
});
launchBtn.addEventListener("click", () => {
  location.href = "launches.html";
});

homeBtn.addEventListener("click", () => {
  location.href = "index.html";
});

menuBtn.addEventListener("click", () => {
  menuAppear.classList.toggle("appear");
  x.style.visibility = "visible";
  menuBtn.style.display = "none";
  navBar.style.display = "flex";
  nav.style.backgroundColor = "#0f1112";
});

x.addEventListener("click", () => {
  menuAppear.classList.toggle("appear");
  x.style.visibility = "hidden";
  menuBtn.style.display = "flex";
  navBar.style.display = "none";
  nav.style.backgroundColor = "rgb(22, 26, 29, 0.7)";
});
