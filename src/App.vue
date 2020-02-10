<template lang="pug">
  div#app
    div#MainMenu
      b-container
        b-navbar(toggleable="md")
          router-link(to="/")
            b-navbar-brand SolAZDev
          b-navbar-toggle(target="menuCollapse")
          b-collapse#menuCollapse(is-nav='')
            b-navbar-nav
                // b-nav-item(to="/about") About
                b-nav-item(to="/resume") Resume
                b-nav-item(to="/portfolio") Portfolio
                b-nav-item(to="/projects") Projects
    router-view
</template>

<style lang="scss">
@import "./scss/theme.scss";
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    // color: $PipSel;

    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>
