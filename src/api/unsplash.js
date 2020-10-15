import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID AlnC2VChh8YAipP_YT6O_QThGlkBcchENEjJkmit0gY",
  },
});
