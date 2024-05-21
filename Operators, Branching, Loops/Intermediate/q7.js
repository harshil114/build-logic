const inputDay = document.querySelector(".input");
const button = document.querySelector(".button");
const output = document.querySelector(".output");
const weekEnd = ["saturday", "sunday"];
const weekDays = ["monday", "tuesday", "wednesday", "thrusday", "friday"];

function checkDay() {
  const day = inputDay.value.toLowerCase();
  let isWeekend = false;
  let isWeekDay = false;

  for (let i = 0; i < weekDays.length; i++) {
    if (day === weekEnd[i]) {
      isWeekend = true;
      break;
    } else if (day === weekDays[i]) {
      isWeekDay = true;
      break;
    }else if(day === weekEnd[i] && day === weekDays[i]){

    }
  }

  if (isWeekend) {
    output.innerText = `'${day}' is weekend day`;
  } else if (isWeekDay) {
    output.innerText = `'${day}' is weekday`;
  } else {
    output.innerText = `Enter valid day because '${day}' is not an any kind of day!!`;
  }
}

button.addEventListener("click", checkDay);
