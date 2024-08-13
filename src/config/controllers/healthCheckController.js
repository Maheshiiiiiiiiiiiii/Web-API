exports.checkHealth = async (req, res) => {
    try {
        res.status(200).json({ status: 'API is running smoothly' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
