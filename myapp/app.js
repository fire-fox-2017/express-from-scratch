'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var index = require('./routes');
var edit = require('./routes/edit');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/edit', edit);

app.listen(4000);

module.exports = app;