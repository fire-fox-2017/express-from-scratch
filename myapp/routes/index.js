var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next) {



 res.render('index', {title: 'Express From Scratch'})
});

module.exports = router;