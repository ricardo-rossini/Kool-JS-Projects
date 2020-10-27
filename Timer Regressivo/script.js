const newYear = '1 Jan 2021';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    //Math!!!
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds % 60);
    //console.log(days, hours, mins, secs);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(secs)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// INICIAL CALL
countdown();
setInterval(countdown, 1000);
