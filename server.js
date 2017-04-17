'use strict'

var express = require('express')
var path = require('path');

var bodyParser = require('body-parser');



var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



/*
let app = express()

app.get('/', function (request, response) {
	response.send("I Love You!")
})
*/

app.use('/', index);
app.use('/users', users);



app.listen(3000)
