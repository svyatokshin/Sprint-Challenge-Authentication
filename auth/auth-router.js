const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
  let user = req.body;
  const has = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
