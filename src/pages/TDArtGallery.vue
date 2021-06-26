<template lang="pug">
q-page(padding)
  .text-center
    .text-h6 Levels
    .text-subtitle2 Vaious Levels I have designed
  .q-container
    .row.q-col-gutter-md.justify-center
      .col-12.col-md-6.col-lg-4(v-for="render in renders")
        q-img(:src='"/media/"+render.thumb', spinner-color='primary', spinner-size='82px' @click="openViewer(render.id)", fit="cover")
          .absolute-bottom.text-subtitle1.text-center {{render.name}}

    //- .gallery
      .pics(v-for="render in renders")
        //- a(:href='"/media/"+renders.', target="_blank")

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
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import * as Data from 'src/data/3dArt'
import { RenderInfo } from 'src/data/models';

@Options({})
export default class TDArtGallery extends Vue {
  renders=[] as Array<unknown>
  renderInfo = {} as RenderInfo
  viewerOpen=false;
  publicPath="/media/"
  slide="";
  mounted() {
   this.renders=Data.default.TDArt;
  }
  openViewer(id: string){
    console.log(id);
    this.renderInfo=Data.default.TDArt.filter(r=>r.id==id)[0];
    this.slide=this.renderInfo.media[0].description;
    this.viewerOpen=true;
  }
}
</script>
<style lang="sass" scoped>
.viewer
    min-width: 95vw
    max-width: unset
</style>
