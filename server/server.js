const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const bodyParser = require('body-parser');
const mongoose= require('mongoose');
require('dotenv').config()

const app = express();

// import routes
const authRoutes = require('./routes/auth')

// app middlewares 
app.use(morgan('dev'));
app.use(express.json({ extended: false }))
// app.use(cors()); // allows all origins
if (process.env.NODE_ENV = 'development') {
    app.use(cors({ origin: `http://localhost:3000` }))
}

// middleware
app.use('/api', authRoutes)

const PORT = process.env.port || 8000;
app.listen(PORT, () => {
    console.log(`API is running on port: ${PORT}`)
})