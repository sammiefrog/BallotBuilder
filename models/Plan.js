const mongoose = require("mongoose");
// Not using as model - template for a form
const planSchema = new mongoose.Schema({
    //savings users ID with the plan so it shows up when they log in.
    userId: {
        type: String,
        required: true,
    },
    // can ask if they plan on early voting or voting the day of the election. They'll input and include date if they want
    when: {
        type: String
    },
    // whether or not they plan to vote absentee
    absentee: {
        type: Boolean,
        default: false
    },
    // who will the user remind
    reminderWho: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Plan", planSchema);
