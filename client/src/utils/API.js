import axios from "axios";
if (process.env.NODE_ENV == "production") {
  axios.defaults.baseURL = "https://mighty-spire-39962.herokuapp.com";
}
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

  // == get item's info that needs to be posted to cart by id ==== //
  findItem: (id) => {
    return axios.get("/api/cart/" + id);
  },

  // =========== add item to cart ======== //
  addToCart: (item) => {
    return axios.post("/api/cart", item);
  },

  // =========== get all items stored in cart collection=== //
  displayCartItems: () => {
    return axios.get("/api/cart");
  },

  // =========== delete item from cart =================== //
  deleteCartItem: (id) => {
    return axios.delete("/api/cart/" + id);
  },

  // ============ update cart quantity ==================== //
  updateCartQuantity: (id, quantity) => {
    return axios.put("/api/cart/" + id, quantity);
  },

  // ============ update db quantity ======================= //
  updateDbQuantity: (id, quantity) => {
    return axios.put("/api/items/" + id, quantity);
  },
  // =============== send email =========================== //
  sendEmail: (message) => {
    return axios.post("/api/email", message);
  },
};
