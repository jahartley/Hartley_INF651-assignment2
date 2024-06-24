
const title = "Assignment 2";
const date = "20240624";

const titleEl = document.getElementById("title");
titleEl.innerHTML = title;

const dateEl = document.getElementById("date");
dateEl.innerHTML = date;

const fireworksEl = document.getElementById("fireworks");
const infoEl = document.getElementById("info");
function clearMsg(x){
  console.log(x);
  fireworksEl.style.display = 'none';
  infoEl.style.display = 'none';
}

const infoTextEl = document.getElementById("infoText");
function infoBox(msg){
  infoEl.style.display = 'block';
  infoTextEl.innerText = msg;
}

function getRandomInt(){
  return Math.floor((Math.random() * 10)+1);
}
let jsGuess = getRandomInt();
function newGuess(guess){
  console.log(`Guess is ${guess} number is ${jsGuess}`);
  if (guess == jsGuess) {
    fireworksEl.style.display = 'block';
    jsGuess = getRandomInt();
  }
}

let pw1value = "";
let pw2value = "";

function checkPw(){
  pw1value = pw1.value;
  pw2value = pw2.value;
  console.log(`pw1 ${pw1value} pw2 ${pw2value}`);
  if (pw1value.length < 4) return infoBox("First enter a password more than four characters");
  if (pw2.value == "") return;
  if (pw2value.length < 4 || pw1value != pw2value) return infoBox("Enter the same password in the Verify box");
  fireworksEl.style.display = 'block';
}

const pw1 = document.getElementById("pw1");
const pw2 = document.getElementById("pw2");
const showPw = document.getElementById("showPw");
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