<template lang="pug">
q-page.q-px-xl
  //- .gt-lg.q-pb-lg.print-hide.text-caption.text-left When printing, please select paper: Legal (US), in Landscape, No Margins and 99% Scale
  .row.q-col-gutter-md.resume
    .col-12.col-md-4.col-lg-3.rc
      .row.q-col-gutter-sm
        .col-12.text-center.q-mt-lg
          .text-h4.text-primary.text-center {{Resume.name}}
          .text-h6.text-primary.text-center {{Resume.subtitle}}
          .text-body1 {{Resume.email}} - {{Resume.number}}

      q-space
      .lt-md.q-my-xl
        .text-subtitle1.text-primary.smCmdL Current Work Objective
        .text-subtitle2.text-justify {{Resume.objective}}

      .column.q-gutter-y-lg.q-mb-sm
        div
          .text-body1.text-primary.smCmdL Major Skills
          .text-subtitle2 {{listToText(Resume.skills.major)}}

        div
          .text-body1.text-primary.smCmdL Minor Skills
          .text-subtitle2 {{listToText(Resume.skills.minor)}}

        div
          .text-body1.text-primary.smCmdL Languages & Frameworks
          .text-subtitle2 {{listToText(Resume.skills.frameworks)}}

        div
          .text-body1.text-primary.smCmdL Software
          .text-subtitle2 {{listToText(Resume.skills.software)}}

        div
          .text-body1.text-primary.smCmdL Education
          .column.q-gutter-y-sm
            div(v-for="edu in Resume.education")
              .text-subtitle1 {{edu.degree}} - #[small.text-subtitle2 {{edu.locale}}]

        div
          .text-subtitle1.text-primary.smCmdL Awards
          .column.q-gutter-y-sm
            div(v-for="award in Resume.awards")
              .text-subtitle1 {{award.name}} - #[small {{award.by}}]

    .col-12.col-md-8.col-lg-9
      div.container.gt-sm.q-mt-lg.q-mb-xl
        .text-h5.text-primary.text-center Current Work Objective
        .text-body1.text-justify {{Resume.objective}}

      .text-h5.text-primary.q-mb-md.text-center Work Experience
      .row.q-col-gutter-xs
        .col-12.col-md-6.col-lg-4(v-for="work in WorkExperience")
          q-card.no-shadow.q-card-experience
            q-card-section.q-pb-none
              .text-center
                .text-h6.text-primary {{work.position}} #[span.text-white.text-subtitle2 at {{work.employer}}]
            q-card-section.q-pt-none
              .text-center.text-body2 Responsibilities
              ul.q-pl-sm.q-mt-xs.q-mb-none.text-justify.q-gutter-y-xs
                li.text-subtitle2(v-for="resp in work.responsibilities") {{resp}}
</template>
<script lang="ts">
import resume from "src/data/resume";
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Resume extends Vue {
  Resume = resume;

  listToText(arr: Array<string>) {
    return arr.toString().replace(/,/g, " | ");
  }

  get WorkExperience(){
    return resume.work.splice(0,6);
  }
}
</script>
<style lang="sass">
.leftRow
  @media (min-width: $breakpoint-md-min)
    border-right: 1px solid $primary

.resume
  min-height: 88.5vh

.space
    flex-grow: 1

.rc
  display: flex
  flex-direction: column

.noDecoList
  list-style-type: none

.smCmdL
  @media (max-width: $breakpoint-sm-max)
    text-align: center
  @media (min-width: $breakpoint-md-min)
    text-align: left

.q-card
  min-height: 365px

.q-card-experience
  min-height: 325px


.text-subtitle2
  font-weight: unset
</style>
