const fs = require('fs');

const dateobject = new Date();

function currentTime() {
    const date = (`0 ${dateobject.getDate()}`).slice(-2);
    const month = (`0 ${dateobject.getMonth() + 1}`).slice(-2);
    const year = dateobject.getFullYear();
    const hours = dateobject.getHours();
    const minutes = dateobject.getMinutes();
    return `${year}${month}${date}${hours}:${minutes}`;
}

function timeStamp(logFile) {
    fs.appendFile(logFile, "New Connection " + currentTime() + '\n' , err => {
        if(err){ console.log(err); }
    });
}

module.exports = timeStamp;