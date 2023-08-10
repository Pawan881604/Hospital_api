const express = require('express');
const { patientDetails } = require('../controller/patientController');
const router = express.Router();


router.route('/patients/registers').post(patientDetails);


module.exports = router;