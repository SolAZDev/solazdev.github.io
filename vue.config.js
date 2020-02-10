module.exports = {
  assetsDir: 'assets',
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/theme.scss";`
      }
    }
  }
}