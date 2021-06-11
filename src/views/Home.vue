<template lang='pug'>
.p-mx-2.p-mx-lg-6
  .p-text-center
    h2 SolAZDev
    h5 Indie Game & Web Developer
  .p-grid(v-if="newStyle")
    .p-lg-6
      .embed-responsive.embed-responsive-16by9
        iframe(:src="reel", allow='autoplay; encrypted-media; picture-in-picture', allowfullscreen).embed-responsive-item
    .p-lg-6
      h3.p-text-center About
      p.p-text-justify {{about[0]}}
      p.p-text-justify {{about[0]}}


  //- <div class="home">
  //-   <img alt="Vue logo" src="../assets/logo.png">
  //-   <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  //- </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Home extends Vue {
  newStyle=true;
  reel = "https://www.youtube.com/embed/T7E0Ic_mhvU"
  about = [
    "Hello! I'm Carlos E. Orama, pen name; SolAZDev. I'm an Indie Game Developer and a Web Designer, with a passion for learning new technologies. I've specialized in, but not limited to, Gameplay Programming, Level Design for Games, Front End, Responsive Design, Server Communications for Web",
    "My tools of choice include, but are not limited to several proven tools & frameworks such as; Blender, Unity3D, NodeJS, Angular, VueJS and more. You can see some of my works in the Games and Other Works section, as well as some of visual work on the Portfolio section"
    
  ]
}
</script>
<style lang="scss">
h2{margin-bottom: 0;}
h5{margin-top: 0;}
// iframe{
//   width: 100%;
//   height: auto;
//   margin:auto;
// }
</style>
