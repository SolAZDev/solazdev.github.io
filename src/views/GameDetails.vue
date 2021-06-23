<template lang="pug">
.px-2.px-md-3.py-2(v-if="game!=null")
    .header.fadeEdge
        small.er {{game.type}}
        h2 {{game.name}}
        small {{game.description}}
    .row.py-1
        .col-md-12.col-lg-7 
            Galleria(:value="game.media" :circular="true" :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true")
                template(#item="slotProps")
                    img(v-if="slotProps.item.type==mType.Image", :src="publicPath+slotProps.item.url")
                    .embed-responsive.embed-responsive-16by9(v-if="slotProps.item.type==mType.Frame")
                        iframe(:src="slotProps.item.url", allow='autoplay; encrypted-media; picture -in-picture', allowfullscreen).embed-responsive-item
                    
                template(#caption="{item}")
                    h5.text-center {{item.description}}

        .col-md-12.col-lg-5
            .p-mx-md-3.text-justify
                h4 About
                p.text-justify {{game.about}}
                h4 Features
                ul #[li.text-justify(v-for="feat in game.features") {{ feat }}]
                h4 More Information
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
                                IconLink(:link="link.url" size="2x" :icon="link.icon" :name="link.name")
</template>
<script lang="ts">
import { GameInfo, MediaType } from "@/data/models";
import { Options, Vue } from "vue-class-component";
import IconLink from "../components/IconLink.vue";
import Galleria from "primevue/galleria";
import * as GameData from "../data/games";
@Options({
  components: { IconLink, Galleria },
})
export default class GameDetails extends Vue {
  game = (null as unknown) as GameInfo;
  mType = MediaType;
  publicPath = process.env.BASE_URL + "media/img/";
  mounted() {
    this.game = GameData.default.Games.filter(
      (p) => p.id == this.$route.params.id.toString()
    )[0];
  }
}
</script>
<style lang="scss">
p {
  white-space: pre-wrap;
}
small {
  .er {
    //Small.er, get it?
    font-size: 0.8rem;
  }
}
.header {
  width: 100%;
  padding-bottom: 5px;
  h2 {
    margin: 0;
  }
}
.fadeEdge {
  border-bottom: 1px solid #17b2ff;
}
</style>
