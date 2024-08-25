const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./config/routes/authRoutes');
const clientRoutes = require('./config/routes/clientRoutes');
const engineRoutes = require('./config/routes/engineRoutes');
const routeRoutes = require('./config/routes/routeRoutes');
const scheduleRoutes = require('./config/routes/scheduleRoutes');
const trainRoutes = require('./config/routes/trainRoutes');
const bestClicksRoutes = require('./routes/bestClicksRoutes');


app.use(cors());
app.use(bodyParser.json());

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/auth', authRoutes);
app.use('/clients', clientRoutes);
app.use('/engines', engineRoutes);
app.use('/routes', routeRoutes);
app.use('/schedules', scheduleRoutes);
app.use('/trains', trainRoutes);
app.use('/api/best-clicks', bestClicksRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
