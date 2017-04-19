// const app = require("./routes/index.js");
const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();
let port = 8000;
app.listen(port);
console.log(`listening to port ${port}`)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);

module.exports = app;
