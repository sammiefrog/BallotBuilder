// importing required dependency
const mongoose = require("mongoose");

//Model for voting plan created by user
const planSchema = new mongoose.Schema({
    when: {
        type: String
    },
    absentee: {
        type: Boolean,
        default: false
    },
    reminderWho: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// exporting model to be used in other parts of the application
module.exports = mongoose.model("Plan", planSchema);
