const texts = ["a QA Engineer", "a Manual Tester", "a Tech Explorer", "a Problem Solver"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typed-text").textContent = letter;
  if (letter.length === currentText.length) {
    setTimeout(erase, 1500);
  } else {
    setTimeout(type, 100);
  }
}

function erase() {
  letter = currentText.slice(0, --index);
  document.querySelector(".typed-text").textContent = letter;
  if (letter.length === 0) {
    count++;
    setTimeout(type, 500);
  } else {
    setTimeout(erase, 50);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});
