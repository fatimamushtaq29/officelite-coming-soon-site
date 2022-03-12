countdown();

function countdown() {
    // add countdown date from localStorage if there is one
    if (localStorage.getItem('countdownDate')) {
        var countdownDate = localStorage.getItem('countdownDate');
    } else {
        // current date in milliseconds
        var currentDateInMilliseconds = new Date().getTime();

        // convert a day in millisecond
        var dayInMilliseconds = 1000 * 60 * 60 * 24;

        // add 30 days to current date
        var countdownDateInMilliseconds = currentDateInMilliseconds + (30 * dayInMilliseconds);
        var countdownDate = new Date(countdownDateInMilliseconds).toLocaleString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'});
    }
     
    // update countdown date on index page
    const launchDate = document.querySelector('.launch-date span');
    launchDate.innerHTML = countdownDate.toUpperCase();

    // gap between current date and (countdown date '00:00:00')
    const countdownDay = new Date(countdownDate).getTime();
    const gap = countdownDay - new Date().getTime();

    // time units in milliseconds
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // gap in time units
    const daysRemaining = Math.floor(gap / day);
    const hoursRemaining = Math.floor((gap % day) / hour);
    const minutesRemaining = Math.floor((gap % hour) / minute);
    const secondsRemaining = Math.floor((gap % minute) / second);

    // visually show countdown
    const daysRemainingText = document.querySelector('.days span');
    const hoursRemainingText = document.querySelector('.hours span');
    const minutesRemainingText = document.querySelector('.min span');
    const secondsRemainingText = document.querySelector('.sec span');

    daysRemaining < 10 ? daysRemainingText.innerText = `0${daysRemaining}` : daysRemainingText.innerText = daysRemaining;
    hoursRemaining < 10 ? hoursRemainingText.innerText = `0${hoursRemaining}` : hoursRemainingText.innerText = hoursRemaining;
    minutesRemaining < 10 ? minutesRemainingText.innerText = `0${minutesRemaining}` : minutesRemainingText.innerText = minutesRemaining;
    secondsRemaining < 10 ? secondsRemainingText.innerText = `0${secondsRemaining}` : secondsRemainingText.innerText = secondsRemaining;
};

setInterval(countdown, 1000);