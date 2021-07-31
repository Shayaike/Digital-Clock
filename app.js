window.onload = function Clock() {
    var date = new Date();
    var hours = date.getHours()
    var year = date.getFullYear()
    var mon = date.getMonth()
    var day = date.getDate()
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    var fullDate = day + " " + month[mon] + " " + year

    if (hours > 12) {
        hours = hours - 12
    }
    if (hours < 10) {
        hours = "0" + hours
    }
    var min = date.getMinutes()
    if (min < 10) {
        min = "0" + min
    }
    var sec = date.getSeconds()
    if (sec < 10) {
        sec = "0" + sec
    }
    var amPm = date.getHours()
    if (amPm > 12) {
        amPm = 'PM'
    }
    if (amPm < 12) {
        amPm = 'AM'
    }

    var time = hours + ":" + min + ":" + sec + " " + amPm


    document.getElementById('time1').innerText = time
    setTimeout(Clock, 1000);
    if (sec == 6 || sec == 7 || sec == 8 || sec == 9 || sec == 10) {
        document.getElementById('text1').innerText = "at this moment i'm a beginner"
    } else if (sec == 11 || sec == 12 || sec == 13 || sec == 14 || sec == 15) {
        document.getElementById('text1').innerText = "And this is one of my Practices Projects"
    } else if (sec == 24 || sec == 21 || sec == 22 || sec == 23 || sec == 25) {
        document.getElementById('text1').innerText = "at this moment i'm a beginner"
    } else if (sec == 30 || sec == 26 || sec == 27 || sec == 28 || sec == 29) {
        document.getElementById('text1').innerText = "And this is one of my Practices Projects"
    } else if (sec == 36 || sec == 37 || sec == 38 || sec == 39 || sec == 40) {
        document.getElementById('text1').innerText = "at this moment i'm a beginner"
    } else
    if (sec == 46 || sec == 47 || sec == 48 || sec == 49 || sec == 50) {
        document.getElementById('text1').innerText = "And this is one of my Practices Projects"
    } else if (sec == 51 || sec == 52 || sec == 53 || sec == 54 || sec == 55) {
        document.getElementById('text1').innerText = "at this moment i'm a beginner"
    } else if (sec == 56 || sec == 57 || sec == 58 || sec == 59 || sec == 00) {
        document.getElementById('text1').innerText = "And this is one of my Practices Projects"
    } else {
        document.getElementById('text1').innerText = "Trying to Learn JavaScript"
    }
    document.getElementById('fulldate').innerText = fullDate
}