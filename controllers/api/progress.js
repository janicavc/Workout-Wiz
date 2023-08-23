const Progress = require('../../models/progress');

module.exports = {
    create,
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
