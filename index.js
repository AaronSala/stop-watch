const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

const hours = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const milisecond = document.querySelector(".milisecond");


let startTime = Date.now(); // Record the start time
let timerInterval; // Variable to hold the interval ID
let hour = 0;
let min = 0;
let sec = 0;
let milli = 0;

function startStopwatch() {
  startTime = Date.now(); // Record the start time
  timerInterval = setInterval(updateStopwatch, 1); // Start the interval with a delay of 1 millisecond
}
function stopStopwatch() {
  clearInterval(timerInterval); // Stop the interval
}

function updateStopwatch() {
  let elapsedTime = Date.now() - startTime; // Calculate elapsed time in milliseconds
  milli = elapsedTime % 1000; // Milliseconds
  sec = Math.floor(elapsedTime / 1000) % 60; // Seconds
  min = Math.floor(elapsedTime / (1000 * 60)) % 60; // Minutes
  hour = Math.floor(elapsedTime / (1000 * 60 * 60)); // Hours

  displayTime();
}

function displayTime() {
  const timer = document.querySelector(".display--time");
  timer.innerHTML = `${hour}:${min}:${sec}:${milli}`;
}
start.addEventListener("click", startStopwatch);
stop.addEventListener("click", stopStopwatch);
reset.addEventListener("click", () => {
  // stopStopwatch();
  clearInterval(timerInterval);
  startTime=0
   hour = 0;
   min = 0;
   sec = 0;
  milli = 0;
  displayTime();
});
