<template lang="pug">
    b-container
      div(style="text-align: center")
          h3 Portfolios
          span These are images of works Ive done personally made
      b-row(v-if="SiteMedia!==undefined")
        b-col
          // b-card(img-src="SiteMedia.ModelArt[TDImg]")
          b-card
            b-card-text
              img(:src="SiteMedia.ModelArt[TDImg].file")
            b-card-text Level Design
        b-col
          b-card
            b-card-text
              img(:src="SiteMedia.LevelDesign[TDImg].file")
            b-card-text 3D Art
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as SiteMediaFile from '../data'

@Component
export default class Portfolio extends Vue {
  data() {
    return {
      SiteMedia: undefined,
      TDImg: 0,
      LDImg: 0
    }
  }
  @Prop() private msg!: string;
  created() {
    this.$data.SiteMedia = SiteMediaFile.default
  }
  destroyed() {
    this.$data.SiteMedia = undefined
  }
}
</script>