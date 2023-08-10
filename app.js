const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())


const registerRouter = require('./route/registerRouter');
const paientRouter = require('./route/patientRouter');
const reportRouter = require('./route/reportRoute');
app.use('/',registerRouter  )
app.use('/',paientRouter)
app.use('/',reportRouter)

module.exports = app;