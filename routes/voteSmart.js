// const router = require("express").Router();
// const voteSmartController = require("../controllers/voteSmartController");
const axios = require("axios");
const FEDURL = "http://api.votesmart.org/Candidates.getByOfficeState"
const APIKEY = "?key=35ff1dd44bb6c16ee2db8a35998a8f21"


module.exports = (app) => {
    app.get("/api/votesmart", (req, res) => {
        axios
            .get(FEDURL + APIKEY + "&officeId=1&o=JSON")
            .then(results => {
                res.json(results.data.candidateList);
            })
            .catch(err => {
                res.json(err);
            });
    }) 
}

// match with "/api/home or /"
// router.route("/voteSmart").get(voteSmartController.presidentialCandidates)
// .get(voteSmartController.houseCandidates).get(voteSmartController.senateCandidates)

// module.exports = router