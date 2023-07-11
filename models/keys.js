const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const keySchema = new Schema({
    hostname:{
        type: String,
        required: true
    },
    publicKey: {
        type: String,
        required: true
    },
    privateKey: {
        type: String,
        required: true
    }
},{timestamps: true}); 

const Key = mongoose.model('Key', keySchema);
module.exports = Key;