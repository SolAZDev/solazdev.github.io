<template lang="pug">
.container
  .p-mx-2.p-mx-md-3
    .p-text-center
        h3 Visual Works Portfolio
        h5 Levels Designed & 3D Renders and Game Models
    .p-grid
          .p-md-6.p-lg-4(v-for="game in Games" :key="game.id") 
            ThumbnailCard(:name="game.name" :link="'/games/'+game.id" :image="game.thumb")
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ThumbnailCard from '../components/ThumbnailCard.vue';
import * as GameData from '../data/games';
@Options({
  components:{ThumbnailCard}
})
export default class Games extends Vue{
    Games=GameData.default.Games

}
</script>