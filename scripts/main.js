//Page Framework
const title = "Assignment 2";
const date = "20240624";

const titleEl = document.getElementById("title");
titleEl.innerHTML = title;

const dateEl = document.getElementById("date");
dateEl.innerHTML = date;

const fireworksEl = document.getElementById("fireworks");
const infoEl = document.getElementById("info");

//clear any message boxes
function clearMsg(x){
  console.log(x);
  fireworksEl.style.display = 'none';
  infoEl.style.display = 'none';
}

//show the infoBox modal
const infoTextEl = document.getElementById("infoText");
function infoBox(msg){
  infoEl.style.display = 'block';
  infoTextEl.innerText = msg;
}

//get a random integer from 1 to 10
function getRandomInt(){
  return Math.floor((Math.random() * 10)+1);
}

//event driven function for item the while loop.
let jsGuess = getRandomInt();
function newGuess(guess){
  console.log(`Guess is ${guess} number is ${jsGuess}`);
  if (guess == jsGuess) {
    fireworksEl.style.display = 'block';
    jsGuess = getRandomInt();
  }
}

const pw1 = document.getElementById("pw1");
const pw2 = document.getElementById("pw2");
const showPw = document.getElementById("showPw");

function checkPw(){ //this is event driven, no actual need for any loop... The question would like a do while loop...
  do {
    console.log(`pw1 ${pw1.value} pw2 ${pw2.value}`);
    if (pw1.value.length < 4) return infoBox("First enter a password more than four characters");
    if (pw2.value == "") return;
    if (pw2.value.length < 4 || pw1.value != pw2.value) return infoBox("Enter the same password in the Verify box");
    fireworksEl.style.display = 'block';
  } while (false);
}

// Function to toggle password visibility
let pwVis = false;
function togglePwVis(){
  pwVis = !pwVis;
  if (pwVis) {
    pw1.type = "text";
    pw2.type = "text";
    showPw.value = "Hide Password";
  } else {
    pw1.type = "password";
    pw2.type = "password";
    showPw.value = "Show Password";
  }
}

//function to create multiplication table and add to the DOM
const mulTable = document.getElementById("mulTable");
function makeTable(value){
  mulTable.innerHTML = '';
  for (i = 0; i <= 10; i++){
    let newLi = document.createElement("div");
    newLi.innerHTML = `${value} x ${i} = ${value*i}`;
    newLi.style = "text-align: center; font-weight: bold;"
    mulTable.appendChild(newLi);
  }
}