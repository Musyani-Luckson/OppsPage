function printEveryMillisecond() {
  const timeEle = document.getElementById("time");
  let count = 0;

  const updateDisplay = () => {
    const currentTime = new Date();
    const [hour, min, sec, milSec] = [
      currentTime.getHours(),
      currentTime.getMinutes(),
      currentTime.getSeconds(),
      currentTime.getMilliseconds(),
    ].map(addLeadingZero);

    timeEle.innerText = `${hour}:${min}.${sec}.${milSec}`;
    count++;
  };
  setInterval(updateDisplay, 1);
}

function addLeadingZero(number) {
  return number.toString().padStart(2, "0");
}
printEveryMillisecond();
