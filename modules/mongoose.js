const mongoose = require('mongoose');
const timeStamp = require('./timestamp')

function connectionStringDb(){
    const conn = "mongodb+srv://joelem2:Dz1VnUzsqKp4mHsu@jmanningtest.2yhrdgp.mongodb.net/?retryWrites=true&w=majority"
    return conn;
}

function mongooseConnectDb(){
    const logFile = './logs/connections.txt';
    mongoose.connect(connectionStringDb(), { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => timeStamp(logFile))
    .catch((err) => console.log(err));
}

module.exports = mongooseConnectDb;