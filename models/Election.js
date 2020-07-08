const mongoose = require('mongoose');


const electionSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
  },
  electionName: {
    type: String,
    required: true,
    },
electionDate: {
      type: String,
    },
    pollingPlace: {
        //link to find polling place
      type: String,
    },
    absenteeInfo: {
        //link also
        type: String,
    },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Election", electionSchema);