<template lang="pug">
q-page(padding)
  .text-center.q-mb-sm
    .text-h5 Visual Works Portfolio
    .text-subtitle1 Levels Designed, 3D Renders & Game Models
  .container
    .row.q-col-gutter-md
      .col-12.col-md-6 #[ThumbnailCard(name="Level Design" link="/visuals/levels" :image="LevelDesignThumbnail")]
      .col-12.col-md-6 #[ThumbnailCard(name="3D Models & Renders" link="/renders" :image="RenderThumbnail")]
</template>

<script lang="ts">
// import { Component, Vue } from 'vue-property-decorator'
import ThumbnailCard from 'components/ThumbnailCard.vue';
import * as TData from '../data/thumbnails';
import { Options, Vue } from 'vue-class-component';

@Options({
  components:{ThumbnailCard}
})
export default class VisualPortfolioMenu extends Vue {
  get LevelDesignThumbnail(){
    return TData.default.LevelDesign[(Math.floor(Math.random()*TData.default.LevelDesign.length))]
  }
  get RenderThumbnail(){
    return TData.default.Renders[(Math.floor(Math.random()*TData.default.Renders.length))]
  }
}
</script>

<style lang="sass"></style>
