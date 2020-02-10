<template lang="pug">
    b-container
      div(style="text-align: center")
          h3 Portfolios
          span These are images of works Ive done personally made
      b-row(v-if="SiteMedia!==undefined")
        b-col(sm="12" lg="4")
          router-link(:to="'/mapportfolio'")
            b-card(title="Level Design" :img-src="SiteMedia.Thumbnails['Map1']")
        b-col(sm="12" lg="4")
          router-link(:to="'/3Dporfolio'")
            b-card(title="3D Art" :img-src="SiteMedia.Thumbnails['NightStroll'].file")
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
      LvImg: 0
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
$refSize: 290;
.catImg {
  width: 300px;
  height: 300px;
}
</style>
<style lang="scss" scoped>
.card-title {
  font-size: 1em;
  margin-bottom: 0;
}
.card-body {
  padding: 0.5em;
}
.card-img {
  width: 100%;
  height: auto;
}
</style>