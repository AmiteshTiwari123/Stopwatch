var hr =0;
var min =0;
var sec =0;
var t;
function startTimer(){
    if(sec<59){
        sec++;
        document.getElementById('sec').innerHTML = print(sec);
    }else{
        sec=0;
        min++;
        document.getElementById('sec').innerHTML = print(sec);
    }
    if(min<=59){
        document.getElementById('min').innerHTML = print(min);
    }else{
        min=0;
        hr++
        document.getElementById('min').innerHTML = print(min);
    }
    if(hr<24){
        document.getElementById('hr').innerHTML = print(hr);
    }else{
        stop();
    }
}

function print(val){
    if(val<=9){
        return '0' + val;
    }else{
        return val
    }
}

function start(){
    t = setInterval(startTimer,1000);
    document.getElementById('start').disabled = true;
}
function stop(){
    clearInterval(t);
    document.getElementById('start').disabled = false;

}
function reset(){

    clearInterval(t);
    min=0;
    sec=0;
    hr=0;
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('hr').innerHTML = '00';

} 
// const timer = document.getElementById("stopwatch")
// var hr = 0;
// var min = 0;
// var sec = 0;
// var stoptime = true;

// function startTimer() {
//     if (stoptime == true) {
//         stoptime = false;
//         timerCycle();
//     }
// }
// function startTimer() {
//     if (stoptime == false) {
//         stoptime = true;
//     }
// }

// function timerCycle() {
//     if (stoptime == false) {
//         sec = parseInt(sec);
//         min = parseInt(min);
//         hr = parseInt(hr);

//         sec = sec + 1;
//     }
//     if (sec == 60) {
//         min = min + 1;
//         sec = 0;
//     }
//     if (min == 60) {
//         hr = hr + 1;
//         min = 0;
//         sec = 0;
//     }

//     if (sec < 10) {
//         sec = "0" + sec;
//     }
//     if (min < 10) {
//         min = "0" + min;
//     }
//     if (hr < 10) {
//         hr = "0" + hr;
//     }

//     timer.innerHTML = hr + ":" + min + ":" + sec + ":"

//     setTimeout("timerCycle()", 1000);
// }

// function resetTimer() {
//     timer.innerHTML = '00:00:00'
//     stoptime = true;
//     hr = 0;
//     min = 0
//     sec = 0;
// }





