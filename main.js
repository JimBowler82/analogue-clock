const secondHand = document.querySelector("#secondHand");
const minuteHand = document.querySelector("#minuteHand");
const hourHand = document.querySelector("#hourHand");
secondHand.style.transform = `rotate(0deg)`; 

let second = 0;
let minute = 0;
let hour = 0;

function getTime() {
  let now = new Date();
  second = now.getSeconds();
  minute = now.getMinutes();
  hour = now.getHours();
}

function seconds() {
  console.log(second);
  let degrees = second * 6;
  secondHand.style.transform = `rotate(${degrees}deg)`;
}

function minutes() {
  console.log(minute);
  let degrees = minute * 6;
  minuteHand.style.transform = `rotate(${degrees}deg)`;
}

function hours() {
  console.log(hour);
  let degrees = (hour * 30) + (minute * 0.5);
  hourHand.style.transform = `rotate(${degrees}deg)`;
}

//setInterval(seconds, 1000);

setInterval(function() {
  getTime();
  seconds();
  minutes();
  hours();
  console.log('-------');

}, 1000);