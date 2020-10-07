const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose= require('mongoose');
const config = require('config');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config({ path: 'ENV_FILENAME' });

const app = express();

connectDB();

// import routes
const authRoutes = require('./routes/auth');

// app middlewares 
app.use(morgan('dev'));
app.use(express.json({ extended: false }))
// app.use(cors()); // allows all origins
if (config.nodeENV = 'development') {
    app.use(cors({ origin: `http://localhost:3000` }))
}

// middleware
app.use('/api', authRoutes)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`API is running on port: ${PORT} - ${config.nodeENV}`)
})