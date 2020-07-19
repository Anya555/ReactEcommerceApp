const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api/*",
    createProxyMiddleware({
      target: process.env.HOST,
      secure: false,
      logLevel: "debug",
      changeOrigin: true,
      cookieDomainRewrite: "",
    })
  );
};
