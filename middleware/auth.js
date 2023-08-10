const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctor');

const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(400).json({
                success: false,
                msg: "You are not authenticated"
            });
        }

        const decoded = jwt.verify(token, process.env.SECRET_CODE);
        const id = decoded.id
        // Assuming decoded has a property like 'doctorId' representing the doctor's ID
        const doctor = await Doctor.findById(id);

        if (!doctor) {
            return res.status(400).json({
                success: false,
                msg: "Doctor not found"
            });
        }

        req.doctor = doctor;
        next();
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Internal server error: " + err.message
        });
    }
};

module.exports = isAuthenticated;
