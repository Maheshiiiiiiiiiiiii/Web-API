const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bestClicksRoutes = require('./routes/bestClicksRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Routes
app.use('/api/best-clicks', bestClicksRoutes);

module.exports = app;
