const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    exercise: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    description: String,
})

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;