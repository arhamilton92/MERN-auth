const User = require("../models/User");
const config = require('config');
const jwt = require('jsonwebtoken');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.sendGridAPIKey);


exports.signup = (req, res) => {
    const { name, email, password } = req.body;

    User.findOne({ email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({
                error: 'Email is taken'
            });
        }

        const token = jwt.sign({ name, email, password }, config.jwtAccountActivation, { expiresIn: '10m' });

        const emailData = {
            from: config.emailFrom,
            to: email,
            subject: `Account activation link`,
            html: `
                <h1>Please use the following link to activate your account</h1>
                <p>${config.clientURL}/auth/activate/${token}</p>
                <hr />
                <p>This email may contain sensetive information</p>
                <p>${config.clientURL}</p>
            `
        };

        sgMail
            .send(emailData)
            .then(sent => {
                // console.log('SIGNUP EMAIL SENT', sent)
                return res.json({
                    message: `Email has been sent to ${email}. Please follow the validation link in this email to activate your account.`
                });
            })
            .catch(err => {
                // console.log('SIGNUP EMAIL SENT ERROR', err)
                return res.json({
                    message: err.message
                });
            });
    });
};

exports.accountActivation = (req, res) => {
    const { token } = req.body
    if(token) {
        jwt.verify(token, config.jwtAccountActivation)
    }
}