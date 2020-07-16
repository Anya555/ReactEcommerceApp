const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
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
};
