var express = require('express');
var router = express.Router();

var db = require('../models');

router.get('/', function(request, response){
  db.User.findAll()
        .then((users)=>{
          response.render('index', {users:users})
        })
        .catch(function (err){
          response.send(err.message);
        })
})

router.get('/add', function(request, response){
  response.render('form_add_user')
})

router.post('/add', function(request, response){
  let obj = {
    firstName : request.body.first_name,
    lastName : request.body.last_name,
    phone : request.body.phone
  }

  db.User.create(obj)
          .then(()=>{
            response.redirect('/')
          })
})

router.get('/:id/edit', function(request, response){
  db.User.findById(request.params.id)
        .then((user)=>{
            response.render('form_edit_user', {user:user, id:request.params.id})
        })
})

router.post('/:id/edit', function(request, response){
  db.User.update({firstName:request.body.first_name, lastName:request.body.last_name, phone:request.body.phone}, { where : { id : request.params.id}} )
  .then(()=>{
    response.redirect('/')
  })
})


router.get('/:id/delete', function(request, response){
  db.User.destroy({where : {id:request.params.id}})
  .then(()=>{
    response.redirect('/')
  })
})

module.exports = router;