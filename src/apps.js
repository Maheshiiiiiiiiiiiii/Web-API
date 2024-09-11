/*
1const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./config/routes/authRoutes');
const clientRoutes = require('./config/routes/clientRoutes');
const engineRoutes = require('./config/routes/engineRoutes');
const scheduleRoutes = require('./config/routes/scheduleRoutes');
const trainRoutes = require('./config/routes/trainRoutes');
const routeRoutes = require('./config/routes/routeRoutes');
const maintenanceAlertRoutes = require('./config/routes/maintenanceAlertRoutes');
const crowdingInfoRoutes = require('./config/routes/crowdingRoutes');
const bestClicksRoutes = require('./config/routes/bestClicksRoutes');
const lostFoundRoutes = require('./config/routes/lostFoundRoutes');
const newsRoutes = require('./config/routes/newsRoutes');
const locationRoutes = require('./config/routes/locationRoute');
const retryRoutes = require('./config/routes/retryRoutes');
const networkReliabilityRoutes = require('./config/routes/networkReliabilityRoutes');
const userRoutes = require('./config/routes/userRoutes');
const apiKeyRoutes = require('./config/routes/apiKeyRoutes');
const logRoutes = require('./config/routes/logRoutes');
const alertRoutes = require('./config/routes/alertRoutes');
const healthCheckRoutes = require('./config/routes/healthCheckRoutes');
const locationCacheRoutes = require('./config/routes/locationCacheRoutes');
const monitoringRoutes = require('./config/routes/monitoringRoutes');
const optimizationRoutes = require('./config/routes/optimizationRoutes');
const securityRoutes = require('./config/routes/securityRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/auth', authRoutes); // done
app.use('/clients', clientRoutes);// done
app.use('/engines', engineRoutes);
app.use('/schedules', scheduleRoutes);
app.use('/trains', trainRoutes);
app.use('/routes', routeRoutes);
app.use('/maintenance-alerts', maintenanceAlertRoutes);
app.use('/crowding-info', crowdingInfoRoutes);
app.use('/best-clicks', bestClicksRoutes);
app.use('/lost-found', lostFoundRoutes);
app.use('/news', newsRoutes);
app.use('/location', locationRoutes);
app.use('/retry', retryRoutes);
app.use('/network-reliability', networkReliabilityRoutes);
app.use('/users', userRoutes);
app.use('/api-keys', apiKeyRoutes);
app.use('/logs', logRoutes);
app.use('/alerts', alertRoutes);//done
app.use('/health-check', healthCheckRoutes);
app.use('/location-cache', locationCacheRoutes);
app.use('/monitoring', monitoringRoutes);
app.use('/optimization', optimizationRoutes);
app.use('/security', securityRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
*/