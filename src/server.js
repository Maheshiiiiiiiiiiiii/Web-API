require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const trainRoutes = require('./routes/trainRoutes');
const engineRoutes = require('./routes/engineRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/trains', trainRoutes);
app.use('/api/engines', engineRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
