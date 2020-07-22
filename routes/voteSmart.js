const {
    presidentialCandidates,
    senateCandidates,
    districtByZip,
    houseCandidatesByDistrict,
    savePlan,
    getPlan,
    saveCandidates,
    getSavedCandidates,
    deleteCandidate
} = require("../controllers/voteSmartController");

module.exports = app => {
    app.get("/api/president", presidentialCandidates);
    app.get("/api/senate", senateCandidates);
    app.get("/api/district/:zip", districtByZip);
    app.get("/api/candidate/:distId", houseCandidatesByDistrict),
    app.post("/api/plan/:token", savePlan);
    app.get("/api/plan/:token", getPlan);

    app.post("/api/saved/:token", saveCandidates);
    app.get("/api/saved/:token", getSavedCandidates);

    app.delete("/api/saved/:token/:id", deleteCandidate);
};
