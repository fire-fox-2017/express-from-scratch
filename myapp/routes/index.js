var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next) {
  db.User.findAll({
    order: '"id" ASC',
  })
  .then(users => {
    res.render('index', {title: 'Express From Scratch', users: users});
  });


router.get('/edit/:id', function(req, res, next) {
  let id = req.params.id
  db.User.find({
    where: {
      id: req.params.id
    }
  })
  .then(user => {
    res.render('./edit', {user: user, id: id})
  })
  .catch(err => {
    console.log(err.message);
  })
});

router.post('/edit/:id', function(req, res, next) {
  let id = req.params.id;
  db.User.update({
    firstname: req.body.title,
    lastname: req.body.lastname,
    phone: req.body.phone,
    updatedAt: new Date()
  },
  {
    where: {
      id: id
    }
  }
  )
  .then(() => {
    res.redirect('/');
  })
});

router.post('/addUser', function(req, res, next) {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let phone = req.body.phone;
  db.User.create({
    'firstname': firstname,
    'lastname': lastname,
    'phone': phone
  })
  .then(user => {
    res.redirect('/');
  });
});

 
});

module.exports = router;