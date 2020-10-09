module.exports = {
  devServer: {
    https: true,
  },
  publicPath: "/zcxtH5",
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: [],
      },
    },
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: false,
    },
  },
};
