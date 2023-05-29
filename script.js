function showTime() {
    let display = document.querySelector('#clock');
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds()

    
    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);
    let formatHour = addFormat(hour)

    display.innerHTML = `${hour} : ${minute} : ${second} ${formatHour}`

}

function addFormat(time) {
    let format = 'AM';
    if(time >= 12) {
        format = 'PM';
    }
    return format;
}

function checkTime(time) {
    if(time > 12) {
        time = time - 12;
    }
}

function addZero(time) {
    if(time < 10) {
       time = '0' + time;
    }
    return time
}


showTime()

setInterval(showTime, 1000);

