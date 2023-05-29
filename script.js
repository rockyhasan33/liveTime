function showTime() {
    let display = document.querySelector('#clock');
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds()
    let dayNight = 'AM';

    
    hour = hour < 10 ? '0' + hour : hour;

    minute = minute < 10 ? '0' + minute : minute;

    second = second < 10 ? '0' + second : second;

    display.innerHTML = `${hour} : ${minute} : ${second} ${dayNight}`

}

setInterval(showTime, 1000);