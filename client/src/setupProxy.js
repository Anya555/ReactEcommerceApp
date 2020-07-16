const { createProxyMiddleware } = require("http-proxy-middleware");
const environment = process.env;
const isDeployed =
  environment.NODE_ENV === "production" ||
  environment.NODE_ENV === "development";
module.exports = function (app) {
  if (isDeployed) {
    app.use(
      "/api/*",
      createProxyMiddleware({
        target: "http://localhost:3001",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        cookieDomainRewrite: "",
      })
    );
  }
};
