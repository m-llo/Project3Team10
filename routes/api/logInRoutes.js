const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User  = require('../../models/User.js');


router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({email: req.email});

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.CheckPassword(req.body.password);
    const userId = dbUserData.id
    const userEmail=dbUserData.email

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
        req.session.loggedIn = true;
        req.session.id=userId
        req.session.email=userEmail;
        res.status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;