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
    // app.get("/api/house", houseCandidates);
    app.get("/api/district/:zip", districtByZip);
    app.get("/api/candidate/:distId", houseCandidatesByDistrict),
        // app.get("/api/values/:candId", candidateValues)
    app.post("/api/plan", savePlan);
    app.get("/api/plan", getPlan)
    app.post("/api/saved/:id", saveCandidates);
    app.get("/api/saved/:id", getSavedCandidates);
    app.delete("/api/saved/:id", deleteCandidate);
};
