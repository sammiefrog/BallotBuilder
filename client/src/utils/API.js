import axios from "axios";

export default {
    getSenate: () => {
        return axios.get("/api/senate");
    },
    getPresident: () => {
        return axios.get("/api/president");
    },
    getHouse: () => {
        return axios.get("/api/house");
    },
    saveCandidate: (token, data) => {
        return axios.post("/api/saved/" + token, data);
    },
    getSaved: (token) =>{
        return axios.get("/api/saved/" + token);
    },
    deleteCandidate:  (token, id) => {
        return axios.delete("/api/saved/" + token + "/" + id);
    },
    getDistrict: (zip) => {
        return axios.get("/api/district/" + zip);
    },
    getHouseCandidates: (distId) => {
        return axios.get("/api/candidate/" + distId);
    },
    savePlan: (token, plan) => {
        return axios.post("/api/plan/" + token, plan);
    },
    getPlan: (token) => {
        return axios.get("/api/plan/" + token);
    }
};
