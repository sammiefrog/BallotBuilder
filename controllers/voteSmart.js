const axios = require("axios");
const APIKEY = "?key=35ff1dd44bb6c16ee2db8a35998a8f21"
const query = "&electionId=2020"

// Defining methods for the googleController
module.exports = {
    findElection: function (req, res) {
        const election = req.params.election;
        axios
            .get("http://api.votesmart.org/Election.getElection" + APIKEY + query)
            .then(results => {
                res.json(results.data.items);
            })
            .catch(err => {
                res.json(err);
            });
    }
};

"http://api.votesmart.org/Election.getElection?key=35ff1dd44bb6c16ee2db8a35998a8f21&electionId=2012"

"http://api.votesmart.org/CandidateBio.getBio?key=35ff1dd44bb6c16ee2db8a35998a8f21&candidateId=9490"