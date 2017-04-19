'use strict'
const db = require('../models');
const routes = require('express').Router();


routes.get('/', function(req, res, next) {
  db.User.findAll()
  .then(users=>{
    res.render('index', {
        title: 'CUMI',
        users:users
    })
  })

});






module.exports = routes
