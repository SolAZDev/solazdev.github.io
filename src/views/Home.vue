<template lang='pug'>
.p-mx-2.p-mx-lg-6
  .p-fluid
    .p-text-center
      h2 SolAZDev
      h5 Indie Game & Web Developer
    .p-grid(v-if="newStyle")
      .p-lg-8
        .embed-responsive.embed-responsive-16by9
          iframe(:src="Data.reel", allow='autoplay; encrypted-media; picture-in-picture', allowfullscreen).embed-responsive-item
      .p-lg-4
        h3.p-text-center About
        p.p-text-justify.about {{about[0]}}
        p.p-text-justify.about {{about[0]}}
        br
        h3.p-text-center Connect
        .p-grid.iconList
          .p-col #[IconLink(link="http://github.com/SolAZDev", :icon="['fab','github']" size="2x")]
          .p-col #[IconLink(link="https://solazdev.itch.io/", :icon="['fab','itch-io']" size="2x")]
          .p-col #[IconLink(link="https://twitter.com/SolAZDev", :icon="['fab','twitter']" size="2x")]
          .p-col #[IconLink(link="https://www.linkedin.com/in/solazdev/", :icon="['fab','linkedin']" size="2x")]
          .p-col #[IconLink(:link="'mailto:'+Data.email", :icon="['fas','at']" size="2x")]
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IconLink from '../components/IconLink.vue';
import * as info from "../data/data"

@Options({
  components: {
    IconLink
  },
})
export default class Home extends Vue {
  newStyle=true;
  Data = info.default;
  about = [
    "Hello! I'm Carlos  E. Orama, pen name; SolAZDev. I'm an Indie Game Developer and a Web Designer, with a passion for learning new technologies. I've specialized in, but not limited to, Gameplay Programming, Level Design for Games, Front End, Responsive Design, Server Communications for Web",
    "My tools of choice include, but are not limited to several proven tools & frameworks such as; Blender, Unity3D, NodeJS, Angular, VueJS and more. You can see some of my works in the Games and Other Works section, as well as some of visual work on the Portfolio section"
    
  ]
}
</script>
<style lang="scss">
@import "../assets/theme.scss";
h2{margin-bottom: 0;}
h5{margin-top: 0;}
.about{
  font-size: 1.25rem;
}
.iconList{
  a{
    color: $textSecondaryColor;
  }
  color: $textSecondaryColor;
  text-align: center;
}
// iframe{
//   width: 100%;
//   height: auto;
//   margin:auto;
// }
</style>
