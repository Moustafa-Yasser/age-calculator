let inputDay = document.getElementById("day");
let inputMonth = document.getElementById("month");
let inputYear = document.getElementById("year");

let resultDay = document.querySelector(".result .days span");
let resultMonth = document.querySelector(".result .months span");
let resultYear = document.querySelector(".result .years span");

let form = document.querySelector("form");

let date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validate() {
  let allInputs = document.querySelectorAll("input");
  let validator = true;
  allInputs.forEach((i) => {
    let formParent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "#cd0000ad";
      formParent.querySelector("small").innerText = "this field is required.";
      i.parentElement.querySelector(".lap").style.color = "#cd0000ad";
      validator = false;
    } else if (inputMonth.value > 12) {
      inputMonth.style.borderColor = "#cd0000ad";
      inputMonth.parentElement.querySelector("small").innerText =
        "must be valid month.";
      validator = false;
    } else if (inputDay.value > 31) {
      inputDay.style.borderColor = "#cd0000ad";
      inputDay.parentElement.querySelector("small").innerText =
        "must be valid day.";
      validator = false;
    } else if (inputYear.value > date.getFullYear()) {
      inputYear.style.borderColor = "#cd0000ad";
      inputYear.parentElement.querySelector("small").innerText =
        "must be valid day.";
      validator = false;
    } else {
      i.style.borderColor = "#ddd";
      formParent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}
function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (inputDay.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (inputMonth.value > month) {
      month = month + 12;
      year = year - 1;
    }

    let d = day - inputDay.value;
    let m = month - inputMonth.value;
    let y = year - inputYear.value;

    resultDay.textContent = d;
    resultMonth.textContent = m;
    resultYear.textContent = y;
  }
}

form.addEventListener("submit", handleSubmit);

// let d = day - inputDay.value;
// let m = month - inputMonth.value;
// let y = year - inputYear.value;
// console.log(d);
// console.log(m);
// console.log(y);
