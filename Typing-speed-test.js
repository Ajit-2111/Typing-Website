const originText = document.querySelector("#original-text").innerHTML;
const textArea = document.querySelector("#text-area");
const timer = document.querySelector("#timer");
const reset = document.querySelector("#reset");
let interval, timestamp;

let milisec,seconds,minutes = 0;

function start() {
  let textAreaLen = textArea.value.length;
  if (textAreaLen === 0 ) {
    timestamp = Date.now()
    interval = setInterval(timerStart, 10)
  }
}

function timerStart() {
  if (textArea.value.length === 0 ){
    clearInterval(interval);
  }
  let end = Date.now();
  let milliseconds = end - timestamp;
  milisec = checkTime(Math.trunc(milliseconds % 1000 / 10))
  seconds = checkTime(Math.trunc((milliseconds / 1000) % 60));
  minutes = checkTime(Math.trunc((milliseconds / (1000 * 60)) % 60));
  timer.innerHTML = `${minutes} : ${seconds} : ${milisec}`;
}

function checkTime(val) {
  if (val < 10) {
    val = "0" + val
  }
  return val
}

function spellCheck() {
  let textEntered = textArea.value;
  let originTextMatch = originText.substring(0,textEntered.length);

  if (textEntered == originText) {
      clearInterval(interval);
      textArea.style.borderColor = "#65CCf3";
  } else {
      if (textEntered == originTextMatch) {
        textArea.style.border = "10px solid #34c263";
      } else {
        textArea.style.border = "10px solid #e90f25";
      }
  }

}

function restart(){
  clearInterval(interval);
  interval = null;
  textArea.value = "";
  timer.innerHTML = "00:00:00";
  textArea.style.borderColor = "grey";
}


textArea.addEventListener("keypress", start);
textArea.addEventListener("keyup", spellCheck);
reset.addEventListener("click",restart)



