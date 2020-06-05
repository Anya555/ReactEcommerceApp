import axios from "axios";

export default {
  // =========== login and signup  ===================== //
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
  // ========================================================== //

  // ================== restricted  for admin use ========= //
  postItem: (item) => {
    return axios.post("/api/items", item);
  },

  getAllItems: () => {
    return axios.get("/api/items");
  },

  deleteItem: (id) => {
    // console.log(id);
    return axios.delete("/api/items/" + id);
  },
  // =========================================================== //

  // =========== display items on a home page ================== //
  displayAllItems: () => {
    return axios.get("/api/items/all");
  },

  // =========== display items by category on a home page ====== //
  displayCategory: (query) => {
    // console.log("api route hit");
    // console.log(query);
    return axios.get("/api/items/getCategory?category=" + query);
  },
};
