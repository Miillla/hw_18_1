function getDigit(min, sec) {
  let stopInterval = setInterval(() => {
    if (sec === 0) {
      min--;
      sec = 59;
    } else {
      sec--;
    }
    console.log("startInterval", min, sec);
    const timer = document.getElementById("timer");
    let formatMin = min < 10 ? `0${min}` : min;
    let formatSec = sec < 10 ? `0${sec}` : sec;

    timer.innerHTML = `${formatMin} : ${formatSec}`;
    if (min === 0 && sec === 0) {
      timer.innerHTML = "timerdone";
      alert("Timer Done");
      clearInterval(stopInterval);
      return;
    }
  }, 1000);
}
getDigit(1, 25);
