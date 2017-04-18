'use strict'

const express = require('express')
var router = express.Router()
var models = require('../models')

// router.get('/', (request, response) => {
//     response.send("I love Hacktiv8!")
// })

router.get('/', (req, res, next) => {
    console.log('Test');
    models.User.findAll()
        .then(users => {
            // console.log(users);
            res.render('index', {
                title: 'List of User',
                users: users
            })
        })
})

router.post('/create', (req, res, next) => {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let phone = req.body.phone
    // console.log(lastName);
    models.User.create({
            'firstName': firstName,
            'lastName': lastName,
            'phone': phone
        })
        .then(() => {
            res.redirect('/')
            // res.send(data)
        })
        .catch(err => {
            console.log(err.message);
        })
})

router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id
    models.User.findById(id)
        .then(user => {
            res.render('./edit_user', {
                id: id,
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone
            })
        })
})

router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id
    models.User.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone
        }, {
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect('/')
        })
})

router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id
    models.User.destroy({
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err.message);
        })
})

module.exports = router