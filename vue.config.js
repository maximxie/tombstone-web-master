module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // 覆盖ant design样式
          modifyVars: {
            "primary-color": "#AB5844",
            "menu-bg": "#EFDBA7",
            "menu-highlight-color": "#AB5844"
          },
          javascriptEnabled: true
        }
      }
    }
  }
};
