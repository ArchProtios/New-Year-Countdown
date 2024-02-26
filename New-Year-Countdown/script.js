const seconds = document.querySelector("#seconds")
const minutes = document.querySelector("#minutes")
const hours = document.querySelector("#hours")
const days = document.querySelector("#days")

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

setTimeout(() => {
    
    const currentDate = new Date();
    const newYearDate = new Date(`${nextYear}`);
    const totalSeconds = (newYearDate - currentDate) / 1000;
    
    const daysLeft = Math.floor(totalSeconds / 3600 / 24);
    const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
    const minutesLeft = Math.floor(totalSeconds / 60) % 60;
    const secondsLeft = Math.floor(totalSeconds) % 60;
    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft;
    minutes.innerHTML = minutesLeft;
    seconds.innerHTML = secondsLeft;

}, 1000);
