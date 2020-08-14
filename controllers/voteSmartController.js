// importing necessary files and dependencies and defining query urls and API key
const axios = require("axios");
const db = require("../models");
const FEDURL = "http://api.votesmart.org/Candidates.getByOfficeState?key=";
const APIKEY = process.env.APIKEY;
const DISTRICTURL = "http://api.votesmart.org/District.getByZip?key=";
const CANDIDATEURL = "http://api.votesmart.org/Candidates.getByDistrict?key=";
const jwt = require("jsonwebtoken");

// Exporting methods for the voteSmart controller that makes initial API calls getting candidates, saving and deleting preferences, and saving plans
module.exports = {
    presidentialCandidates: async (req, res) => {
        try {
            const results = await axios.get(`${FEDURL + APIKEY}&officeId=1&o=JSON`);
            console.log(results)
            res.json(results.data.candidateList);
        } catch (error) {
            console.log(error);
        }
    },
    senateCandidates: async (req, res) => {
        try {
            const results = await axios.get(`${FEDURL + APIKEY}&officeId=6&stateId=TN&o=JSON`);
            res.json(results.data.candidateList);
        } catch (error) {
            console.log(error);
        }
    },
    districtByZip: async (req, res) => {
        const zip = req.params.zip;
        try {
            const results = await axios.get(`${DISTRICTURL + APIKEY}&zip5=${zip}&o=JSON`);
            res.json(results.data.districtList.district[0].districtId);
        } catch (error) {
            console.log(error);
        }
    },
    houseCandidatesByDistrict: async (req, res) => {
        const distId = req.params.distId;
        try {
            const results = await axios.get(`${CANDIDATEURL + APIKEY}&districtId=${distId}&o=JSON`);
            res.json(results.data.candidateList);
        } catch (error) {
            console.log(error);
        }
    },
    savePlan: async (req, res) => {
        let decoded = jwt.decode(req.params.token);
        try {
            await db.Plan.create(req.body)
                .then(({ _id }) =>
                    db.User.findByIdAndUpdate(decoded.id, { $set: { plan: _id } }, { new: true })
                )
                .then(dbModel => {
                    console.log(dbModel);
                    res.json(dbModel);
                });
        } catch (error) {
            res.status(422).json(error);
        }
    },
    getPlan: async (req, res) => {
        try {
            let decoded = await jwt.decode(req.params.token);

            db.User.findById(decoded.id)
                .populate("plan")
                .then(dbModel => res.json(dbModel));
        } catch (error) {
            res.status(422).json(error);
        }
    },
    saveCandidates: async (req, res) => {
        try {
            let decoded = await jwt.decode(req.params.token);
            db.Candidate.create(req.body)
                .then(({ _id }) =>
                    db.User.findByIdAndUpdate(
                        decoded.id,
                        { $push: { candidates: _id } },
                        { new: true }
                    )
                )
                .then(dbModel => {
                    console.log(dbModel);
                    res.json(dbModel);
                });
        } catch (error) {
            res.status(422).json(error);
        }
    },
    getSavedCandidates: async (req, res) => {
        try {
            let decoded = await jwt.decode(req.params.token);
            db.User.findById(decoded.id)
                .populate("candidates")
                .then(dbModel => res.json(dbModel));
        } catch (error) {
            res.status(422).json(error);
        }
    },
    deleteCandidate: async (req, res) => {
        try {
            let decoded = await jwt.decode(req.params.token);
            db.User.updateOne(
                { _id: decoded.id },
                { $pull: { candidates: req.params.id } },
                { safe: true }
            ).then(dbModel => {
                console.log(dbModel);
                res.json(dbModel);
            });
        } catch (error) {
            res.status(422).json(error);
        }
    }
};
