function updateClock() {
    var currentTime = new Date();

    let hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    //Adding leading zeroes to single-digit minutes and seconds
    minutes = (minutes < 10 ? "0":"") + minutes;
    seconds = (seconds < 10 ? "0":"") + seconds;

    //convert hours from 24hours  to 12 hours format
    hours = (hours > 12)? hours - 12 : hours;
    hours = (hours===0)? 12: hours;

    //get the current time in hh:mm:ss am/pm format
    let timeString = hours + " " + ":"+ " " + minutes + " " + " " + ":" + seconds + " " + ((hours < 12) ? "pm": "am")

    //update the clock element with the new line
    document.getElementById("currentInput").firstChild.nodeValue = timeString;
}
// call the updateClock funtion every second to update the clock
setInterval(updateClock,1000);