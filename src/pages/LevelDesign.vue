<template lang="pug">
q-page(padding)
  .text-center
    .text-h6 Levels
    .text-subtitle2 Various Levels I have designed. Click to open the full version.
  .q-container
    .row.q-col-gutter-md.justify-center
      .col-12.col-md-6.col-lg-4(v-for="image in images")
        a(:href='"/media/"+image.file', target="_blank")
          q-img(:src='"/media/"+image.file', spinner-color='primary', spinner-size='82px' :ratio="16/9")
            .absolute-bottom.text-subtitle1.text-center(v-if="image.desc!=''") {{image.desc}}
</template>
<script lang="ts" setup>
import * as imgData from 'src/data/Levelsv1';
import { ref } from 'vue';
const images = ref(imgData.default.LevelDesign1);
</script>
