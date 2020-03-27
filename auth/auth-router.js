const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./auth-model.js');

router.post('/register', (req, res) => {
  let user = req.body;
  const has = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
        .then(saved => {
          res.status(201).json(saved);
        })
        .catch(error => {
          res.status(500).json(error)
        })

});

router.post('/login', (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findBy({ username })
      .first()
      .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token, // sending the token as well as welcome message
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials"})
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = { expiresIn: '1h'}

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
