const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
myVariable = "Bob";
let myVariable = 10;
9 - 3;
8 * 2; // multiply in JS is an asterisk
9 / 3;
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Tyler");
    localStorage.setItem("Tyler", myName);
    myHeading.textContent = `Tyler, ${myName}`;
  }
  if (!localStorage.getItem("Tyler")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("Tyler");
    myHeading.textContent = `Tyler, ${storedName}`;
  }