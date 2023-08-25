const Progress = require('../../models/progress');

async function createProgress(userId, date, exercise, weight, description) {
    try {
        const progress = new Progress({
            user: userId,
            date,
            exercise,
            weight,
            description,
        });

        const savedProgress = await progress.save();
        return savedProgress;
    } catch (error) {
        throw error;
    }
}

async function getAllProgress(userId) {
    try {
        const progressEntries = await Progress.find({ user: userId }).exec();
        return progressEntries;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createProgress,
    getAllProgress,
};