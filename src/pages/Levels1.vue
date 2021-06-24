<template lang="pug">
q-page(padding)
  .q-pl-xl.q-pr-xl
    //- .row.q-col-gutter-sm
      .col-6.col-md-4(v-for="image in images")
        q-img(:src='"/media/"+image.file', spinner-color='primary', spinner-size='82px')
    .gallery
      .pics(v-for="image in images")
        q-img(:src='"/media/"+image.file', spinner-color='primary', spinner-size='82px')


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

<style lang="sass">
.gallery
	-webkit-column-count: 3
	-moz-column-count: 3
	column-count: 3
	-webkit-column-width: 33%
	-moz-column-width: 33%
	column-width: 33%
	img
		padding: 5px
.pics
	-webkit-transition: all 350ms ease
	transition: all 350ms ease
.animation
	-webkit-transform: scale(1)
	-ms-transform: scale(1)
	transform: scale(1)
</style>
