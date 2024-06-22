let startTime, updatedTime, difference;
let timerInterval;
let running = false;

const timeDisplay = document.getElementById("time");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

function startStopwatch() {
  if (!running) {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTime, 1000);
    startStopButton.textContent = "Stop";
    running = true;
  } else {
    clearInterval(timerInterval);
    startStopButton.textContent = "Start";
    running = false;
  }
}

function resetStopwatch() {
  clearInterval(timerInterval);
  running = false;
  startStopButton.textContent = "Start";
  timeDisplay.textContent = "00:00:00";
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  timeDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}

startStopButton.addEventListener("click", startStopwatch);
resetButton.addEventListener("click", resetStopwatch);
