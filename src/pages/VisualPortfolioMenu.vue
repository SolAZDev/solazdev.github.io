<template lang="pug">
q-page(padding)
  .text-center.q-mb-sm
    .text-h5 Visual Works Portfolio
    .text-subtitle1 Levels Designed, 3D Renders & Game Models
  .container
    .row.q-col-gutter-md
      .col-12.col-md-6 #[ThumbnailCard(name="Level Design" link="/visuals/levels" :image="LevelDesignThumbnail")]
      .col-12.col-md-6 #[ThumbnailCard(name="3D Models & Renders" link="/visuals/renders" :image="RenderThumbnail")]
</template>
<script lang="ts" setup>
import ThumbnailCard from 'components/ThumbnailCard.vue';
import { computed } from 'vue';
import * as TData from '../data/thumbnails';

const LevelDesignThumbnail = computed(() => {
      return '/media/'+TData.default.LevelDesign[
        Math.floor(Math.random() * TData.default.LevelDesign.length)
      ];
    });
    const RenderThumbnail = computed(() => {
      return '/media/'+TData.default.Renders[
        Math.floor(Math.random() * TData.default.Renders.length)
  ];
});
</script>
