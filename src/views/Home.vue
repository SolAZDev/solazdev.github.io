<template lang="pug">
  div
    b-jumbotron
      h2 SolAZDev
      h5 Indie Game & Web Developer

    b-container
        iframe(width='720', height='480', src='https://www.youtube.com/embed/T7E0Ic_mhvU', frameborder='0', allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen)
        br(stlye="padding-top:5px;")
        h5.justify-content-center About
        br
        b-row
          b-col(cols="1")
          b-col
            p.text-wrap I'm Carlos E. Orama, alias SolAZDev. I'm an Indie Game Developer and a Web Designer. I specialize in Gameplay programing, Level Design, Web Front End and User Experience.
          b-col(cols="1")
          b-col
            p.text-warp I work primarily with Blender, Unity, C# and Typescript. You can see some of my works in the Projects section, as well as 3D Renders and Levels I've done in the Portfolio section.
          b-col(cols="1")
        h5.justify-content-center Connect with me
        b-container
        b-row
          b-col(cols="1")
          b-col
            a(href="https://github.com/SolAZDev/" target="_blank")
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
          b-col(cols="1")
        
      

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import *as Resume from '../resume'

@Component
export default class About extends Vue {
  data() {
    return {
      email: ""
    }
  }
  created() {
    this.$data.email = Resume.default.email;
  }
}
</script>
<style lang="scss" scoped>
.jumbotron {
  padding: 1em 2em;
  margin-bottom: 16px;
}
</style>