var stopwatch = document.querySelector(".stopwatch");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");
var millisecond = document.querySelector(".millisecond");
var lap = document.querySelector(".lap");
var startbutton = document.querySelector(".start-button");
var lapbutton = document.querySelector(".lap-button");
var stopbutton = document.querySelector(".stop-button");
var resetbutton = document.querySelector(".reset-button");

var time, minuteno, secondno, millisecondno, minute, second, millisecond, seperator, period, lapTime;

function startStopWatch () {
    lapbutton.style.visibility = stopbutton.style.visibility = resetbutton.style.visibility = "visible";
    startbutton.style.visibility = "hidden";

    time = setInterval ( () => {
        millisecondno = Number(millisecond.innerText);
        secondno = Number(second.innerText);
        minuteno = Number(minute.innerText);

        if (millisecondno == 100) {
            if (secondno == 59) {
                minuteno += 1;
                if ( minuteno == 1 || minuteno == 2 || minuteno == 3 || minuteno == 4 || minuteno == 5 || minuteno == 6 || minuteno == 7 || minuteno == 8 || minuteno == 9 ) {
                    minuteno = `0${minuteno}`;
                }
                secondno = "00";
                millisecondno = "00";
                minute.innerText = minuteno;
                second.innerText = secondno;
                millisecond.innerText = millisecondno;

            }
            else {
                secondno += 1;
                if ( secondno == 1 || secondno == 2 || secondno == 3 || secondno == 4 || secondno == 5 || secondno == 6 || secondno == 7 || secondno == 8 || secondno == 9 ) {
                    secondno = `0${secondno}`;
                }
                millisecondno = "00"
                second.innerText = secondno;
                millisecond.innerText = millisecondno;
            }
        }
        else {
            millisecondno += 1;
            if ( millisecondno == 1 || millisecondno == 2 || millisecondno == 3 || millisecondno == 4 || millisecondno == 5 || millisecondno == 6 || millisecondno == 7 || millisecondno == 8 || millisecondno == 9 ) {
                millisecondno = `0${millisecondno}`;
            }
            millisecond.innerText = millisecondno;
        }
    }, 10);
}

function stopStopWatch () {
    clearInterval(time);
}

function resetStopWatch () { 
    stopStopWatch();
    minute.innerText = second.innerText = millisecond.innerText = "00";
    lap.innerHTML = "";
    lapbutton.style.visibility = stopbutton.style.visibility = resetbutton.style.visibility = "hidden";
    startbutton.style.visibility = "visible";
}

function lapStopWatch() {
    lapTime = document.createElement("li");
    lapTime.classList.add("laptime");
    lapTime.innerHTML = stopwatch.innerText;
    lap.appendChild(lapTime);
}

// console.log(stopwatch.innerText);