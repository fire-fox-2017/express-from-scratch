'use strict'

const express = require('express')
const db = require('../models');

let router = express.Router();

router.get('/', function (request, response) {
	response.send("This is User!")
})

// app.listen(3000)

router.post('/create', (req, res, next) => {
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var phone = req.body.phone;

	db.User.create({firstname: firstname, lastname: lastname, phone: phone})
	.then ( user => {
		let msg = `Created user '${user.firstname} ${user.lastname} ${user.phone}'.`;
		console.log(msg);
		// res.send(msg);
		// res.render('index', {msg: msg});
		res.redirect('/');
	})
	.catch ( err => {
		console.log(err.message);
	})


})

router.get('/update/:id', (req, res, next) => {
	var id = req.params.id;
	db.User.findById(id)
	.then ( user => {
		res.render('edit', {user: user});
	})
})

router.post('/update/:id', (req, res, next) => {
	var id = req.params.id;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var phone = req.body.phone;

	db.User.update({firstname: firstname, lastname:lastname, phone: phone} , {fields: ['firstname', 'lastname', 'phone'], where: {id: id}})
	.then (user => {
		console.log(`update success for user ${user.id} ${user.firstname} ${user.lastname} ${user.phone}`);
  	res.redirect('/');
	})
	.catch (err => {
		console.log(err.message);
	})

})

router.get('/delete/:id', (req, res, next) => {
	var id = req.params.id;

	db.User.destroy({where: {id: id}})
	.then ( rowDeleted => {
		if(rowDeleted === 1) {
			console.log(`Deleted user with id=${id}`)
			res.redirect('/');
		}
	})
	.catch (err => {
		console.log(err.message);
	})

})

module.exports = router;