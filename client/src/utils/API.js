import axios from "axios";

export default {
    // Add New Profile
    addProfile: function() {
      return axios.post("/api/profile");
    }
};
