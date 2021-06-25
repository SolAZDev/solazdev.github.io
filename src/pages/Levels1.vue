<template lang="pug">
q-page(padding)
  .text-center
    .text-h6 Levels
    .text-subtitle2 Vaious Levels I have designed
  .q-container
    //- .row.q-col-gutter-sm
      .col-6.col-md-4(v-for="image in images")
        q-img(:src='"/media/"+image.file', spinner-color='primary', spinner-size='82px')
    .gallery
      .pics(v-for="image in images")
        a(:href='"/media/"+image.file', target="_blank")
          q-img(:src='"/media/"+image.file', spinner-color='primary', spinner-size='82px')
            .absolute-bottom.text-subtitle1.text-center(v-if="image.desc!=''") {{image.desc}}


</template>

<script lang="ts">
import * as imgData from 'src/data/Levelsv1'
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Levels1 extends Vue {
  images=[] as Array<unknown>
  mounted() {
   this.images=imgData.default.LevelDesign1;
  }
}
</script>
