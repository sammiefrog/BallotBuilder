const {
  presidentialCandidates,
  senateCandidates,
  houseCandidates,
  districtByZip,
  houseCandidatesByDistrict,
  saveCandidates,
    getSavedCandidates,
  deleteCandidate
} = require("../controllers/voteSmartController");

module.exports = (app) => {
    app.get("/api/president", presidentialCandidates);
    app.get("/api/senate", senateCandidates);
    app.get("/api/house", houseCandidates);
    app.get("/api/district/:zip", districtByZip)
    app.get("/api/candidate/:district", houseCandidatesByDistrict)
    
    app.post("/api/saved", saveCandidates);
    app.get("/api/saved", getSavedCandidates);
    app.delete("/api/saved/:id", deleteCandidate)

}

