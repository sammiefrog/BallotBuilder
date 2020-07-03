// Setting up Google Civics API with query url, API key, and export to be used in other parts of application
import axios from "axios";
const BASEURL = "";
const APIKEY = "&apikey=";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};