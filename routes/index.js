'use strict'

const express = require('express')
var router = express.Router()

router.get('/index', (request, response) => {
    response.send("I love Hacktiv8!")
})

module.exports = router