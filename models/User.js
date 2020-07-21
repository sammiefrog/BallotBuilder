const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = mongoose.model("User", userSchema);
