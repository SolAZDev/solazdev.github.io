<template lang="pug">
q-page
  .column.text-center.q-gutter-y-sm
    div(v-if="!isItGDC || $q.screen.gt.md")
      .text-h5 SolAZDev
      .text-subtitle1 Passionate Game & Web Developer

      .videoShrinkable.q-mx-auto.q-pa-md-md(v-if="$q.screen.gt.sm")
        q-video(:src="Data.reel" :ratio="16/9")

      q-video(:src="Data.reel" :ratio="16/9" v-if="$q.screen.lt.md")

      .q-mx-xs-md
        .text-h6 About
        .q-mx-auto.desktopShrinkable.text-body2.text-justify.
          Welcome! I'm Carlos E. Orama, alias SolAZDev. I'm a Game Developer, and a Web and Software Developer, who has an innate passion for the craft, and is eager to learn, innovate, grow and collaborate.
          I've specialized in field such as Gameplay Programming, Level Design, Front End Development, Mobile Applications, Server Communication, and more. My tools of choice include, but are not limited to, proven & battle tested entries,
          such as Blender, Unity3D and VueJS. You can learn more about my projects in the Games section, and more about my tools and experience in the Resume Tab.

      .text-h6 Connect
      .row.q-mx-md-auto.q-mx-xs-md.videoShrinkable.justify-between.q-pa-md-md
        IconLink(link="http://github.com/SolAZDev", icon="fab fa-github" size="lg")
        IconLink(link="https://twitter.com/SolAZDev", icon="fab fa-twitter" size="lg")
        IconLink(link="https://solazdev.itch.io/", icon="fab fa-itch-io" size="lg")
        IconLink(link="https://www.linkedin.com/in/solazdev/", icon="fab fa-linkedin" size="lg")
        IconLink(:link="'mailto:'+Data.email", icon="fas fa-at" size="lg")

    .q-my-md.q-mx-md
      GDCCard(v-if="isItGDC || $q.screen.lt.lg")

  GamesMenu(style="min-height: 0px")
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import IconLink from '../components/IconLink.vue';
import * as info from '../data/data';
import GamesMenu from '../pages/GamesMenu.vue';
import GDCCard from 'src/components/GDCCard.vue';
const Data = ref(info.default);

const isItGDC = computed(() => {
  const date = new Date();
  return date.getMonth() + 1 == 3 && date.getDate() >= 9 && date.getDate() < 29; 
});
</script>
<style lang="sass" scoped>
.text-justify
  hyphens: none
.desktopShrinkable
  @media (min-width: $breakpoint-md-min)
    width: 75vw

.videoShrinkable
  @media (min-width: $breakpoint-md-min)
    width: 55vw

.mobileButtonLinks
  @media (max-width: $breakpoint-md-min)
    width: 80vw

</style>
