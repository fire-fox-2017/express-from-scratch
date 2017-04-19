'use strict'

const express = require('express')
var path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index')
const user = require('./routes/user')

let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index)
app.use('/user', user)

app.listen(3000)
