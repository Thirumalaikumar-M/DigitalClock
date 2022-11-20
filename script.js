
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var meridiem = document.getElementById('ampm');

    if( hrs >= 12){
        meridiem.innerHTML = 'PM';
    }
    else{
        meridiem.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    hrs = (hrs < 10) ? '0' + hrs : hrs;
    mins = (mins < 10) ? '0' + mins : mins;
    sec = (sec < 10) ? '0' + sec : sec;

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = sec;

}
setInterval(displayTime, 10);
