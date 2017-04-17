const routes = require('express').Router()
const db = require('../models')

routes.get('/', function (req, res) {
  db.User.findAll()
  .then(users => {
    res.render ('./index',{tampilkan:users, title:"hai"})
  })
})

routes.get('/add',function(req,res,next) {
  db.User.findAll()
  .then(users => {
    res.render ('./add_user',{users:users,validate:""})
  })
})

routes.post('/add',function(req,res,next) {
  db.User.create(
    {firstname: req.body.firstname, lastname:req.body.lastname, phone: req.body.phone}
  ).then(data => {
    res.redirect('/user')
  })
})

module.exports = routes
