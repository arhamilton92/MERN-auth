const express = require('express');

const app = express();

// import routes
const authRoutes = require('./routes/auth')

// middleware
app.use('/api', authRoutes)

const PORT = process.env.port || 8000;
app.listen(PORT, () => {
    console.log(`API is running on port: ${PORT}`)
})