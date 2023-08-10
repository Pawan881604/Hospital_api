const express = require ('express');
const { singup, home, login } = require('../controller/registration');
const router = express.Router();

router.route('/').get(home)
router.route('/doctor/register').post(singup)
router.route('/doctor/login').post(login)




module.exports = router;