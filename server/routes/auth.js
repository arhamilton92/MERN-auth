const express = require('express');
const router = express.Router();


router.get('/signup', (req, res) => {
    res.json({
        data: 'Hello from signup!'
    })
})

module.exports = router; // {}