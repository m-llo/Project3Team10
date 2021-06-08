const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User  = require('../../models/User.js');

// CREATE new user
router.post('/new', async (req, res) => {
  try {
    const dbUserData = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
      req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// router.get('/new', async (request, response) =>{
//     console.log(request.body)
    // const saltPassword = await bcrypt.genSalt(10)
    // const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    // const signedUpUser = new signUpTemplateCopy({
       
    //    username: request.body.username,
    //    email: request.body.email,
    //    password: securePassword,
       
    // })
    // signedUpUser.save()
    // .then(data =>{
    //     response.json(data)
    // })
    // .catch(error =>{
    //     response.json(error)
    // })
// })


module.exports = router

// const express = require('express')
// const router = express.Router()
// const signUpTemplateCopy = require('../models/User.js')
// const bcrypt = require('bcrypt')

// router.post('/new', async (request, response) =>{
//     console.log(request.body)
//     const saltPassword = await bcrypt.genSalt(10)
//     const securePassword = await bcrypt.hash(request.body.password, saltPassword)

//     const signedUpUser = new signUpTemplateCopy({
       
//        username: request.body.username,
//        email: request.body.email,
//        password: securePassword,
       
//     })
//     signedUpUser.save()
//     .then(data =>{
//         response.json(data)
//     })
//     .catch(error =>{
//         response.json(error)
//     })
// })

// router.post('/signin', async (request, response) =>{
//     console.log(request.body)
//     const saltPassword = await bcrypt.genSalt(10)
//     const securePassword = await bcrypt.hash(request.body.password, saltPassword)

//     const signInUser = new signUpTemplateCopy({
       
//        email: request.body.email,
//        password: securePassword,
       
//     })
//     signInUser.save()
//     .then(data =>{
//         response.json(data)
//     })
//     .catch(error =>{
//         response.json(error)
//     })
// })


// module.exports = router