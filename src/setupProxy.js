const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: 'https://coresurveymvc.appspot.com',
      changeOrigin: true,
    })
  );
};