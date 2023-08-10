const jwt = require('jsonwebtoken');
const sendToken = (res, statusCode, result, msg) => {

    if (result !== null) {
        const options = {
            expire: new Date(
                // Date.now()+1* 24 * 60 * 60 * 1000
                Date.now() + process.env.COOKIE_EXPIRE * 60 * 1000
            ),
            httpOnly: true
        }
        const token = jwt.sign(
            { id: result._id },
            process.env.SECRET_CODE,
            {
                expiresIn: process.env.JWT_EXPIRE_TIME
            }
        )
     return res.status(statusCode).cookie('token', token, options).json({
            success: true,
            result,
            token,
            msg
        })
    }
   return res.status(statusCode).json({
        success: false,
        msg
    })
}

module.exports = sendToken;