<template lang="pug">
  div
      b-container
        div.text-center
            h3 Projects
            span These are projects that I have worked on alone or collaboratively
        br
      b-container
        b-row(v-if="projects!==undefined")
          b-col(v-for="project in projects" sm="12" md="4")
            b-card
              b-card-text
                img(:src="project.thumb" width="100%")
              b-card-text {{project.name}}
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import  *as SiteMedia from '../data'

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
    alert(this.$data.json[0])
  }
}
</script>