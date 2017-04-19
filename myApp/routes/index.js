'use strict'
const express = require('express');
const User = require('../models').User;
let router = express.Router();

let title = 'Scratching Express';

router.get('/', function(req, res) {
  res.render('index', {title: title, users: null});
  // res.send("Sus dulu lakh..");
});

router.get('/showUsers', function(req, res) {
  User.findAll().then((users) => {
    res.render('index', {title:title, users:users});
  }).catch((err) => {
    res.send(err);
  });
});

router.post('/addUser', function(req, res) {
  if (req.body.firstname) {
    User.create({firstname: req.body.firstname, lastname: req.body.lastname, phone: req.body.phone})
      .then((user) => {
        res.redirect('/showUsers');
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    res.redirect('/showUsers');
  }
});

router.get('/updateUser', function(req, res) {
  let id = req.query.id;
  if (id) {
    User.findById(id).then((user) => {
      User.update({firstname:req.query.firstname||user.firstname, lastname:req.query.lastname||user.lastname, phone:req.query.phone||user.phone}, {where: {id:id}})
        .then((updated) => {
          res.redirect('/showUsers');
        }).catch((err) => {
          res.send(err);
        });
    }).catch((err) => {
      res.send(err);
    });
  } else {
    res.redirect('/showUsers');
  }
});

router.get('/deleteUser', function(req, res) {
  let id = req.query.id;
  if(id) {
    User.destroy({where: {id: id}})
      .then((destroyed) => {
        res.redirect('/showUsers');
      }).catch((err) => {
        res.send(err);
      });
  } else {
    res.redirect('/showUsers');
  }
});

module.exports = router;
