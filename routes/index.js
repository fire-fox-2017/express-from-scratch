let express = require('express');
let models = require('../models');
var router = express.Router();

router.get('/',(req, res, next) => {
  models.User.findAll({})
  .then((query)=>{
    res.render('index',{
      tampil:query
    })
  })
})

router.get('/add_users', (req, res, next)=>{
  res.render('add_users');
})

router.post('/simpan', (req, res, next)=>{
  models.User.create({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    phone : req.body.phone
  })
  .then(()=>{
    res.redirect('/')
  })
})

router.get('/delete/:id', (req, res, next)=>{
  models.User.destroy({
    where:{
      id : req.params.id
    }
  })
  .then(()=>{
    res.redirect('/')
  })
})

router.get('/edit/:id', (req, res, next)=>{
  models.User.find({
    where:{
      id : req.params.id
    }
  })
  .then((user)=>{
    res.render('edit_users',{
      users:user
    })
  })
})

router.post('/update/:id',(req, res, next)=>{
  models.User.update({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone
  },{
    where:{
      id : req.params.id
    }
  })
  .then(()=>{
    res.redirect('/')
  })
})
module.exports = router
