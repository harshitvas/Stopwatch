const hrTimer = document.getElementsByClassName("hr")[0];
console.log(hrTimer);
let hrtime = 0;
const minTimer = document.getElementsByClassName("min")[0];
console.log(minTimer);
let mintime = 0;
const secTimer = document.getElementsByClassName("sec")[0];
console.log(secTimer);
let sectime = 0;

const start = document.getElementById("start");
let timerStart = 1;
const reset = document.getElementById("reset");
const pause = document.getElementById("pause");
let timer;

start.addEventListener("click", () => {
    if(timerStart == 1){
        timer = setInterval(update, 1000);
        timerStart = 0;
    }
})

pause.addEventListener("click", () => {
    if(timerStart == 0){
        clearInterval(timer);
        timerStart = 1;
    }
})

reset.addEventListener("click", resetUpdate);

function resetUpdate(){
    sectime = 0;
    mintime = 0
    hrtime = 0;
    hrTimer.innerHTML = "0" + hrtime;
    minTimer.innerHTML = "0" + mintime;
    secTimer.innerHTML = "0" + sectime;
    clearInterval(timer);
    timerStart = 1;
}

function update(){
    sectime++;
    if(sectime > 60){
        sectime = 0;
        mintime += 1;
    }
    if(mintime > 60){
        mintime = 0;
        hrtime += 1;
    }
    console.log("sec: " + sectime);
    console.log("min: " + mintime);
    console.log("hr: " + hrtime);
    hrTimer.innerHTML = hrtime > 9 ? hrtime : "0" + hrtime;
    minTimer.innerHTML = mintime > 9 ? mintime: "0" + mintime;
    secTimer.innerHTML = sectime > 9 ? sectime: "0" + sectime;
}