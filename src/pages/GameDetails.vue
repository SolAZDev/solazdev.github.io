<template lang="pug">
q-page(padding v-if="game.name!=''")
  .header.fadeEdge.w-100
    .text-caption {{game.type}}
    .text-h4 {{game.name}}
    .text-caption {{game.description}}
  .row.q-col-gutter-sm.q-pt-sm.q-pb-sm
    .col-12.col-lg-7
      //- span Pictures Here
      q-carousel.text-white.shadow-1.rounded-borders(v-model='slide', swipeable, animated, navigation-icon='radio_button_unchecked', navigation, arrows, infinite, height="unset")
        q-carousel-slide.column.no-wrap(v-for="media in game.media" :key="media.description" :name="media.description")
          q-img(:src='media.url', :ratio='16/9', spinner-color='primary', spinner-size='82px' v-if="media.type==mType.Image")
          q-video(:src='media.url' :ratio="16/9" v-if="media.type==mType.Frame")
          .absolute-bottom.custom-caption.text-center
            .text-h5 {{media.description}}

    .col-12.col-lg-5
      .text-h6.text-center.fade-bottom-edge About
      .text-body1.text-justify {{game.about}}
      .text-h6.text-center.fade-bottom-edge Features
      ul #[li.text-body1.text-justify(v-for="feat in game.features") {{ feat }}]
      .text-h6.text-center.fade-bottom-edge More Information
      .row.text-body1
        .col-6.text-left Status
        .col-6.text-right {{game.status}}
        .col-6.text-left Genre
        .col-6.text-right {{game.genre}}
        .col-6.text-left Target Platforms
        .col-6.text-right {{game.platform}}
        .col-12.text-center(v-if="game.links!=null") Links
          .row
            .col(v-for="link in game.links")
              IconLink(:link="link.url" size="lg" :icon="link.icon" :name="link.name")
</template>
<script lang="ts">
import { GameInfo, MediaType } from "src/data/models";
import { Options, Vue } from "vue-class-component";
import * as GameData from "../data/games";
import IconLink from 'components/IconLink.vue'

@Options({components:{IconLink}})
export default class GameDetails extends Vue {
  publicPath = "/media/";
  game = {} as unknown as GameInfo;
  mType = MediaType;
  slide=""
  mounted() {
    this.game = GameData.default.Games.filter(
      (p) => p.id == this.$route.params.id.toString()
    )[0];
    this.slide=this.game.media[0].description;
  }
  get CarouselSize(){
    if(this.$q.screen.lt.sm){return "35vh"}
    if(this.$q.screen .lt.md){return "50vh"}
    if(this.$q.screen.gt.md){return "65vh"}
  }
}
</script>

<style lang="sass">
.header
  width: 100%

// .q-carousel
//   @media (max-width: $breakpoint-md-max)
//     min-height: 25vh
//   @media (min-width: $breakpoint-lg-min)
//     min-height: 60vh

</style>
