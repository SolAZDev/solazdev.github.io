<template lang="pug">
  div
    b-jumbotron
      h2 SolAZDev
      h5 Indie Game & Web Developer
      b-container
        b-row
          b-col
            a(href="https://github.com/SolAZDev/") Github
          b-col Twit
          b-col Twit

    b-container
      b-row.h-100
        b-col(md="12" lg="6")
          iframe(width='100%', height='315', src='https://www.youtube.com/embed/T7E0Ic_mhvU', frameborder='0', allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen)
        b-col(md="12" lg="6")
          h5.justify-content-center Hello and Welcome!
          br
          p.text-wrap I'm Carlos E. Orama, alias SolAZDev. I'm an Indie Game Developer and a Web Designer. I specialize in Gameplay programing, Level Design, Web Front End and User Experience.
          p.text-warp I work primarily with Blender, Unity, C# and Typescript. You can see some of my works in the Projects section, as well as 3D Renders and Levels I've done in the Portfolio section.
      

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import *as SiteMedia from '../data'

@Component
export default class PortfolioLevels extends Vue {
  data() {
    return {
      images: []
    }
  }
  created() {
    this.$data.images = SiteMedia.default.LevelDesign;
  }
}
</script>

