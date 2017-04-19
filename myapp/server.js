'use strict'
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
const express = require('express');


var index = require('./routes/index');
var user = require('./routes/User');

let app = express();
app.set('view engine', 'ejs');



// app.get('/', (req,res)=>{
//   res.send('love U!')
// })
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',index);
app.use('/User',user);

// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
//
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

app.listen(3000, () =>{
  console.log('app are running on port : 30000');

})
