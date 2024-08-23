require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const trainRoutes = require('./config/routes/trainRoutes');

const app = express();
const PORT = process.env.PORT || 3000; // Updated the port to 3000

app.use(express.json());
app.use('/api/trains', trainRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
