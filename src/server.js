const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');
const engineRoutes = require('./routes/engineRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const trainRoutes = require('./routes/trainRoutes');
const routeRoutes = require('./routes/routeRoutes');

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
