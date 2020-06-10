import axios from "axios";

export default {
  // ===========  signup  ===================== //
  addUserToDb: (user) => {
    return axios.post("/api/users/signup", user);
  },
  // ==========  login ========================= //
  loginUser: (user) => {
    return axios.post("/api/users/login", user).then((res) => {
      let accessToken = res.data.accessToken;
      axios.defaults.headers.common["x-access-token"] = accessToken;
      return res;
    });
  },

  // ================== restricted  for admin use ========= //
  postItem: (item) => {
    return axios.post("/api/items", item);
  },

  getAllItems: () => {
    return axios.get("/api/items");
  },

  deleteItem: (id) => {
    return axios.delete("/api/items/" + id);
  },
  // =========================================================== //

  // =========== display all items on a home page ================== //
  displayAllItems: () => {
    return axios.get("/api/items/all");
  },

  // =========== display items by a category on a home page ====== //
  displayCategory: (query) => {
    // console.log(query);
    return axios.get("/api/items/getCategory?category=" + query);
  },

  // == get item's info that needs to be posted to cart by id ==== //
  findItem: (id) => {
    // console.log(id);
    return axios.get("/api/cart/" + id);
  },

  // =========== add item to cart if user is logged in ======== //
  addToCartIfLoggedIn: (item) => {
    // console.log("itemBody", item);
    return axios.post("/api/cart", item);
  },

  displayCartItems: () => {
    return axios.get("/api/cart");
  },
};
