const express = require('express');
const router = express.Router();

// import controller
const { signup, accountActivation } = require('../controllers/auth')

// import validators
const { userSignupValidator } =require('../validators/auth');
const { validate } = require('../validators/index');


router.post('/signup', userSignupValidator, validate, signup)

router.post('/account-activation', accountActivation)

module.exports = router; // {}