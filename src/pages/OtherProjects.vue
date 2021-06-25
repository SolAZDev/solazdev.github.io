<template lang="pug">
q-page(padding)
  .container
    .text-center
      .text-h6 Other Projects
      .text-subtitle2 Other Non-Game related projects that I have worked on.
    .row.q-col-gutter-md.justify-center
      .col-6.col-lg-4(v-for="project in Projects" :key="project.id")
        ThumbnailCard(:name="project.name" :link="'/other/'+project.id" :image="project.thumb")
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import * as ProjectsData from '../data/projects';
import ThumbnailCard from 'components/ThumbnailCard.vue';

@Options({components:{ThumbnailCard}})
export default class OtherProjects extends Vue {
  Projects=ProjectsData.default.projects;
}
</script>
<style lang="sass"></style>
