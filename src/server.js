const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const logger = require('./utils/logger');
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');
const engineRoutes = require('./routes/engineRoutes');
const routeRoutes = require('./routes/routeRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const trainRoutes = require('./routes/trainRoutes');
const healthCheckRoutes = require('./routes/healthCheckRoutes');
const monitoringRoutes = require('./routes/monitoringRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) }}));

// Routes
app.use('/auth', authRoutes);
app.use('/clients', clientRoutes);
app.use('/engines', engineRoutes);
app.use('/routes', routeRoutes);
app.use('/schedules', scheduleRoutes);
app.use('/trains', trainRoutes);
app.use('/health', healthCheckRoutes);
app.use('/monitoring', monitoringRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
