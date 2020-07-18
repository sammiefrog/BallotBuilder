const mongoose = require("mongoose");
// Not using as model - template for a form
const planSchema = new mongoose.Schema({
    votePreferences: {
        // may have to make this an array based on elections - every state has different elections though so this could be an open space
        type: String
    },
    // can ask if they plan on early voting or voting the day of the election. They'll input and include date if they want
    when: {
        type: Date
    },
    // whether or not they plan to vote absentee
    absentee: {
        type: Boolean,
        default: false
    },
    // may not do this.
    reminder: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Plan", planSchema);
