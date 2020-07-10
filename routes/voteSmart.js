const {presidentialCandidates, senateCandidates, houseCandidates} = require("../controllers/voteSmartController");

module.exports = (app) => {
    app.get("/api/president", presidentialCandidates);
    app.get("/api/senate", senateCandidates);
    app.get("/api/house", houseCandidates);
}

