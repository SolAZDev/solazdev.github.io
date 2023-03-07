<template lang="pug">
q-page(padding v-if="project.name!=''")
  .header.fadeEdge.w-100
    .text-caption {{project.type}}
    .text-h4 {{project.name}}
    .text-caption {{project.description}}
  .row.q-col-gutter-sm.q-pt-sm.q-pb-sm
    .col-12.col-lg-7
      q-carousel.text-white.shadow-1.rounded-borders(v-model='slide', swipeable, animated, navigation, padding, arrows, height="unset !important")
        q-carousel-slide.column.no-wrap.flex-center(v-for="media in project.media" :key="media.description" :name="media.description")
          q-img(:src='publicPath+media.url', fit="contain", spinner-color='primary', spinner-size='82px')
          .absolute-bottom.custom-caption.text-center
            .text-h6 {{media.description}}

    .col-12.col-lg-5
      .text-h6.text-center.fade-bottom-edge About
      .text-body1.text-justify {{project.about}}
      .text-center.text-h6(v-if="project.links!=null") Links
      .row
        .col.text-center(v-for="link in project.links") #[IconLink(:link="link.url" size="lg" :icon="link.icon" :name="link.name")]
</template>
<script lang="ts" setup>
import type { ProjectInfo } from 'src/data/models';
import { MediaType } from 'src/data/models';
import projects, * as projectData from '../data/projects';
import IconLink from 'components/IconLink.vue';
import { computed, onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRoute } from 'vue-router';

const $route = useRoute();
const $q = useQuasar();
const mType = MediaType;
const publicPath = ref('/media/');
const project = ref({} as unknown as ProjectInfo);
const slide = ref('');

onMounted(() => {
  project.value = projects.projects.filter(
    (p) => p.id == $route.params.id.toString()
  )[0];
  slide.value = project.value.media[0].description;
});

const CarouselSize = computed(() => {
  if ($q.screen.lt.sm) return '35vh';
  if ($q.screen.lt.md) return '50vh';
  if ($q.screen.gt.md) return '65vh';
  return '50vh'; //Just Default to this.
});
</script>
<style lang="sass">
.header
  width: 100%

.text-justify
  hyphens: none

.statList
  @media (min-width: $breakpoint-md-min)
    width: 80% !important
    .col-6
      padding: 0 16px
</style>
