const retryRoutes = require('./routes/retryRoutes');
const networkReliabilityRoutes = require('./routes/networkReliabilityRoutes');
const userRoutes = require('./routes/userRoutes');
const apiKeyRoutes = require('./routes/apiKeyRoutes');
const logRoutes = require('./routes/logRoutes');
const alertRoutes = require('./routes/alertRoutes'); 
const healthCheckRoutes = require('./routes/healthCheckRoutes'); 
const monitoringRoutes = require('./routes/monitoringRoutes'); 
const optimizationRoutes = require('./routes/optimizationRoutes'); 
const securityRoutes = require('./routes/securityRoutes'); 

dotenv.config();

const app = express();

connectDB();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/engines', engineRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/trains', trainRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/maintenance-alerts', maintenanceAlertRoutes);
app.use('/api/crowding-info', crowdingInfoRoutes);
app.use('/api/best-clicks', bestClicksRoutes);
app.use('/api/lost-found', lostFoundRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/location', locationRoutes);
app.use('/api/retry', retryRoutes);
app.use('/api/network-reliability', networkReliabilityRoutes);
app.use('/api/users', userRoutes);
app.use('/api/api-keys', apiKeyRoutes);
app.use('/api/logs', logRoutes);
app.use('/api/alerts', alertRoutes); 
app.use('/api/health-check', healthCheckRoutes); 
app.use('/api/location-cache', locationCacheRoutes); 
app.use('/api/monitoring', monitoringRoutes); 
app.use('/api/optimization', optimizationRoutes); 
app.use('/api/security', securityRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));