const https = require('https');
const fs = require('fs');
const app = require('./app');

const sslOptions = {
    key: fs.readFileSync('path/to/private.key'),
    cert: fs.readFileSync('path/to/certificate.crt')
};

https.createServer(sslOptions, app).listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000} with HTTPS`);
});
