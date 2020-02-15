module.exports = {
  assetsDir: 'assets',
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/theme.scss";`
      }
    }
  },
  pluginOptions: {
    meta: {
      projectName: 'My project',
      url: 'https://solazdev.com',
      description: 'Indie Game & Web Developer',
    }
  }
}