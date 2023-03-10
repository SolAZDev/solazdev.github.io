<template lang="pug">
q-page(padding)
  .container-lg
    .text-center
      .text-h6 Games
      //- .text-subtitle2 These are projects that I have worked on alone or collaboratively, including but not limited to, Game Jams, Personal Projects, and Employed projects*
      //- .text-subtitle2 These are projects that I have worked on. These include, but are not limited to; Personal Projects, Employed projects*
    .row.q-col-gutter-md.q-pt-md.q-pb-md.justify-center
      .col-12.col-md-6.col-lg-4(v-for="game in Games" :key="game.id")
        //- ThumbnailCard(name="game.name" link="'/games/" image="https://placeimg.com/500/300/nature")

        ThumbnailCard(:name="game.name" :link="'/games/'+game.id" :image="'/media/'+game.thumb")
    .text-center * Employed projects that are in displayed, are shown with permission from the company and/or director
</template>
<script lang="ts" setup>
import * as GameData from '../data/games';
import ThumbnailCard from 'components/ThumbnailCard.vue';
import { ref } from 'vue';

const Games = ref(GameData.default.Games);
</script>
