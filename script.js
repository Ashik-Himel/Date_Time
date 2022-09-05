const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const ampm = document.getElementById('am-pm');
const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');

function timeAndDate() {
    const d = new Date();
    if (d.getHours() == 0) {
        hour.innerHTML = 12;
    }
    else if (d.getHours() < 10) {
        hour.innerHTML = `0${d.getHours()}`;
    }
    else if (d.getHours() > 12) {
        if (d.getHours() < 22) {
            hour.innerHTML = `0${d.getHours() - 12}`;
        }
        else {
            hour.innerHTML = d.getHours() - 12;
        }
    }
    else {
        hour.innerHTML = d.getHours();
    }
    if (d.getMinutes() < 10) {
        minute.innerHTML = `0${d.getMinutes()}`;
    }
    else {
        minute.innerHTML = d.getMinutes();
    }
    if (d.getSeconds() < 10) {
        second.innerHTML = `0${d.getSeconds()}`;
    }
    else {
        second.innerHTML = d.getSeconds();
    }
    if (d.getHours() <= 11) {
        ampm.innerHTML = 'AM';
    }
    else {
        ampm.innerHTML = 'PM';
    }
    if (d.getDate() < 10) {
        date.innerHTML = `0${d.getDate()}`;
    }
    else {
        date.innerHTML = d.getDate();
    }
    if (d.getMonth() < 10) {
        month.innerHTML = `0${d.getMonth()}`;
    }
    else {
        month.innerHTML = d.getMonth();
    }
    year.innerHTML = d.getFullYear();
}

setInterval(timeAndDate, 1000)