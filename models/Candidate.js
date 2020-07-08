const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  candidateName: {
    type: String,
    required: true,
  },
  candidateParty: {
    type: String,
    required: true,
  },
  office: {
    type: String,
  },
  encumbent: {
    type: Boolean,
  },
  coreValues: {
    //link also
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Candidate", candidateSchema);
