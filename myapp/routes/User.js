'use strict'
const db = require('../models');
const routes = require('express').Router();



routes.get('/', (req, res) => {
    // res.send('ini User JS!')

    db.User.findAll()
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            res.send(err.message)
        })
})

routes.post('/add', (req, res, next) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    db.User.create({
        'first_name': first_name,
        'last_name': last_name
    }).then(user => {
        res.redirect('/')
    }).catch(err => {
        console.log(err.message)
    })
})

routes.get('/delete/:id', (req, res, next) => {
    let id = req.params.id
    db.User.destroy({
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect('/');
        })
})

routes.get('/edit/:id', (req, res, next) => {
    let id = req.params.id
    db.User.findById(id)
        .then(user => {
            res.render('edit', {
                title: 'Edit',
                first_name: user.first_name,
                last_name: user.last_name,
                id: id
            })
        })
})


routes.post('/edit', (req, res, next) => {
  let id = req.body.id
  let FirstName = req.body.first_name
  let LastName = req.body.last_name
  db.User.update({first_name:FirstName,last_name:LastName},{where :{id:id}})
  .then(()=>{
    res.redirect('/');
  })
})







module.exports = routes
