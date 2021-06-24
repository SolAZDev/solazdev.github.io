<template lang="pug">
q-page(padding v-if="game.name!=''")
  .header.fadeEdge.w-100
    //- small.er {{game.type}}
    .text-caption {{game.type}}
    .text-h4 {{game.name}}
    //- small {{game.description}}
    .text-caption {{game.description}}
  .row.q-col-gutter-sm.q-pt-sm.q-pb-sm
    .col-12.col-lg-7
      //- span Pictures Here
      q-carousel.text-white.shadow-1.rounded-borders(v-model='slide', transition-prev='jump-right', transition-next='jump-left', swipeable, animated, control-color='white', prev-icon='arrow_left', next-icon='arrow_right', navigation-icon='radio_button_unchecked', navigation, padding, arrows)
        q-carousel-slide.column.no-wrap.flex-center(v-for="media in game.media" :key="media.description" :name="media.description")
          .text-center {{media.type==mType.Image}}
          q-img(:src='publicPath+media.url', :ratio='16/9', spinner-color='primary', spinner-size='82px')
          q-video(:src='media.url' :ratio="16/9")
          .absolute-bottom.custom-caption.text-center #[.text-h6 {{media.description}}]

    .col-12.col-lg-5
      .text-h6.text-center.fade-bottom-edge About
      .text-body1.text-justify {{game.about}}
      .text-h6.text-center.fade-bottom-edge Features
      ul #[li.text-body2.text-justify(v-for="feat in game.features") {{ feat }}]
      .text-h6.text-center.fade-bottom-edge More Information
      .row
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
}
</script>

<style lang="sass">
.header
  width: 100%

.text-h6
</style>
