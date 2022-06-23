<template lang="pug">
q-page(padding)
  .text-center
    //- .text-h5 SolAZDev
    //- .text-subtitle1 Indie Game & Web Developer
    //- br
    .row.q-col-gutter-md
      .col-12.col-md-6.q-mx-auto
        q-video(:src="Data.reel" :ratio="16/9")
      .col-12.row
        .col-12.text-h6 About
        .col-12.col-md-8.text-justify.text-body1.q-mx-auto.
          Welcome! I'm Carlos E. Orama, alias SolAZDev. I'm a Game Developer, and a Web and Software Developer, who has an innate passion for the craft, and is eager to learn, innovate, grow and collaborate.
          I've specialized in field such as Gameplay Programming, Level Design, Front End Development, Mobile Applications, Server Communication, and more. My tools of choice include, but are not limited to, proven & battle tested entries,
          such as Blender, Unity3D and VueJS. You can learn more about my projects in the Games section, and more about my tools and experience in the Resume Tab.
        //- .row.justify-around
          p.col-12.col-md-5.q-px-md.text-justify.text-body1 {{ about[0] }}
          p.col-12.col-md-5.q-px-md.text-justify.text-body1 {{ about[1] }}
        .col-12.q-mt-xl
          .text-h6.text-center Connect
            .row.iconList
              .col #[IconLink(link="http://github.com/SolAZDev", icon="fab fa-github" size="xl")]
              .col #[IconLink(link="https://solazdev.itch.io/", icon="fab fa-itch-io" size="xl")]
              .col #[IconLink(link="https://twitter.com/SolAZDev", icon="fab fa-twitter" size="xl")]
              .col #[IconLink(link="https://www.linkedin.com/in/solazdev/", icon="fab fa-linkedin" size="xl")]
              .col #[IconLink(:link="'mailto:'+Data.email", icon="fas fa-at" size="xl")]
    
  GamesMenu

</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import IconLink from "../components/IconLink.vue";
import * as info from "../data/data";
import GamesMenu from "../pages/GamesMenu.vue";
@Options({
  components: { IconLink, GamesMenu },
})
export default class PageIndex extends Vue {
  Data = info.default;
  about = [
    "Hello! I'm Carlos  E. Orama, pen name; SolAZDev. I'm an Indie Game Developer and a Web Designer, with a passion for learning new technologies. I've specialized in, but not limited to, Gameplay Programming, Level Design for Games, Front End, Responsive Design, Server Communications for Web",
    "My tools of choice include, but are not limited to several proven tools & frameworks such as; Blender, Unity3D, NodeJS, Angular, VueJS and more. You can see some of my works in the Games and Other Works section, as well as some of visual work on the Portfolio section",
  ];
}
</script>
