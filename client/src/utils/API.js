import axios from "axios";

export default {
    getSenate: function () {
        return axios.get("/api/senate");
    },
    getPresident: function () {
        return axios.get("/api/president");
    },
    getHouse: function () {
        return axios.get("/api/house");
    },
    saveCandidate: function (token, data) {
        return axios.post("/api/saved/" + token, data);
    },
    getSaved: function (token) {
        return axios.get("/api/saved/" + token);
    },
    deleteCandidate: function (id) {
        return axios.delete("/api/saved/" + id);
    },
    getDistrict: function (zip) {
        return axios.get("/api/district/" + zip);
    },
    getHouseCandidates: function (distId) {
        return axios.get("/api/candidate/" + distId);
    },
    savePlan: function (plan) {
        return axios.post("/api/plan", plan);
    },
    getPlan: function () {
        return axios.get("/api/plan")
    }

};
