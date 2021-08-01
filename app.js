window.onload = setInterval(function() {
        var date = new Date()
        var hours = date.getHours()
        var year = date.getFullYear()
        var mon = date.getMonth()
        var day = date.getDate()
        var today = date.getDay()
        var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        var fullDate = day + " " + month[mon] + " " + year + " " + weekday[today]

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
        var lines = ["Trying to Learn JavaScript", "at this moment i'm a beginner", "And this is one of my Practices Projects", ]
        var text = document.getElementById('text1')

        document.getElementById('time1').innerText = time
        var index = 0
        if (sec % 5 == 0) {
            text.innerText = lines[index]
            index++
            if (index == lines.length) {
                index = 0
            }
        }
        document.getElementById('fulldate').innerText = fullDate
    },
    1000);