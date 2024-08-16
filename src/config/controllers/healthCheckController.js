exports.getHealthStatus = (req, res) => {
    res.status(200).json({ status: 'API is running smoothly' });
};
