const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
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