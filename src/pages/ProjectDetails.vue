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
      .text-h6.text-center.fade-bottom-edge Features
      ul #[li.text-body2.text-justify(v-for="feat in project.features") {{ feat }}]
      .text-h6.text-center.fade-bottom-edge More Information
      .row
        //- .col-6.text-left Status
        //- .col-6.text-right {{project.status}}
        //- .col-6.text-left Genre
        //- .col-6.text-right {{project.genre}}
        //- .col-6.text-left Target Platforms
        //- .col-6.text-right {{project.platform}}
        //- .col-12.text-center(v-if="project.links!=null") Links
          //- .row
            //- .col(v-for="link in project.links")
            //-   IconLink(:link="link.url" size="lg" :icon="link.icon" :name="link.name")
</template>
<script lang="ts">
import { MediaType, ProjectInfo } from "src/data/models";
import { Options, Vue } from "vue-class-component";
import * as projectData from "../data/projects";
import IconLink from 'components/IconLink.vue'

@Options({components:{IconLink}})
export default class projectDetails extends Vue {
  publicPath = "/media/";
  project = {} as unknown as ProjectInfo;
  mType = MediaType;
  slide=""
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.project = projectData.default.projects.filter(
      (p) => p.id == this.$route.params.id.toString()
    )[0];
    this.slide=this.project.media[0].description;
  }
  get CarouselSize(){
    if(this.$q.screen.lt.sm){return "35vh"}
    if(this.$q.screen .lt.md){return "40vh"}
    if(this.$q.screen.gt.md){return "65vh"}
  }
}
</script>

<style lang="sass">
.header
  width: 100%

</style>
