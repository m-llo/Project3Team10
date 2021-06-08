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