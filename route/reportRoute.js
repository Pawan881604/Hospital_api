const express = require('express');
const { createReport, allReport, status } = require('../controller/reportController');
const isAuthenticated = require('../middleware/auth');
const router = express.Router();

router.route('/patients/:id/create-report').post(isAuthenticated,createReport)
router.route('/patients/:id/all-report').get(isAuthenticated,allReport)
router.route('/patients/:status').get(status)


module.exports = router;