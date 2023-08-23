const Progress = require('../../models/progress');

module.exports = {
    create,
};

async function create(req, res) {
    try {
        const newProgress = await Progress.create(req.body);
        res.json(newProgress);
    } catch (error) {
        res.status(400).json(error);
    }
}