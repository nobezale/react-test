const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target:
        "http://dev-eu-central-1-machin-api.dev.internal.od-machine.com/api/v1/image_recognition", //'http://127.0.0.1:5000', // API endpoint 2 to
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
      headers: {
        Connection: "keep-alive",
      },
    })
  );
};
