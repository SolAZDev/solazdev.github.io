<template lang="pug">
q-page.q-px-md
  //- .gt-lg.q-pb-lg.print-hide.text-caption.text-left When printing, please select paper: Legal (US), in Landscape, No Margins and 95% Scale
  .row.q-col-gutter-md.resume
    .col-12.col-md-4.col-lg-3.rc
      .row.q-col-gutter-sm
        .col-12.row.justify-center
          q-img(:src='Resume.icon', :ratio='1', spinner-color='primary', spinner-size='82px', width="35%")
        .col-12.text-center
          .text-h6.text-primary.text-center {{Resume.name}}
          .text-subtitle2.text-primary.text-center {{Resume.subtitle}}
          .text-subtitle2 {{Resume.email}} - {{Resume.local}}
      q-space
      .lt-md
        .text-subtitle1.text-primary.smCmdL Current Work Objective
        .text-subtitle2.text-justify {{Resume.objective}}
      div
        .text-subtitle1.text-primary.smCmdL Major Skills
        .text-subtitle2 {{listToText(Resume.skills.major)}}
      div
        .text-subtitle1.text-primary.smCmdL Minor Skills
        .text-subtitle2 {{listToText(Resume.skills.minor)}}
      div
        .text-subtitle1.text-primary.smCmdL Languages & Frameworks
        .text-subtitle2 {{listToText(Resume.skills.frameworks)}}
      div
        .text-subtitle1.text-primary.smCmdL Software
        .text-subtitle2 {{listToText(Resume.skills.software)}}
      div
        .text-subtitle1.text-primary.smCmdL Education
        div(v-for="edu in Resume.education")
          .text-subtitle1 {{edu.degree}} - #[small.text-subtitle2 {{edu.locale}}]
        .text-subtitle1.text-primary.smCmdL Awards
        div(v-for="award in Resume.awards")
          .text-subtitle1 {{award.name}} - #[small {{award.by}}]

    .col-12.col-md-8.col-lg-9
      div.container.gt-sm
        .text-h5.text-primary.text-center Current Work Objective
        div.text-justify {{Resume.objective}}

      .text-h5.text-primary.q-mb-md.text-center Work Experience
      .row.q-col-gutter-xs
        .col-12.col-md-6.col-lg-4(v-for="work in Resume.work")
          q-card.no-shadow
            q-card-section.q-pb-none
              .text-center
                .text-h6.text-primary {{work.position}}
                .text-subtitle2 {{work.employer}} - {{work.duration}}
            q-card-section.q-pt-sm
              .text-center.text-body1 Responsibilities
              ul.q-pl-sm.q-mt-xs.text-justify #[li.text-subtitle2(v-for="resp in work.responsibilities") {{resp}}]
</template>
<script lang="ts">
import * as resume from 'src/data/resume';
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Resume extends Vue {
  Resume = resume.default;

  listToText(arr: Array<string>){
    return arr.toString().replace(/,/g, " | ")
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

.text-subtitle2
  font-weight: unset
</style>
