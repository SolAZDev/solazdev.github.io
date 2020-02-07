<template lang="pug">
    div
        b-container-fluid
            div.text-center
                h3 3D Art and   Renders
            b-row
                b-col(v-for="render in images")
                  b-card
                    b-card-text
                      img(:src="render.file")

</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import *as SiteMedia from '../data'

@Component
export default class Portfolio3D extends Vue {
  data() {
    return {
      images: []
    }
  }
  created() {
    this.$data.images = SiteMedia.default.TDArt;
  }
}
</script>