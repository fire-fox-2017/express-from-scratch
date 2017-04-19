var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next){
  db.User.findAll()
  .then(users => {
    res.render('users/index', {users:users});
  })
})

router.get('/add', (req, res, next) => {
  res.render('users/add');
})

router.post('/add', (req,res,next) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var phone = req.body.phone;

  db.User.create({
    "firstname" : firstName,
    "lastname": lastName,
    "phone": phone,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(datas => {
    res.redirect('/users');
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/edit/:id', (req,res,next) => {
  var id = req.params.id;
  db.User.findById(id)
  .then(datas => {
    res.render('users/edit', {datas : datas})
  })
  .catch(err => {
    console.log(err);
  })
})

router.post('/edit', (req,res,next) => {
  var id = req.body.UserId;
  var firstname = req.body.firstName;
  var lastname = req.body.lastName;
  var phone = req.body.phone;

  db.User.update({
    "firstname" : firstname,
    "lastname" : lastname,
    "phone" : phone
  }, {
    where : {
      "id" : id
    }
  })
  .then(datas => {
    res.redirect('/users');
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/delete/:id', (req,res,next) => {
  var id = req.params.id;
  db.User.destroy({
    where : {
      "id" : id
    }
  })
  .then(datas => {
    res.redirect('/users');
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports = router
