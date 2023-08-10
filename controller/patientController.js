const Patient = require("../models/patient");
const sendToken = require("../utils/handleJWTToken");

exports.patientDetails = async (req, res) => {
    try {
        let patient = await Patient.find({ phone: req.body.phone })
        if (patient.length < 1) {
            patient = await Patient.create(req.body)
            return sendToken(res, 200, patient, 'Patient Details Created')
        }
        sendToken(res, 200, patient, 'Patient exist')
    }
    catch (err) {
        console.log(err)
    }
}
