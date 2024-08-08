const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');
const engineRoutes = require('./routes/engineRoutes');
const routeRoutes = require('./routes/routeRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const trainRoutes = require('./routes/trainRoutes');
const healthCheckRoutes = require('./routes/healthCheckRoutes');
const monitoringRoutes = require('./routes/monitoringRoutes');

// Route middlewares
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/engines', engineRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/trains', trainRoutes);
app.use('/api/health', healthCheckRoutes);
app.use('/api/monitoring', monitoringRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
