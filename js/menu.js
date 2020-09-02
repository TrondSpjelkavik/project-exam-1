const aboutBtn = document.querySelector("#aboutBtn");
const contactBtn = document.querySelector("#contactBtn");
const launchBtn = document.querySelector("#launchesBtn");
const homeBtn = document.querySelector(".logo-img");

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

console.log("menu JS");

console.log(launchBtn);
