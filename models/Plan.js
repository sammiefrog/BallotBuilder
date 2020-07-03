const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    votePreferences: {
        // may have to make this an array based on elections - every state has different elections though so this could be an open space
        type: String,
    },
    when: {
        type: Date,
    },
    absentee: {
        type: Boolean,
        default: false
    },
    reminder: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Plan', planSchema);