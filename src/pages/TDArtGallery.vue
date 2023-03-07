<template lang="pug">
q-page(padding)
  .text-center
    .text-h6 3D Works
    .text-subtitle2 3D Models and Renders I have designed. Click for details.
  .q-container
    .row.q-col-gutter-md.justify-center
      .col-12.col-md-6.col-lg-4(v-for="render in renders")
        q-img(:src='"/media/"+render.thumb', spinner-color='primary', spinner-size='82px' @click="openViewer(render.id)", fit="cover")
          .absolute-bottom.text-subtitle1.text-center {{render.name}}

q-dialog(v-model="viewerOpen" full-width :full-height="$q.screen.lt.md")
  q-card.q-pb-none
    q-card-section.row.items-center.q-pb-none
      .text-left
        .text-caption {{renderInfo.type}}
        .text-h4 {{renderInfo.name}}
        .text-caption(v-if="renderInfo.description!=''") {{renderInfo.description}}
      q-space
      q-btn(icon="close" flat round dense v-close-popup)
    q-card-section.row.q-col-gutter-md
      .col-12.col-lg-7.q-pb-md
        q-carousel.text-white.shadow-1.rounded-borders(v-model='slide', swipeable, animated, navigation, padding, arrows, infinite, autoplay, height="unset !important")
          q-carousel-slide.q-pa-none.column.no-wrap.flex-center(v-for="media in renderInfo.media" :key="media.description" :name="media.description")
            q-img.q-pa-none(:src='publicPath+media.url', fit="cover", spinner-color='primary', spinner-size='82px')
            .absolute-bottom.custom-caption.text-center
              .text-h6 {{media.description}}
      .col-12.col-lg-5
        .text-h6.text-center.fade-bottom-edge About
        .text-body1.text-justify {{renderInfo.about}}
        .text-h6.text-center.fade-bottom-edge(v-if="renderInfo.features.length>0") More Information
        ul.q-pl-md(v-if="renderInfo.features.length>0") #[li.text-body1.text-justify(v-for="feat in renderInfo.features") {{ feat }}]
</template>
<script lang="ts" setup>
import type { RenderInfo } from 'src/data/models';
import * as Data from 'src/data/3dArt';
import { ref } from 'vue';

const renders = ref(Data.default.TDArt);
const renderInfo = ref({} as RenderInfo);
const viewerOpen = ref(false);
const publicPath = ref('/media/');
const slide = ref('');

function openViewer(id: string) {
  console.log(id);
  renderInfo.value = Data.default.TDArt.filter((r) => r.id == id)[0];
  slide.value = renderInfo.value.media[0].description;
  viewerOpen.value = true;
}
</script>
<style lang="sass" scoped>
.viewer
    min-width: 95vw
    max-width: unset
</style>
