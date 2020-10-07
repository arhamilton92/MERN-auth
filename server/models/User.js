const mongoose = require('mongoose');
const crypto = require('crypto');

// user schema
const userSchema = new Mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        lowercase: true
    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: String,
    role: {
        type: String,
        default: 'subscriber'
    },
    resetPasswordLink: {
        type: String,
        default: ''
    }
}, {timestamps: true})

// virtual


// methods