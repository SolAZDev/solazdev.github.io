<template lang="pug">
q-page(padding)
  .text-center
    .text-h6 Games
    .text-subtitle2 Games that I have worked on.
  .row.q-col-gutter-md.q-pa-md
    .col-6.col-lg-4(v-for="game in Games" :key="game.id")
      ThumbnailCard(:name="game.name" :link="'/games/'+game.id" :image="game.thumb")
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import * as GameData from '../data/games';
import ThumbnailCard from 'components/ThumbnailCard.vue';

@Options({components:{ThumbnailCard}})
export default class GamesMenu extends Vue {
  Games=GameData.default.Games
}
</script>
<style lang="sass"></style>
