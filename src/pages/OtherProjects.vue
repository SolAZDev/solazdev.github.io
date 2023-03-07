<template lang="pug">
q-page(padding)
  .container-lg
    .text-center
      .text-h6 Other Projects
      .text-subtitle2 Other Non-Game related projects that I have worked on.
    .row.q-col-gutter-md.justify-center
      .col-12.col-md-6.col-lg-4(v-for="project in Projects" :key="project.id")
        ThumbnailCard(:name="project.name" :link="'/other/'+project.id" :image="'/media/'+project.thumb")
</template>
<script lang="ts" setup>
import * as ProjectsData from '../data/projects';
import ThumbnailCard from 'components/ThumbnailCard.vue';

const Projects = ProjectsData.default.projects;
</script>
