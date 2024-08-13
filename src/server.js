const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');
const engineRoutes = require('./routes/engineRoutes');
const routeRoutes = require('./routes/routeRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const trainRoutes = require('./routes/trainRoutes');
const healthCheckRoutes = require('./routes/healthCheckRoutes');
const monitoringRoutes = require('./routes/monitoringRoutes');
const logger = require('./middlewares/logger');
const verifyToken = require('./middlewares/verifyToken');

dotenv.config();

const app = express();

app.use(express.json());
app.use(logger);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/clients', verifyToken, clientRoutes);
app.use('/api/engines', verifyToken, engineRoutes);
app.use('/api/routes', verifyToken, routeRoutes);
app.use('/api/schedules', verifyToken, scheduleRoutes);
app.use('/api/trains', verifyToken, trainRoutes);
app.use('/api/health', healthCheckRoutes);
app.use('/api/monitoring', verifyToken, monitoringRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
