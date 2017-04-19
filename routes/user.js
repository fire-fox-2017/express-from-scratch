const routes = require('express').Router()
const db = require('../models')

routes.get('/', function (req, res) {
  db.User.findAll()
  .then(users => {
    res.render ('./index',{tampilkan:users, title:"hai"})
  })
})
routes.get('/edit', function (req, res) {
    res.render ('./edit')
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

routes.get('/edit/:id', (req, res, next) => {
  let id = req.params.id
  db.User.findById(id)
    .then(user => {
      res.render('./edit', {user: user})
    })
})
routes.post('/edit/:id', (req, res, next) => {
  let id = req.params.id
  db.User.update({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
  },{
    where: {
      id: id
    }
  })
    .then( () => {
      res.redirect('/user')
    })
})

routes.get("/delete/:id", function (req, res) {
  db.User.destroy({
    where: {id: req.params.id}
  }).then( () => {
    res.redirect("/user")
  }).catch(err => {
    res.send(err.message)
  })
})

module.exports = routes
