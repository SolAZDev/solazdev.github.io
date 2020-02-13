<template lang="pug">
    div
        b-container
            div.text-center
                h3 3D Renders and Art
            div.gallery
                div(v-for="render in images")
                  a(:href="render.file" target="_blank")
                    b-img(:src="imgUrl+render.file" fluid ).pics
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import *as SiteMedia from '../data'

@Component
export default class Portfolio3D extends Vue {
  data() {
    return {
      images: [],
      imgUrl: ''
    }
  }
  created() {
    this.$data.imgUrl = SiteMedia.default.assetsUrl;
    this.$data.images = SiteMedia.default.TDArt;
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  img {
    padding: 5px;
  }
  .pics {
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
  }
  .animation {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
}
</style>