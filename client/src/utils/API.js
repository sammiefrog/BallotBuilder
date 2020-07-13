// Setting up Google Civics API with query url, API key, and export to be used in other parts of application
import axios from "axios";

export default {
  getSenate: function() {
    return axios.get("/api/senate")
  },
  getPresident: function() {
    return axios.get("/api/president")
  },
  getHouse: function() {
    return axios.get("/api/house")
  },
  saveCandidate: function (data) {
    return axios.post("/api/saved", data)
  }
};