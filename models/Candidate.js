// importing required dependency
const mongoose = require("mongoose");

// model for candidates
const candidateSchema = new mongoose.Schema({
    candidateName: {
        type: String,
        required: true
    },
    candidateParty: {
        type: String,
        required: true
    },
    candidateId: {
        type: String
    },
    candidatePhoto: {
        type: String
    },
    coreValues: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// exporting model to be used in other parts of the application
module.exports = mongoose.model("Candidate", candidateSchema);
