<template lang="pug" >
q-card.text-center.q-mx-auto.cardBorder(style="border-radius: 16px")
  q-card-section.q-gutter-y-xs
    .text-h4.text-primary Carlos E. Orama
    div
      .text-subtitle2 Gameplay & Systems Programmer 
      .text-subtitle2 Indie Game Developer
      .text-subtitle2 7 Years of Experience
  q-card-section
    q-avatar.cardBorder(size='40vw')
        img(src="~assets/propic.jpg")
  q-card-section
    .text-subtitle2 Developer of The Dreamer's Princess
    .text-subtitle2 Linux Enthusiast, Keto Man
  q-card-section.row.q-mx-auto.justify-around.q-px-md
    IconButton(link="http://github.com/SolAZDev", icon="fab fa-github" size="4vw")
    IconButton(link="https://twitter.com/SolAZDev", icon="fab fa-twitter" size="4vw")
    IconButton(link="https://solazdev.itch.io/", icon="fab fa-itch-io" size="4vw")
    IconButton(link="https://www.linkedin.com/in/solazdev/", icon="fab fa-linkedin" size="4vw")
    IconButton(:link="'mailto:'+Data.email", icon="fas fa-at" size="4vw")
  q-card-section.q-px-lg
    q-video(:src="Data.reel" :ratio="16/9" v-if="$q.screen.lt.md" style="min-height:60vw")
</template>
<script setup lang="ts">
import { ref } from 'vue';
import IconButton from 'src/components/IconButton.vue';
import * as info from '../data/data';
const Data = ref(info.default);
</script>
<style lang="sass" scoped>
.text-justify
  hyphens: none

.q-video
  border-radius: 8px
.cardBorder
  border-color: transparentize($primary, .5) !important
  box-shadow: 1px 1px 3px 3px transparentize($primary, .2), -1px -1px 3px 3px transparentize($primary, .2)
</style>
