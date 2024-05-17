// Random password generator
const passwordBox = document.getElementById('password');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialChar = '!@#$%^&*(){}|"';
const allChar = upperCase + lowerCase + number + specialChar;
let password;
function generatePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += specialChar[Math.floor(Math.random() * specialChar.length)];

  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }

  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  console.dir(passwordBox.value);
  let copytext = passwordBox.value;
  navigator.clipboard.writeText(copytext);
}
