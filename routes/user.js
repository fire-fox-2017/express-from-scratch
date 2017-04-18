const express = require('express');
const db = require('../models');
var router = express.Router();

router.post('/', function (req, res, next) {
  db.User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
  })
    .then(()=>{
      res.redirect('/')
    })
})

module.exports = router;