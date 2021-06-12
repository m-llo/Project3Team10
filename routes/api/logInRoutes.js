const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User  = require('../../models/User.js');


router.post('/login', async (req, res) => {
  try {
    console.log("email", req.body.email)
    const dbUserData = await User.findOne({email: req.body.email});

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);
    console.log("valid password", validPassword)
    const userId = dbUserData.id
    console.log("id", userId)
  

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }
    console.log("after password verify id", userId)
    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id=userId
       
        res.status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });

    console.log("session" , req.session)
    console.log("session id" , session.user_id)
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