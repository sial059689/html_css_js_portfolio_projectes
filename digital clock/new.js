function digClock() {



    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = "AM";

    if (hr == 0) {
        hr = 12;
    };
    if (hr > 12) {
        hr = hr - 12;
        session = "PM";
    }

    hr = (hr < 10) ? '0' + hr : hr;
    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;

    document.getElementById("newDigital").innerHTML = hr + ":" + min + ":" + sec + " " + session;

    setTimeout(digClock, 1000);
};
digClock();