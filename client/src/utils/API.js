import axios from "axios";

export default {
  addUserToDb: (user) => {
    console.log("api route hit");
    console.log(user);
    return axios.post("/api/users/signup", user);
  },

  loginUser: (user) => {
    return axios.post("/api/users/login", user);
  },
};
