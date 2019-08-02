import axios from "axios";

export default {
    // Add New Profile
    addProfile: function(profile) {
      return axios.post("/api/profile", profile);
    },
    getProfiles: function() {
      return axios.get("/api/profiles");
    }
};
