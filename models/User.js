// importing required dependency
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// model for users
const userSchema = new Schema({
    username: {
        type: String,
        min: 6,
        required: true
    },
    password: {
        type: String,
        min: 6,
        required: true
    },
    //referencing a users selected candidates
    candidates: [
        {
            type: Schema.Types.ObjectId,
            ref: "Candidate"
        }
    ],
    //referencing a users plan
    plan: [
        {
            type: Schema.Types.ObjectId,
            ref: "Plan"
        }
    ],
    created: {
        type: Date,
        default: Date.now
    }
});

// exporting model to be used in other parts of the application
module.exports = mongoose.model("User", userSchema);
