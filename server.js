'use strict'

const express = require('express')

var app = express();

var index = require('./routes/index');

/*
let app = express()

app.get('/', function (request, response) {
	response.send("I Love You!")
})
*/

app.use('/', index);



app.listen(3000)
