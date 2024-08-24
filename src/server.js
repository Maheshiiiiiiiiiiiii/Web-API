const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./config/routes/authRoutes');
const clientRoutes = require('./config/routes/clientRoutes');
const engineRoutes = require('./config/routes/engineRoutes');
const scheduleRoutes = require('./config/routes/scheduleRoutes');
const trainRoutes = require('./config/routes/trainRoutes');
const routeRoutes = require('./config/routes/routeRoutes');

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
