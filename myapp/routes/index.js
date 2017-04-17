var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next) {
  db.User.findAll()
  .then(users => {
    res.render('index', {title: 'Express From Scratch', users: users});
  });


 
});

module.exports = router;