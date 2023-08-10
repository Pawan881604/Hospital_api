const Doctor = require("../models/doctor");
const sendToken = require("../utils/handleJWTToken");


// this is welcome router function
exports.home = async (req, res) => {
    return res.send("<h1>welcome to hospital api || </h1>");
}

// this is register function
exports.singup = async (req, res) => {
    try {
        let doctor = await Doctor.find({ email: req.body.email });
        if (doctor.length < 1) {
            doctor = await Doctor.create(req.body);
            sendToken(res, 201, doctor, 'created')
        }
        else {
            sendToken(res, 201, null, 'user exist')
        }

    }
    catch (err) {
        // Handle other errors
        res.status(500).json({
            success: false,
            message: "Server error" + err
        });

    }

}

exports.login = async (req, res) => {
    try {
        const doctor = await Doctor.findOne({ email: req.body.email }).select("+password");
        if (!doctor) {
            return sendToken(res, 400, null, 'user not found')
        }
        if (req.body.password !== doctor.password) {
            return sendToken(res, 400, null, 'Something Wrong')
        }
        sendToken(res, 200, doctor, 'Welcome Doctor')

    }
    catch (err) {
        console.log(err)
    }
}