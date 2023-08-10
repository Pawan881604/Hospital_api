const mongoose = require('mongoose');
const doctor = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique:true
        
    },
    password: {
        type: String,
        require: true,
    }
}, { timestamps: true });
const Doctor = mongoose.model('Doctor', doctor); 
module.exports = Doctor;