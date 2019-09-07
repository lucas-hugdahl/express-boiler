const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

//There is logic in Config to determin the enviroment settings
const CONFIG = require('./config/config');
mongoose.connect(CONFIG.DB_AUTH, { useNewUrlParser: true });

const indexRouter = require('./routes/index');
const app = express();

app.use(logger('dev'));			
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//MAKE SURE THIS IS RESTRICTED IN PRODUCTION
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", process.env.HEADER_ACCESS_CONTROL_ALLOW_ORIGIN);
    next();
});

app.use('/', indexRouter);
// app.use('/example', exampleRouter);


module.exports = app;
