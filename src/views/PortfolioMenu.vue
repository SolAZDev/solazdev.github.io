<template lang="pug">
.container
  .px-2.px-md-3
      .text-center
          h3 Visual Works Portfolio
          h5 Levels Designed & 3D Renders and Game Models
      .row
          .col-md-6 #[Thumbn  ailCard(name="Level Design" link="/portfolio/levels" :image="LevelDesignThumbnail")]
          .col-md-6 #[ThumbnailCard(name="3D Works" link="/portfolio/renders" :image="RenderThumbnail")]
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ThumbnailCard from '../components/ThumbnailCard.vue';
import * as TData from '../data/thumbnails';
@Options({
  components:{ThumbnailCard}
})
export default class PortfolioMenu extends Vue{
  get LevelDesignThumbnail(){
    return TData.default.LevelDesign[(Math.floor(Math.random()*TData.default.LevelDesign.length))]
  }
  get RenderThumbnail(){
    return TData.default.Renders[(Math.floor(Math.random()*TData.default.Renders.length))]
  }
}
</script>