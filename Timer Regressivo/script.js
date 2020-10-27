const newYear = '1 Jan 2021';

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds % 60);
     
    console.log(days, hours, mins, secs);
}
// INICIAL CALL

countdown();
setInterval(countdown, 1000);
