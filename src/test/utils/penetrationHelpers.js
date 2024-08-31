const sqlInjectionPatterns = [
    "' OR 1=1 --",
    "' OR 'a'='a",
    "'; DROP TABLE users; --",
];

const xssPatterns = [
    '<script>alert("XSS")</script>',
    '"><img src=x onerror=alert("XSS")>',
];

module.exports = {
    sqlInjectionPatterns,
    xssPatterns,
};
