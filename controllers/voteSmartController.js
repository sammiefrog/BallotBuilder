const axios = require("axios");
const FEDURL = "http://api.votesmart.org/Candidates.getByOfficeState"
const APIKEY = "?key=35ff1dd44bb6c16ee2db8a35998a8f21"
const BIOURL = "http://api.votesmart.org/CandidateBio.getBio"

// Defining methods for the voteSmart controller
module.exports = {
    presidentialCandidates: async function (req, res) {
        axios
            .get(FEDURL + APIKEY + "&officeId=1&o=JSON")
            .then((results) => {
                res.json(results.data.candidateList);
            })
            .catch(err => {
                res.json(err);
            });
    },
    senateCandidates: function (req, res) {
        axios
            .get(FEDURL + APIKEY + "&officeId=6&stateId=TN&o=JSON")
            .then(results => {
                res.json(results.data.candidateList);
            })
            .catch(err => {
                res.json(err);
            });
    },
    houseCandidates: function (req, res) {
        axios
            .get(FEDURL + APIKEY + "&officeId=5&stateId=TN&o=JSON")
            .then(results => {
                res.json(results.data.candidateList);
            })
            .catch(err => {
                res.json(err);
            });
    }
};