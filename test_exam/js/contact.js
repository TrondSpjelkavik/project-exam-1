const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const name = document.querySelector("#name");
  const nameValue = name.value;
  const email = document.querySelector("#email");
  const emailValue = email.value;

  const messageSent = document.querySelector(".message-sent");
  const nameError = document.querySelector(".name-error");
  const emailError = document.querySelector(".email-error");
  const input = document.querySelector("input");

  if (checkInputLength(nameValue) === true) {
    name.style.borderBottom = "2px solid green";
    nameError.style.display = "none";
    input.style.marginBottom = "20px";
  } else {
    name.style.borderBottom = "1px solid red";
    nameError.style.display = "block";
    input.style.marginBottom = "5px";
  }
  if (checkInputLength(emailValue) === true) {
    email.style.borderBottom = "2px solid green";
    emailError.style.display = "none";
    email.style.marginBottom = "20px";
  } else {
    email.style.borderBottom = "1px solid red";
    emailError.style.display = "block";
    email.style.marginBottom = "5px";
  }

  if (checkInputLength(nameValue) && checkInputLength(emailValue)) {
    messageSent.style.display = "block";
  }
}

function checkInputLength(value) {
  const valueTrim = value.trim();

  if (valueTrim.length > 2) {
    return true;
  } else {
    return false;
  }
}
function validateMail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
