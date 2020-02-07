<template lang="pug">
  div
    b-jumbotron
      h2 SolAZDev
      h5 Indie Game & Web Developer
    b-container
      b-col
        iframe(width='560', height='315', src='https://www.youtube.com/embed/T7E0Ic_mhvU', frameborder='0', allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen)
      b-col
        h5.justify-content-center Hello and Welcome!
        br
        p.text-wrap I'm Carlos E. Orama, alias SolAZDev. I'm an Indie Game Developer and a Web Designer. I also occassionally do some software development.
        p.text-warp I work primarily with VS Code, Blender, and Unity. Feel free to check the Projects and Portfolio page, if you wish to contact me, check out the resume. 
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
