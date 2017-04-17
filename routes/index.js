'use strict'

const express = require('express')

// let app = express()

let router = express.Router();

router.get('/', function (request, response) {
	response.send("I Love You!")
})

// app.listen(3000)


module.exports = router;