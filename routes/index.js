'use strict'

const express = require('express')
const db = require('../models');

// let app = express()

let router = express.Router();

router.get('/', function (request, response) {
	// response.send("I Love You!")
	
	db.User.findAll()
	.then ( users => {
		response.render('index', {title: "Scratch Express", users: users })

	})

})

// app.listen(3000)


module.exports = router;