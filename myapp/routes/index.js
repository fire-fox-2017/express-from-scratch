var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next) {
  db.User.findAll()
  .then(users => {
    res.render('index', {title: 'Express From Scratch', users: users});
  });

router.post('/addUser', function(req, res, next) {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  db.User.create({
    'firstname': firstname,
    'lastname': lastname
  })
  .then(user => {
    res.redirect('/');
  });
});


 
});

module.exports = router;