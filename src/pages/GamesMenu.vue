<template lang="pug">
q-page(padding)
  .container-lg
    .text-center
      .text-h6 Games
      .text-subtitle2 These are projects that I have worked on alone or collaboratively, including but not limited to, Game Jams, Peronsal Projects, and Employed projects*
    .row.q-col-gutter-md.q-pt-md.q-pb-md.justify-center
      .col-6.col-lg-4(v-for="game in Games" :key="game.id")
        ThumbnailCard(:name="game.name" :link="'/games/'+game.id" :image="game.thumb")
    .text-center * Employed projects that are in displayed, are shown with permission from the company and/or director
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
