const express = require('express');
const db = require('../models');
var router = express.Router();


// router.get('/', function (req, res, next) {
//   res.send("I Love Hacktiv8!")
// })

router.get('/', function (req, res, next) {
  db.User.findAll()
    .then((users)=>{
      res.render('index', {tampilkan:users,title:'hallo'})
    })
})

router.post('/add', function (req, res, next) {
  res.render('add_user')
})

router.get('/edit/:id', function (req, res, next) {
  db.User.findAll()
    .then((users)=>{
      res.render('index', {tampilkan:users,title:'hallo'})
    })
})

router.get('/delete/:id', function (req, res, next) {
  db.User.findAll()
    .then((users)=>{
      res.render('index', {tampilkan:users,title:'hallo'})
    })
})


module.exports = router;