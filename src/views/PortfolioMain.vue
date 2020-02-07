<template lang="pug">
    b-container
      div(style="text-align: center")
          h3 Portfolios
          span These are images of works Ive done personally made
      b-row(v-if="SiteMedia!==undefined")
        router-link(:to="'/mapportfolio'")
          b-col
            b-card
              b-card-text
                img.catImg(:src="SiteMedia.Thumbnails['EBRMini']")
              b-card-text Level Design
        router-link(:to="'/3Dporfolio'")
          b-col
            b-card
              b-card-text
                img.catImg(:src="SiteMedia.TDArt[0].file")
              b-card-text 3D Art
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as SiteMediaFile from '../data'

@Component
export default class Portfolio extends Vue {
  data() {
    return {
      SiteMedia: undefined
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
<style lang="scss">
$refSize: 50%;
.catImg {
  max-height: $refSize;
  max-width: $refSize;
  max-height: $refSize;
  max-width: $refSize;
}
</style>