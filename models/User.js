const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
    candidates: [
        {
            type: Schema.types.ObjectId,
            ref: "Candidate"
        }
    ],
    plan: [
        {
            type: Schema.types.ObjectId,
            ref: "Plan"
        }
    ],
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);
