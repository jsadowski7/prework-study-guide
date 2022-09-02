const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
/* this is a test comment. hello! */
// Can be done like this if comment has no line breaks
// strict equality tests if two values are equal: ===
// Conditionals are code structures used to test if an expression returns true or false
// example function below
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }
  multiply(4, 7);
  multiply(20, 20);
  multiply(0.5, 3);
//   document.querySelector('html').addEventListener('click', function () {
//     alert('Ouch! Stop poking me!');
//   });
  const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  const myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
//event listener for button to set username
myButton.onclick = () => {
  setUserName();
}
