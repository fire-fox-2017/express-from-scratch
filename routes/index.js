const routes = require('express').Router()

routes.get('/', function (req, res) {
  res.send("I love ...")
})

module.exports = routes
