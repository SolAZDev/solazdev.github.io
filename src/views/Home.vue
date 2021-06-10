<template lang="pug">
  mixin IconLink(link="", icon="", size="1", iconStyle="fab")
    a(href=(link), target="_blank")
        font-awesome-icon(icon="["+iconStyle+", "+icon+"]", size=(size))

  div
    b-jumbotron(bg-variant="dark")
      //- img(src="@/assets/solAvatar.svg")
      h2 SolAZDev
      h5 Indie Game & Web Developer

    b-container
      b-row
        b-col(sm="6" md="12")
          .embed-responsive.embed-responsive-16by9
            iframe(:src="reel", allow='autoplay; encrypted-media; picture-in-picture', allowfullscreen).embed-responsive-item
          br(stlye="padding-top:5px;")
        b-col(sm="6" md="12")
          h5.justify-content-center About
          b-row
            b-col(sm="12" md="6")
              p.text-justify I'm Carlos E. Orama, alias SolAZDev. I'm an Indie Game Developer and a Web Designer. I specialize in Gameplay programing, Level Design, Web Front End and User Experience.
            b-col(sm="12" md="6")
              p.text-justify I work primarily with Blender, Unity, C# and Typescript. You can see some of my works in the Projects section, as well as 3D Renders and Levels I've done in the Portfolio section.
            b-col(cols="12")
              h5.justify-content-center Connect with me
              b-row(style="padding-bottom:20px;")
                b-col #[IconLink("https://github.com/SolAZDev/", "2x")]
                  //- a(href="https://github.com/SolAZDev/" target="_blank")
                    font-awesome-icon(:icon="['fab', 'github']" size="2x")
                b-col
                  a(href="https://twitter.com/SolAZDev" target="_blank")
                    font-awesome-icon(:icon="['fab', 'twitter']" size="2x")
                b-col
                  a(href="https://connect.unity.com/u/carlos-e-orama-de-jesus" target="_blank")
                    font-awesome-icon(:icon="['fab', 'unity']" size="2x")
                b-col
                  a(href="https://www.linkedin.com/in/solazdev/" target="_blank")
                    font-awesome-icon(:icon="['fab', 'linkedin']" size="2x")
                b-col
                  a(:href="'mailto:'+$data.email")
                    font-awesome-icon(:icon="['fas', 'at']" size="2x")
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as Resume from '../resume'
import * as SiteMediaFile from '../data'

@Component
export default class Home extends Vue {
  name = 'Home'
  metaInfo = {
    title: 'SolAZDev'
  }
  data() {
    return {
      email: Resume.default.email,
      reel: ""
    }
  }
  created() {
    this.$data.email = Resume.default.email;
    this.$data.reel = SiteMediaFile.default.reel;
    // document.title = "SolAZDev";
  }
}
</script>
<style lang="scss" scoped>
#aviIcon {
  width: 80px;
  height: auto;
}
.jumbotron {
  padding: 0.5em 2em;
  margin-bottom: 16px;
  border-radius: 0;
}
.embed-responsive {
  width: 79%;
  margin: auto;
}
a {
  color: $PipText;
  &:hover {
    color: $PipSel;
  }
}
.container{
  min-height: 83.35vh;
  max-height: 100vh;
}
.embed-responsive{
  @media (max-width:990px) {
    width:100%;
  }
}
</style>