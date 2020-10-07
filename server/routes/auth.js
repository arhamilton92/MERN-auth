const express = require('express');
const router = express.Router();

// import controller
const { signup, accountActivation, signin } = require('../controllers/auth')

// import validators
const { userSignupValidator, userSigninValidator } =require('../validators/auth');
const { validate } = require('../validators/index');


router.post('/signup', userSignupValidator, validate, signup)
router.post('/account-activation', accountActivation)
router.post('/signin', userSigninValidator, validate, signin)

module.exports = router; // {}