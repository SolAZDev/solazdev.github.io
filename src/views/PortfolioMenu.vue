<template lang="pug">
.container
  .p-mx-2.p-mx-md-3
      .p-text-center
          h3 Visual Works Portfolio
          h5 Levels Designed & 3D Renders and Game Models
      .p-grid
          .p-md-6 #[ThumbnailCard(name="Level Design" link="/portfolio/levels" :image="LevelDesignThumbnail")]
          .p-md-6 #[ThumbnailCard(name="3D Works" link="/portfolio/renders" :image="RenderThumbnail")]
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