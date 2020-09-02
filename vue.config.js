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
      projectName: 'SolAZDev',
      url: 'https://solazdev.com',
      description: 'Indie Game & Web Developer',
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "SolAZDev";
      return args;
    });
  }
}