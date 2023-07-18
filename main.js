const nameInput = document.getElementById("name");
const cardNumberInput = document.getElementById("card-number");
const expMonthInput = document.getElementById("exp-month");
const expYearInput = document.getElementById("exp-year");
const cvcInput = document.getElementById("cvc");
const confirmButton = document.getElementById("confirm");
const nameWarning = document.getElementById("name-warning");
const cardNumberWarning = document.getElementById("card-number-warning");
const expDateWarning = document.getElementById("exp-date-warning");
const cvcWarning = document.getElementById("cvc-warning");

confirmButton.addEventListener("click", (e) => {
  const name = nameInput.value.trim();
  const cardNumber = cardNumberInput.value.trim();
  const expMonth = expMonthInput.value.trim();
  const expYear = expYearInput.value.trim();
  const cvc = cvcInput.value.trim();
  const regex = /^[0-9\s]+$/;
  if (
    name === "" ||
    cardNumber === "" ||
    cardNumber.trim().length !== 19 ||
    !regex.test(cardNumber) ||
    expMonth === "" ||
    expYear === "" ||
    cvc === ""
  ) {
    e.preventDefault();
    if (name === "") {
      nameWarning.style.display = "block";
      nameInput.style.border = "1px solid rgb(255, 82, 82)";
    } else {
      nameWarning.style.display = "none";
      nameInput.style.border = "1px solid hsl(279, 6%, 55%)";
    }
    if (cardNumber === "") {
      cardNumberWarning.innerHTML = "Can't be blank";
      cardNumberWarning.style.display = "block";
      cardNumberInput.style.border = "1px solid rgb(255, 82, 82)";
    } else if (cardNumber.length !== 19) {
      cardNumberWarning.innerHTML =
        "wrong format: too short(don't forget spaces)";
      cardNumberWarning.style.display = "block";
      cardNumberInput.style.border = "1px solid rgb(255, 82, 82)";
    } else if (!regex.test(cardNumber)) {
      cardNumberWarning.innerHTML = "wrong format: numbers only";
      cardNumberWarning.style.display = "block";
      cardNumberInput.style.border = "1px solid rgb(255, 82, 82)";
    } else {
      cardNumberWarning.style.display = "none";
      cardNumberInput.style.border = "1px solid hsl(279, 6%, 55%)";
    }
    if (expMonth === "" || expYear === "") {
      expDateWarning.style.display = "block";
      if (expMonth === "") {
        expMonthInput.style.border = "1px solid rgb(255, 82, 82)";
      } else {
        expMonthInput.style.border = "1px solid hsl(279, 6%, 55%)";
      }
      if (expYear === "") {
        expYearInput.style.border = "1px solid rgb(255, 82, 82)";
      } else {
        expYearInput.style.border = "1px solid hsl(279, 6%, 55%)";
      }
    } else {
      expDateWarning.style.display = "none";
    }
    if (cvc === "") {
      cvcWarning.style.display = "block";
      cvcInput.style.border = "1px solid rgb(255, 82, 82)";
    } else {
      cvcWarning.style.display = "none";
      cvcInput.style.border = "1px solid hsl(279, 6%, 55%)";
    }
  } 
});
