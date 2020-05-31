import axios from "axios";

export default {
  addUserToDb: (user) => {
    return axios.post("/api/users/signup", user);
  },

  loginUser: (user) => {
    return axios.post("/api/users/login", user).then((res) => {
      let accessToken = res.data.accessToken;
      axios.defaults.headers.common["x-access-token"] = accessToken;
      return res;
    });
  },

  postItem: (item) => {
    console.log("api route hit");
    console.log(item);

    return axios.post("/api/items", item);
  },
};
