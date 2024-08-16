const lostFoundRoutes = require('./routes/lostFoundRoutes');
const newsRoutes = require('./routes/newsRoutes');

app.use('/api/lost-found', lostFoundRoutes);
app.use('/api/news', newsRoutes);
