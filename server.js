'use strict'
const express = require('express')
var path = require('path');
var bodyParser = require('body-parser');

let index = require('./routes/index');

let app = express()


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);


app.listen(3000)
