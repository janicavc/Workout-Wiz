const Progress = require('../../models/progress');

module.exports = {
    create,
    getProgress,
};

async function create(req, res) {
    console.log('recieved data', req.body);
    try {
        const newProgress = await Progress.create(req.body);
        res.json(newProgress);
    } catch (error) {
        res.status(400).json(error);
    }
}

async function getProgress(req, res) {
    try {
        const allProgress = await Progress.find();
        res.json(allProgress);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching progress' });
    }
}