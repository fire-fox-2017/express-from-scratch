var express = require('express');
var router = express.Router();
var db = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  db.User.findAll()
    .then(result => {
      res.render('index', {
        title: 'Input Nama',
        list_users: result
      })
    })
    .then(err => {
      console.log(err);
    })
});

router.post('/add', function(req, res) {
  db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone
    })
    .then(function(user) {
      res.redirect("/")
    });
});

module.exports = router;
