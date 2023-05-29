function showTime() {
    let display = document.querySelector('#clock');
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds()
    let dayNight = 'AM';
 

    if(hour >= 12) {
        dayNight = 'PM';
    } else {
        dayNight = 'AM';
    }
    
    check(hour);
    check(minute);
    check(second);

    display.innerHTML = `${hour} : ${minute} : ${second} ${dayNight}`

}

function check(time) {
    if(time < 10) {
        time = '0' + time
    }
}

showTime()

setInterval(showTime, 1000);

