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
    saveCandidate: function (id, data) {
        return axios.post("/api/saved/" + id, data);
    },
    getSaved: function (id) {
        return axios.get("/api/saved/" + id);
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
