import axios from "axios";

export default {
    // Add New Profile
    addProfile: function(profile) {
      return axios.post("/api/profile", profile);
    },
    // Edit Profile
    editProfile: function(id) {
      return axios.put("/api/profile/" + id);
    }
};
