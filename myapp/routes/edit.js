var express = require('express');
var router = express.Router();
var db = require('../models');


router.get('/edit/:id', function(req, res, next) {
  db.User.find({
    where: {
      id: req.params.id
    }
  })
  .then(user => {
    res.render('/edit/:id', {user: user})
  })
  .catch(err => {
    console.log(err.message);
  })
});

router.post('/edit/:id', function(req, res, next) {
  db.User.find({
    where: {
      id: req.params.id
    }
  })
  .then(users => {
    if(users) {
      users.updateAttributes({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        updatedAt: new Date()
      })
      .then( () => {
        res.redirect('./edit');
      })
    }
  })
});

module.exports = router;