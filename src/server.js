const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const authRoutes = require("./config/routes/authRoutes");
const clientRoutes = require("./config/routes/clientRoutes");
const engineRoutes = require("./config/routes/engineRoutes");
const scheduleRoutes = require("./config/routes/scheduleRoutes");
const trainRoutes = require("./config/routes/trainRoutes");
const routeRoutes = require("./config/routes/routeRoutes");
const maintenanceAlertRoutes = require("./config/routes/maintenanceAlertRoutes");
const crowdingInfoRoutes = require("./config/routes/crowdingRoutes");
const bestClicksRoutes = require("./config/routes/bestClicksRoutes");
const lostFoundRoutes = require("./config/routes/lostFoundRoutes");
const newsRoutes = require("./config/routes/newsRoutes");
const locationRoutes = require("./config/routes/locationRoute");
const retryRoutes = require("./config/routes/retryRoutes");
const networkReliabilityRoutes = require("./config/routes/networkReliabilityRoutes");
const apiKeyRoutes = require("./config/routes/apiKeyRoutes");
const logRoutes = require("./config/routes/logRoutes");
const alertRoutes = require("./config/routes/alertRoutes");
const healthCheckRoutes = require("./config/routes/healthCheckRoutes");
const locationCacheRoutes = require("./config/routes/locationCacheRoutes");
const monitoringRoutes = require("./config/routes/monitoringRoutes");
const optimizationRoutes = require("./config/routes/optimizationRoutes");
const securityRoutes = require("./config/routes/securityRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(bodyParser.json());

app.use("/api/auth", authRoutes); //same as the client routes only update route added /* that middle ware part is confusing why use another model as user
app.use("/api/clients", clientRoutes);
app.use("/api/engines", engineRoutes);
app.use("/api/schedules", scheduleRoutes);
app.use("/api/trains", trainRoutes);
app.use("/api/routes", routeRoutes);
app.use("/api/maintenance-alerts", maintenanceAlertRoutes); // should be updated psotman routes ---
app.use("/api/crowding-info", crowdingInfoRoutes);
app.use("/api/best-clicks", bestClicksRoutes); // check postman request for adding picture
app.use("/api/lost-found", lostFoundRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/retry", retryRoutes);
app.use("/api/network-reliability", networkReliabilityRoutes);
app.use("/api/api-keys", apiKeyRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/health-check", healthCheckRoutes);
app.use("/api/location-cache", locationCacheRoutes);
app.use("/api/monitoring", monitoringRoutes);
app.use("/api/optimization", optimizationRoutes);
app.use("/api/security", securityRoutes); // did not work properly due to client and user model conflict

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
