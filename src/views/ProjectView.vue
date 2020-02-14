<template lang="pug">
  div
      div.container-fluid
        div
          h2 {{$data.project.name}}
        b-row

          b-col(sm="12" md="8")
            b-carousel#ScreenshotCarousel(:interval='4000' controls='' indicators='0' height="50%")
              b-carousel-slide(v-for="img in $data.project.images" :text="img.desc" :img-src="imgUrl+img.file")

          b-col(sm="12" md="4")
            b About
            p.text-left.text-wrap {{$data.project.about}}
            b Features
            ul.text-left
              li(v-for="feat in $data.project.features") {{feat}}
            b Info
            table(style="width:100%")
              tr
                td.text-left
                  b Status
                td.text-right
                  div {{$data.project.status}}
              tr
                td.text-left
                  b Genre
                td.text-right
                  div {{$data.project.genre}}
              tr
                td.text-left
                  b Platforms
                td.text-right
                  div {{$data.project.platform}}
            b Links
            br
            a(v-for="link in $data.project.links" :href="link.url" style="padding:5px;" target="_blank") {{link.name}}
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import *as SiteMedia from '../data'

@Component
export default class ProjectView extends Vue {
  data() {
    return {
      project: undefined,
      imgUrl: ''
    }
  }
  created() {
    this.$data.project = SiteMedia.default.Projects.filter(p => p.id === this.$route.params.id)[0];
    this.$data.imgUrl = SiteMedia.default.assetsUrl;
    document.title = "SolAZDev - " + this.$data.project.name;
    // alert(this.$data.json[0])

  }
}
</script>
<style lang="scss">
a {
  @include aLink;
}
</style>