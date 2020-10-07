const express = require('express');

const app = axpress();

app.get('./api/signup', (req, res) => {
    res.json({
        data: 'you hit signup endpoint'
    })
})

const PORT = process.env.port || 8000;
app.listen(port, () => {
    console.log(`API is running on port: ${PORT}`)
})