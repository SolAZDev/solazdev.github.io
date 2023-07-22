<template lang="pug">
q-page(padding v-if="game.name!=''")
  .header.fadeEdge.w-100
    .text-caption {{game.type}}
    .text-h4 {{game.name}}
    .text-caption {{game.description}}
  .row.q-col-gutter-sm.q-py-sm
    .col-12.col-lg-7
      q-carousel.text-white.shadow-1.rounded-borders(v-model='slide', swipeable, animated, navigation-icon='radio_button_unchecked', navigation, arrows, infinite, height="unset")
        q-carousel-slide.column.no-wrap(v-for="media in game.media" :key="media.description" :name="media.description")
          q-img(:src='media.url', :ratio='16/9', spinner-color='primary', spinner-size='82px' v-if="media.type==mType.Image")
          q-video(:src='media.url' :ratio="16/9" v-if="media.type==mType.Frame")
          .absolute-bottom.custom-caption.text-center
            .text-h5 {{media.description}}

    .col-12.col-lg-5.column.q-gutter-y-sm.q-px-xs-md.q-px-md-sm
      .text-h6.text-center.fade-bottom-edge About
      p.text-body1.text-justify {{game.about}}
      .text-h6.text-center.fade-bottom-edge Features
      ul #[li.text-body1.text-justify(v-for="feat in game.features") {{ feat }}]
      .text-h6.text-center.fade-bottom-edge(v-if="game.devInfo") Development Information
      ul(v-if="game.devInfo") #[li.text-body1.text-justify(v-for="info in game.devInfo") {{ info }}]
      .text-h6.text-center.fade-bottom-edge More Information
      .text-body1 Status : {{game.status}}
      .text-body1 Genre : {{game.genre}}
      .text-body1 Target Platforms : {{game.platform}}
      .text-h6.text-center(v-if="game.links!=null") Links
        .row.justify-center
          .col(v-for="link in game.links")
            IconLink(:link="link.url" size="md" :icon="link.icon" :name="link.name")
</template>
<script lang="ts" setup>
import type { GameInfo } from 'src/data/models';
import { MediaType } from 'src/data/models';
import * as GameData from '../data/games';
import IconLink from 'components/IconLink.vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';

const $route = useRoute();
const $q = useQuasar();
const mType = MediaType;
const publicPath = ref('/media/');
const game = ref({} as unknown as GameInfo);
const slide = ref('');

onMounted(() => {
  game.value = GameData.default.Games.filter(
    (p) => p.id == $route.params.id.toString()
  )[0];
  slide.value = game.value.media[0].description;
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
