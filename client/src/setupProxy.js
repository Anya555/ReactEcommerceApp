const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.PORT
        ? "https://mighty-spire-39962.herokuapp.com"
        : "http://localhost:3001",
      changeOrigin: true,
    })
  );
};
