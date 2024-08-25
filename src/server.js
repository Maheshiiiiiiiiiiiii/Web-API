const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./config/routes/authRoutes');
const clientRoutes = require('./config/routes/clientRoutes');
const engineRoutes = require('./config/routes/engineRoutes');
const scheduleRoutes = require('./config/routes/scheduleRoutes');
const trainRoutes = require('./config/routes/trainRoutes');
const mongoose = require("mongoose");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/engines', engineRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/trains', trainRoutes);
app.get('/api', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log ('mongodb is connect:')
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
