<template lang="pug">
  div
      b-container
        div.text-center
            h3 Projects
            span These are projects that I have worked on alone or collaboratively, including but not limited to, Game Jams, Peronsal Projects, and Employed projects*
        br
      b-container
        b-row
          b-col(v-for="project in projects" sm="12" md="6" lg="4" style="padding:5px;")
            //- router-link(to="/" + {{project.id}})
            router-link(:to="'/projects/'+project.id")
              b-card(:title="project.name" :img-src="imgUrl+project.thumb" img-bottom bg-variant="dark")
      b-container.bottom-row.text-center
        small * Employed projects that are in displayed, are shown with permission from the company and/or director
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import *as SiteMedia from '../data'

@Component
export default class Projects extends Vue {
  name = 'Projects'
  metaInfo = {
    title: "SolAZDev - Projects"
  }
  data() {
    return {
      projects: undefined,
      imgUrl: ''
    }
  }
  created() {
    this.$data.projects = SiteMedia.default.Projects;
    this.$data.imgUrl = SiteMedia.default.assetsUrl;
    // alert(this.$data.json[0])
  }
}
</script>
<style lang="scss" scoped>
.card-title {
  font-size: 1em;
  margin-bottom: 0;
}
.card {
  @include aLink;
}
.card-body {
  padding: 0.5em;
}
.card-img-bottom {
  // min-width: 348px;
  // min-height: 276px;
  width: 100%;
  height: auto;
}
</style>