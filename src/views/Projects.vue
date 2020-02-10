<template lang="pug">
  div
      b-container
        div.text-center
            h3 Projects
            span These are projects that I have worked on alone or collaboratively
        br
      b-container
        b-row
          b-col(v-for="project in projects" sm="12" md="4" style="padding:5px;")
            //- router-link(to="/" + {{project.id}})
            router-link(:to="'/projects/'+project.id")
              b-card(:title="project.name" :img-src="project.thumb" img-bottom)
                b-card-text
                  //- img(:src="project.thumb" width="308" height="244")
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import *as SiteMedia from '../data'

@Component
export default class Projects extends Vue {
  data() {
    return {
      projects: undefined
    }
  }
  @Prop() private msg!: string;
  created() {
    this.$data.projects = SiteMedia.default.Projects
    // alert(this.$data.json[0])
  }
}
</script>
<style lang="scss" scoped>
.card-title {
  font-size: 1em;
  margin-bottom: 0;
}
.card-body {
  padding: 0.5em;
}
.card-img-bottom {
  width: 100%;
  height: auto;
}
</style>